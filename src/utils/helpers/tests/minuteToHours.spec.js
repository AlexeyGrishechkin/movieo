import { minuteToHours } from "../minuteToHours";

describe("minute to hours", () => {
  test("given minutes - convert to hours in format HH:MM", () => {
    expect(minuteToHours(148)).toBe("02:28");
  });
  test("nothing to given - returns string 00:00", () => {
    expect(minuteToHours()).toBe("00:00");
  });
});
