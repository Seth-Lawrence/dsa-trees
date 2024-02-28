import { TreeNodeNum } from "../common/tree";

/** sumValues(): add up all values of node and its descendants.
 * Returns sum as an integer. */
function sumValues(node: TreeNodeNum): number {
  const stack:TreeNodeNum[] = [node];
  let sum = 0;

  while (!(stack.length === 0)) {
    const current = stack.pop();
    sum += current!.val

    for (let child of current!.children) {
      stack.push(child)
    }
  }
  return sum;
}

export { sumValues };
