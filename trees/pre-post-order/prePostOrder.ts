import { TreeNodeNum } from "../common/tree";

/** dfsPreOrder(): Traverse from the invoking node using pre-order DFS.
 * Returns an array of visited nodes. */

function preOrder(node: TreeNodeNum | null): number[] {
  // Use recursion to traverse tree and build an array made up of node values
  // Build array going UP
  if(node === null) return [];
  // debugger;
  const branchVals: number[] = [];
  // if(node.children.length !== 0) {
  for(const child of node.children) {
    branchVals.push(...preOrder(child));
  }
  // }
  return [node.val, ...branchVals]
}


/** dfsPostOrder(): Traverse from the invoking node using post-order DFS.
 * Returns an array of visited nodes. */

function postOrder(node: TreeNodeNum | null): number[] {


  if(node === null) return [];
  // debugger;
  const branchVals: number[] = [];
  // if(node.children.length !== 0) {
  for(const child of node.children) {
    branchVals.push(...postOrder(child));
  }
  // }
  return [...branchVals, node.val]
}

export { preOrder, postOrder };