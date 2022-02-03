import { describeRating } from "../describeRating";

describe("describeRating gets a number and returns string with rate", () => {
  test("get number and return rate", () => {
    expect(describeRating(8)).toBe("good");
  });
  test("get nothing and return string unknown", () => {
    expect(describeRating()).toBe("unknown");
  });
  test("get number as string and return rate", () => {
    expect(describeRating("6")).toBe("normal");
  });
  test("get string and return string unknown", () => {
    expect(describeRating("something")).toBe("unknown");
  });
});
