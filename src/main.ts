// test

import { sortedArrayToBST } from "./tree_ts/sortedArrayToBST";

const list = [2,4,6,8,10,12,14];

console.log(sortedArrayToBST(list));
const tree = sortedArrayToBST(list);

tree?.insertNode(5);
tree?.insertNode(7);
tree?.insertNode(20);
tree?.insertNode(11);

console.log(tree);

