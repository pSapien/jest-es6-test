import { add, multiply } from "./math.js";

describe("math spec", () => {
  test("should add", () => {
    expect(add(1, 2)).toBe(3);
  });

  test("should multiply", () => {
    expect(multiply(1, 2)).toBe(2);
  });
});
