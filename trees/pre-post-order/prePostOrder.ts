import { TreeNodeNum } from "../common/tree";

/** dfsPreOrder(): Traverse from the invoking node using pre-order DFS.
 * Returns an array of visited nodes. */

function preOrder(node: TreeNodeNum | null): number[] {
  // Use recursion to traverse tree and build an array made up of node values
  // Build array going UP
  if(node === null) return [];
  debugger;
  const branchVal: number[] = [];
  if(node.children.length !== 0) {
    for(const child of node.children) {
      branchVal.push(...preOrder(child));
    }
  }
  return [node!.val, ...branchVal]
}


/** dfsPostOrder(): Traverse from the invoking node using post-order DFS.
 * Returns an array of visited nodes. */

function postOrder(node: TreeNodeNum | null): number[] {
  return [42];
}

export { preOrder, postOrder };