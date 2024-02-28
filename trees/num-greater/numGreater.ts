import { n } from "vitest/dist/reporters-MmQN-57K";
import { TreeNodeNum } from "../common/tree";

/** numGreater(lowerBound): starting from the invoking node and moving
 * through its children, return a count of the number of nodes whose value
 * is greater than lowerBound. */

function numGreater(node: TreeNodeNum, lowerBound: number): number {
  const stack: TreeNodeNum[] = [node];

  let numGreaterCount: number = 0;

  while(stack.length !== 0) {
    const currentNode: TreeNodeNum = stack.pop()!;
    if(currentNode.val > lowerBound) {
      numGreaterCount++;
    }

    for(const child of currentNode.children) {
      stack.push(child);
    }
  }
  return numGreaterCount;
}

export { numGreater };