import { TreeNodeNum } from "../common/tree";

/** Get maximum depth from node.
 *
 * Maximum depth: length of longest path from node to a leaf.
 **/

function maxDepth(node: TreeNodeNum | null): number {
  if (node === null) return 0;
  let branchMaxDepth: number = 1;
  let currentDepth: number = 1;

  if (node.children.length > 0) {
    for (let child of node.children) {
      const branchDepth = currentDepth + maxDepth(child);
      branchMaxDepth = branchDepth > branchMaxDepth ? branchDepth : branchMaxDepth;
    }
  }

  return branchMaxDepth;
}

export { maxDepth };


// does node have children
// increase depth +1
//iterate through children
//
