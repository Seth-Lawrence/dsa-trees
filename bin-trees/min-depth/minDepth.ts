import { BNodeNum } from "../common/bintree";

/** Get minimum depth from node.
 *
 * Minimum depth: length of shortest path from node to a leaf.
 **/

function minDepth(node: BNodeNum): number {
  let shortestPath: number = Infinity;
  let leftPath: number = 1;
  let rightPath: number = 1;

  debugger;

  if (node.lnode) {
    leftPath = leftPath + minDepth(node.lnode)
    shortestPath = leftPath < shortestPath ? leftPath : shortestPath;
  }

  if (node.rnode) {
    rightPath = rightPath + minDepth(node.rnode);
    shortestPath = rightPath < shortestPath ? rightPath : shortestPath;
  }

  shortestPath = leftPath < shortestPath ? leftPath : shortestPath;
  shortestPath = rightPath < shortestPath ? rightPath : shortestPath;

  return shortestPath;
}

export { minDepth };