import { TreeNodeNum } from "../common/tree";

/** sumValues(): add up all values of node and its descendants.
 * Returns sum as an integer. */
function sumValues(node: TreeNodeNum): number {
  const stack:TreeNodeNum[] = [node];
  let sum = 0;

  while (stack.length !== 0) {
    //TODO: Could use bang ! on the end of pop to allow 12 and 14 to not need a !
    const current = stack.pop();
    sum += current!.val

    for (const child of current!.children) {
      stack.push(child)
    }
  }
  return sum;
}

export { sumValues };
