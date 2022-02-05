import { checkData } from "../checkData";

describe("checkData", () => {
  test("checkData givens 2 parameters - returns containing these parameters as string", () => {
    expect(checkData(30000, "$")).toBe("30000 $");
  });
  test("given only 1 parameter - returns string containing this parameter", () => {
    expect(checkData(100)).toBe("100 ");
  });
  test("given nothing - return dash", () => {
    expect(checkData()).toBe("-");
  });
});
