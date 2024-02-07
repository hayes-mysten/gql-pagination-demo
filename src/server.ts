import SchemaBuilder, { brandWithType } from "@pothos/core";
import RelayPlugin, { resolveArrayConnection } from "@pothos/plugin-relay";
import {
  SuiClient,
  getFullnodeUrl,
  SuiObjectData,
  SuiMoveNormalizedModule,
  SuiMoveNormalizedFunction,
} from "@mysten/sui.js/client";

import { createServer } from "node:http";
import { createYoga } from "graphql-yoga";

const builder = new SchemaBuilder<{
  Scalars: {
    ID: {
      Input: string;
      Output: string;
    };
    SuiAddress: {
      Input: string;
      Output: string;
    };
  };
}>({
  plugins: [RelayPlugin],
  relayOptions: {
    cursorType: "String",
    clientMutationId: "omit",
  },
});
builder.scalarType("SuiAddress", {
  serialize: (value) => value,
  parseValue: (value) => value as string,
});

const client = new SuiClient({ url: getFullnodeUrl("mainnet") });

const ObjectType = builder.objectRef<SuiObjectData>("Object");
ObjectType.implement({
  fields: (t) => ({
    address: t.exposeString("objectId"),
    asMovePackage: t.field({
      type: MovePackage,
      resolve: (obj) => {
        return obj;
      },
    }),
  }),
});

const MovePackage = builder.objectRef<SuiObjectData>("MovePackage");

builder.node(MovePackage, {
  loadOne: async (id) => {
    const result = await client.getObject({
      id,
    });

    return { ...result.data, __typename: "MovePackage" } as SuiObjectData;
  },
  id: {
    resolve: (obj) => obj.objectId,
  },
  fields: (t) => ({
    address: t.exposeString("objectId"),
    modules: t.connection({
      type: MoveModule,
      resolve: async (obj, args) => {
        const modules = await client.getNormalizedMoveModulesByPackage({
          package: obj.objectId,
        });

        return resolveArrayConnection(
          {
            args,
          },
          Object.values(modules),
        );
      },
    }),
  }),
});

const MoveModule = builder.objectRef<SuiMoveNormalizedModule>("MoveModule");
builder.node(MoveModule, {
  id: {
    resolve: (obj) => `${obj.address}:${obj.name}`,
  },
  loadOne: async (id) => {
    const result = await client.getNormalizedMoveModule({
      package: id.split(":")[0],
      module: id.split(":")[1],
    });

    if (result) {
      brandWithType(result, MoveModule);
    }

    return result;
  },
  fields: (t) => ({
    name: t.exposeString("name"),
    functions: t.connection({
      type: MoveFunction,
      resolve: async (obj, args) => {
        const functions = [];

        for (const [name, func] of Object.entries(obj.exposedFunctions)) {
          functions.push({
            ...func,
            name,
            module: obj.name,
            package: obj.address,
          });
        }

        return resolveArrayConnection(
          {
            args,
          },
          functions,
        );
      },
    }),
  }),
});

const MoveFunction = builder.objectRef<
  SuiMoveNormalizedFunction & { name: string; module: string; package: string }
>("MoveFunction");
builder.node(MoveFunction, {
  id: {
    resolve: (obj) => `${obj.package}:${obj.module}:${obj.name}`,
  },
  loadOne: async (id) => {
    const input = {
      package: id.split(":")[0],
      module: id.split(":")[1],
      function: id.split(":")[2],
    };
    const result = {
      ...(await client.getNormalizedMoveFunction(input)),
      name: input.function,
      module: input.module,
      package: input.package,
    };

    if (result) {
      brandWithType(result, MoveFunction);
    }

    return result;
  },
  fields: (t) => ({
    name: t.exposeString("name"),
  }),
});

builder.queryType({
  fields: (t) => ({
    object: t.field({
      type: ObjectType,
      args: {
        address: t.arg({ type: "SuiAddress", required: true }),
      },
      nullable: true,
      resolve: async (_, { address }) => {
        const result = await client.getObject({
          id: address,
        });

        return result.data;
      },
    }),
  }),
});

const yoga = createYoga({ schema: builder.toSchema() as never });

// Pass it into a server to hook into request handlers.
const server = createServer(yoga);

// Start the server and you're done!
server.listen(4000, () => {
  console.info("Server is running on http://localhost:4000/graphql");
});
