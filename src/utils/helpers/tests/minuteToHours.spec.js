import { minuteToHours } from "../minuteToHours";

describe("convert minute to hours", () => {
  test("get minutes and convert to hours in format HH:MM", () => {
    expect(minuteToHours(148)).toBe("02:28");
  });
  test("nothing to get and return string 00:00", () => {
    expect(minuteToHours()).toBe("00:00");
  });
});
