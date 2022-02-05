import { describeRating } from "../describeRating";

describe("describeRating", () => {
  test("given a rating number - returns estimation string')", () => {
    expect(describeRating(8)).toBe("good");
  });
  test("given nothing - returns string unknown", () => {
    expect(describeRating()).toBe("unknown");
  });
  test("given a rating number as string - returns estimation string", () => {
    expect(describeRating("6")).toBe("normal");
  });
  test("given string - returns string unknown", () => {
    expect(describeRating("something")).toBe("unknown");
  });
});
