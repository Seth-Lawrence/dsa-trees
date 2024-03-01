import { BNodeNum } from "../common/bintree";

/** Get minimum depth from node.
 *
 * Minimum depth: length of shortest path from node to a leaf.
 **/

function minDepth(node: BNodeNum): number {
  let shortestPath: number = Infinity;
  let leftPath: number | null = null;
  let rightPath: number | null = null;
  const currentDepth = 1;
  debugger;
  // TODO: What is the base case?
  if (node.lnode) {
    leftPath = currentDepth + minDepth(node.lnode)
    shortestPath = leftPath < shortestPath ? leftPath : shortestPath;
  }

  if (node.rnode) {
    rightPath = currentDepth + minDepth(node.rnode);
    shortestPath = rightPath < shortestPath ? rightPath : shortestPath;
  }

  if(leftPath !== null || rightPath !== null) return shortestPath;

  return currentDepth;
}

export { minDepth };