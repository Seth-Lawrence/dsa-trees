import { TreeNodeNum } from "../common/tree";

/** Get maximum depth from node.
 *
 * Maximum depth: length of longest path from node to a leaf.
 **/

function maxDepth(node: TreeNodeNum | null): number {
  if (node === null) return 0;
  // debugger;
  let branchMaxDepth: number = 1;
  let currentDepth: number = 1;
  // let max: number = 1;
  debugger
  if (node.children.length > 0) {
    for (let child of node.children) {
      const branchDepth = currentDepth + maxDepth(child);
      // max = depth > max ? depth : max;
      branchMaxDepth = branchDepth > branchMaxDepth ? branchDepth : branchMaxDepth;
    }
  }

  // return max;
  return branchMaxDepth;


  // const stack:TreeNodeNum[] = [node];
  // let depth = 0;
  // let max = 0;

  // while (!(stack.length === 0)) {
  //   const current = stack.pop();
  //   depth++

  //   for (let child of current!.children) {
  //     stack.push(child)
  //     depth++
  //   }
  //   max = depth > max ? depth : max;
  //   depth = 0;
  // }
  // return max;
}

export { maxDepth };


// does node have children
// increase depth +1
//iterate through children
//
