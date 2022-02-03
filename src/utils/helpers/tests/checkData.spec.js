import { checkData } from "../checkData";

describe("checkData gets two parameters and returns these joined parameters as string", () => {
  test("get data and description", () => {
    expect(checkData(30000, "$")).toBe("30000 $");
  });
  test("get only one parameter and return string", () => {
    expect(checkData(100)).toBe("100 ");
  });
  test("get nothing and return dash", () => {
    expect(checkData()).toBe("-");
  });
});
