/**
 * @generated SignedSource<<e2a420c3b0c7b261d176177fe85b5e98>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type Module_module$data = {
  readonly name: string;
  readonly " $fragmentSpreads": FragmentRefs<"Module_functions">;
  readonly " $fragmentType": "Module_module";
};
export type Module_module$key = {
  readonly " $data"?: Module_module$data;
  readonly " $fragmentSpreads": FragmentRefs<"Module_module">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "Module_module",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "name",
      "storageKey": null
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "Module_functions"
    }
  ],
  "type": "MoveModule",
  "abstractKey": null
};

(node as any).hash = "1e01ebee877d2e9defe1b12bf1f95871";

export default node;
