import { BNodeNum } from "../common/bintree";
import {QueueNum} from "../common/queue";
import { minDepth } from "../min-depth/minDepth";
/** Minimum depth from node to an "incomplete node".
 *
 * An incomplete node is a node with 0 or 1 children (not 2).
 */

function minDepthToIncompleteNode(node: BNodeNum): number {
  let minDepth: number = Infinity;
  let currentDepth: number = 1;
  debugger;
  // TODO: Could use Math.min, see solution
  // TODO: What is the base case?
  if (node.lnode && node.rnode) {
    currentDepth = currentDepth + minDepthToIncompleteNode(node.lnode)
    minDepth = (currentDepth < minDepth) ? currentDepth : minDepth;
    currentDepth = currentDepth + minDepthToIncompleteNode(node.rnode);
    minDepth = (currentDepth < minDepth) ? currentDepth : minDepth;
  }

  minDepth = (currentDepth < minDepth) ? currentDepth : minDepth;

  return minDepth;

}

export { minDepthToIncompleteNode };