/**
 * @generated SignedSource<<054da21e2d00137966410a14a8bd335d>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ModulesByPackageQuery$variables = {
  address: any;
  count?: number | null | undefined;
  cursor?: string | null | undefined;
};
export type ModulesByPackageQuery$data = {
  readonly object: {
    readonly address: any;
    readonly asMovePackage: {
      readonly " $fragmentSpreads": FragmentRefs<"Modules_package">;
    } | null | undefined;
  } | null | undefined;
};
export type ModulesByPackageQuery = {
  response: ModulesByPackageQuery$data;
  variables: ModulesByPackageQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "address"
  },
  {
    "defaultValue": 5,
    "kind": "LocalArgument",
    "name": "count"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "cursor"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "address",
    "variableName": "address"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "address",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v4 = [
  {
    "kind": "Variable",
    "name": "after",
    "variableName": "cursor"
  },
  {
    "kind": "Variable",
    "name": "first",
    "variableName": "count"
  }
],
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "cursor",
  "storageKey": null
},
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v7 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "endCursor",
  "storageKey": null
},
v8 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "hasNextPage",
  "storageKey": null
},
v9 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "__typename",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "ModulesByPackageQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Object",
        "kind": "LinkedField",
        "name": "object",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "MovePackage",
            "kind": "LinkedField",
            "name": "asMovePackage",
            "plural": false,
            "selections": [
              {
                "args": null,
                "kind": "FragmentSpread",
                "name": "Modules_package"
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "ModulesByPackageQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Object",
        "kind": "LinkedField",
        "name": "object",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "MovePackage",
            "kind": "LinkedField",
            "name": "asMovePackage",
            "plural": false,
            "selections": [
              (v3/*: any*/),
              (v2/*: any*/),
              {
                "alias": null,
                "args": (v4/*: any*/),
                "concreteType": "MoveModuleConnection",
                "kind": "LinkedField",
                "name": "modules",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "MoveModuleEdge",
                    "kind": "LinkedField",
                    "name": "edges",
                    "plural": true,
                    "selections": [
                      (v5/*: any*/),
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "MoveModule",
                        "kind": "LinkedField",
                        "name": "node",
                        "plural": false,
                        "selections": [
                          (v6/*: any*/),
                          {
                            "alias": null,
                            "args": (v4/*: any*/),
                            "concreteType": "MoveFunctionConnection",
                            "kind": "LinkedField",
                            "name": "functions",
                            "plural": false,
                            "selections": [
                              {
                                "alias": null,
                                "args": null,
                                "concreteType": "PageInfo",
                                "kind": "LinkedField",
                                "name": "pageInfo",
                                "plural": false,
                                "selections": [
                                  (v7/*: any*/),
                                  {
                                    "alias": null,
                                    "args": null,
                                    "kind": "ScalarField",
                                    "name": "startCursor",
                                    "storageKey": null
                                  },
                                  (v8/*: any*/),
                                  {
                                    "alias": null,
                                    "args": null,
                                    "kind": "ScalarField",
                                    "name": "hasPreviousPage",
                                    "storageKey": null
                                  }
                                ],
                                "storageKey": null
                              },
                              {
                                "alias": null,
                                "args": null,
                                "concreteType": "MoveFunctionEdge",
                                "kind": "LinkedField",
                                "name": "edges",
                                "plural": true,
                                "selections": [
                                  (v5/*: any*/),
                                  {
                                    "alias": null,
                                    "args": null,
                                    "concreteType": "MoveFunction",
                                    "kind": "LinkedField",
                                    "name": "node",
                                    "plural": false,
                                    "selections": [
                                      (v6/*: any*/),
                                      (v9/*: any*/)
                                    ],
                                    "storageKey": null
                                  }
                                ],
                                "storageKey": null
                              }
                            ],
                            "storageKey": null
                          },
                          {
                            "alias": null,
                            "args": (v4/*: any*/),
                            "filters": null,
                            "handle": "connection",
                            "key": "FunctionList_functions",
                            "kind": "LinkedHandle",
                            "name": "functions"
                          },
                          (v3/*: any*/),
                          (v9/*: any*/)
                        ],
                        "storageKey": null
                      }
                    ],
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "PageInfo",
                    "kind": "LinkedField",
                    "name": "pageInfo",
                    "plural": false,
                    "selections": [
                      (v7/*: any*/),
                      (v8/*: any*/)
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": null
              },
              {
                "alias": null,
                "args": (v4/*: any*/),
                "filters": null,
                "handle": "connection",
                "key": "Modules_modules",
                "kind": "LinkedHandle",
                "name": "modules"
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "42705b9ad4f68a9e224c28aafbd3ba59",
    "id": null,
    "metadata": {},
    "name": "ModulesByPackageQuery",
    "operationKind": "query",
    "text": "query ModulesByPackageQuery(\n  $address: SuiAddress!\n  $count: Int = 5\n  $cursor: String\n) {\n  object(address: $address) {\n    address\n    asMovePackage {\n      ...Modules_package\n      id\n    }\n  }\n}\n\nfragment Module_functions on MoveModule {\n  functions(first: $count, after: $cursor) {\n    pageInfo {\n      endCursor\n      startCursor\n      hasNextPage\n      hasPreviousPage\n    }\n    edges {\n      cursor\n      node {\n        name\n        __typename\n      }\n    }\n  }\n  id\n}\n\nfragment Module_module on MoveModule {\n  name\n  ...Module_functions\n}\n\nfragment Modules_package on MovePackage {\n  id\n  address\n  modules(first: $count, after: $cursor) {\n    edges {\n      cursor\n      node {\n        ...Module_module\n        id\n        __typename\n      }\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "ac43c24422f0d82c33e1b651844b52fe";

export default node;
