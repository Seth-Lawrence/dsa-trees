import { BNodeNum } from "../common/bintree";

/** dfsPreOrder(): Traverse from the invoking node using pre-order DFS.
 * Returns an array of visited nodes. */

function preOrder(node: BNodeNum | null): number[] {
  if(node === null) return [];

  let branchValues: number[] = [];

  if(node.lnode) {
    branchValues.push(...preOrder(node.lnode));
  }
  if (node.rnode) {
    branchValues.push(...preOrder(node.rnode));
  }

  return [node.val, ...branchValues]
}


/** dfsPostOrder(): Traverse from the invoking node using post-order DFS.
 * Returns an array of visited nodes. */

function postOrder(node: BNodeNum | null): number[] {
  if(node === null) return [];

  let branchValues: number[] = [];

  if(node.lnode) {
    branchValues.push(...postOrder(node.lnode));
  }
  if (node.rnode) {
    branchValues.push(...postOrder(node.rnode));
  }

  return [...branchValues, node.val]
}

export { preOrder, postOrder };