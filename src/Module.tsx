import { useFragment, usePaginationFragment } from "react-relay";
import { graphql } from "relay-runtime";
import { Module_module$key } from "./__generated__/Module_module.graphql";
import { Module_functions$key } from "./__generated__/Module_functions.graphql";

export function Module(props: { mod: Module_module$key }) {
  const data = useFragment(
    graphql`
      fragment Module_module on MoveModule {
        name
        ...Module_functions
      }
    `,
    props.mod,
  );

  return (
    <div>
      <div>Name: {data.name}</div>
      <div>
        Functions: <FunctionList mod={data} />
      </div>
    </div>
  );
}

export function FunctionList(props: { mod: Module_functions$key }) {
  const { data, loadNext, hasNext } = usePaginationFragment(
    graphql`
      fragment Module_functions on MoveModule
      @refetchable(queryName: "ModuleFunctionsPaginationQuery") {
        functions(first: $count, after: $cursor)
          @connection(key: "FunctionList_functions") {
          pageInfo {
            endCursor
            startCursor
            hasNextPage
            hasPreviousPage
          }
          edges {
            cursor
            node {
              name
            }
          }
        }
      }
    `,
    props.mod,
  );

  return (
    <span>
      {data.functions?.edges.map((edge) => edge.node.name).join(", ")}
      {hasNext ? (
        <a href="#" onClick={() => loadNext(5)}>
          Load more
        </a>
      ) : null}
    </span>
  );
}
