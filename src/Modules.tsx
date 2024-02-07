import { useLazyLoadQuery, usePaginationFragment } from "react-relay";
import { graphql } from "relay-runtime";
import { Modules_package$key } from "./__generated__/Modules_package.graphql";
import { ModulesByPackageQuery } from "./__generated__/ModulesByPackageQuery.graphql";
import { Module } from "./Module";

export function Modules(props: { pkg: string }) {
  const data = useLazyLoadQuery<ModulesByPackageQuery>(
    graphql`
      query ModulesByPackageQuery(
        $address: SuiAddress!
        $count: Int = 5
        $cursor: String
      ) {
        object(address: $address) {
          address
          asMovePackage {
            ...Modules_package
          }
        }
      }
    `,
    {
      address: props.pkg,
    },
  );

  return (
    <div>
      <h1>Modules</h1>
      <p>Modules for {data.object?.address}</p>
      {data.object?.asMovePackage && (
        <ModulesList pkg={data.object.asMovePackage} />
      )}

      {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
    </div>
  );
}

export function ModulesList(props: { pkg: Modules_package$key }) {
  const { data, loadNext, hasNext } = usePaginationFragment(
    graphql`
      fragment Modules_package on MovePackage
      @refetchable(queryName: "PackageModulesPaginationQuery") {
        id
        address
        modules(first: $count, after: $cursor)
          @connection(key: "Modules_modules") {
          edges {
            cursor
            node {
              ...Module_module
            }
          }
        }
      }
    `,
    props.pkg,
  );

  return (
    <div>
      <ol>
        {data.modules?.edges.map((edge) => (
          <li style={{ paddingBottom: 50 }}>
            <Module key={edge.cursor} mod={edge.node} />
          </li>
        ))}
      </ol>

      <button disabled={!hasNext} onClick={() => loadNext(5)}>
        Load more
      </button>

      {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
    </div>
  );
}
