import { BNodeNum } from "../common/bintree";

/** dfsPreOrder(): Traverse from the invoking node using pre-order DFS.
 * Returns an array of visited nodes. */

function preOrder(node: BNodeNum | null): number[] {
  if(node === null) return [];

  let branchNodes: number[] = [];

  if(node.lnode) {
    branchNodes.push(...preOrder(node.lnode));
  }
  if (node.rnode) {
    branchNodes.push(...preOrder(node.rnode));
  }

  return [node.val, ...branchNodes]
}


/** dfsPostOrder(): Traverse from the invoking node using post-order DFS.
 * Returns an array of visited nodes. */

function postOrder(node: BNodeNum | null): number[] {
  if(node === null) return [];

  let branchNodes: number[] = [];

  if(node.lnode) {
    branchNodes.push(...postOrder(node.lnode));
  }
  if (node.rnode) {
    branchNodes.push(...postOrder(node.rnode));
  }

  return [...branchNodes, node.val]
}

export { preOrder, postOrder };