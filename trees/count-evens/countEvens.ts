import { TreeNodeNum } from "../common/tree";

/** countEvens(): starting from the invoking node and moving through its
 * children, count how many nodes have even values. Returns that count as
 * an integer. */
function countEvens(node: TreeNodeNum): number {
  // Use a stack (array) to gather nodes
  const stack: TreeNodeNum[] = [node];
  // Define evenCount variable
  let count: number = 0;
  // Use loop to traverse depth first search
  while(stack.length !== 0) {
    // Define current value as popped off node
    const current: TreeNodeNum = stack.pop()!;
    // If value % 2 === 0 increment count
    if(current.val % 2 === 0) count++;
    // Loop through chrildren, add to stack
    for(const child of current.children) {
      stack.push(child);
    }
  }
// return count
  return count;
}

export { countEvens };
