import { useQuery, gql } from "@apollo/client";

const Module_module = gql(`
  fragment Module_module on MoveModule {
    name
  }
`);
const Modules_package = gql(`
  fragment Modules_package on MovePackage {
    address
    modules(first: $count, after: $cursor) {
      edges {
        cursor
        node {
          ...Module_module
        }
      }
    }
  }
`);

export function ApolloModules(props: { pkg: string }) {
  const { data } = useQuery(
    gql`
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

      ${Modules_package}
      ${Module_module}
    `,
    { variables: { address: props.pkg } },
  );

  return (
    <div>
      <h1>Modules</h1>
      <p>Modules for {props?.pkg}</p>

      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
