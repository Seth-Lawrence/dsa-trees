import { describe, expect, it } from "vitest";
import { largeTree, largeTree2, smallTree } from "../common/tree.test";
import { maxDepth } from "./maxDepth";

describe("maxDepth", function () {
  it("handles simple trees", function () {
    expect(maxDepth(smallTree.root!)).toBe(2);
  });

  it("handles more complex trees", function () {
    expect(maxDepth(largeTree.root!)).toBe(5);
  });

  it("handles another complex trees", function () {
    expect(maxDepth(largeTree2.root!)).toBe(6);
  });
});