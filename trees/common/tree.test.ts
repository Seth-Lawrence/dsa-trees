import { expect, it } from "vitest";
import { Tree, TreeNodeNum } from "./tree";

const emptyTree = new Tree();

//         1
//         |
//         2

const smallTree = new Tree(
    new TreeNodeNum(1, [
      new TreeNodeNum(2),
    ]));

//            1
//          / | \
//        2   3   4
//               / \
//              5   6
//                   \
//                    7
//                     \
//                      8

const largeTree = new Tree(
    new TreeNodeNum(1, [
      new TreeNodeNum(2),
      new TreeNodeNum(3),
      new TreeNodeNum(4, [
        new TreeNodeNum(5),
        new TreeNodeNum(6, [
          new TreeNodeNum(7, [
            new TreeNodeNum(8),
          ]),
        ]),
      ]),
    ]));


//            1
//          / | \
//        2   3   4
//       / \     / \
//      9  10   5   6
//           \        \
//           11        7
//             \        \
//             12        8
//            /  \
//          13    14

const largeTree2 = new Tree(
    new TreeNodeNum(1, [
      new TreeNodeNum(2, [
        new TreeNodeNum(9),
        new TreeNodeNum(10, [
          new TreeNodeNum(11, [
            new TreeNodeNum(12, [
              new TreeNodeNum(13),
              new TreeNodeNum(14)
            ])
          ])
        ])
      ]),
      new TreeNodeNum(3),
      new TreeNodeNum(4, [
        new TreeNodeNum(5),
        new TreeNodeNum(6, [
          new TreeNodeNum(7, [
            new TreeNodeNum(8),
          ]),
        ]),
      ]),
    ]));

it("can create trees", function () {
  expect(largeTree.root!.val).toBe(1);
  expect(largeTree2.root!.val).toBe(1);
  expect(smallTree.root!.val).toBe(1);
});

export { smallTree, largeTree, largeTree2 };