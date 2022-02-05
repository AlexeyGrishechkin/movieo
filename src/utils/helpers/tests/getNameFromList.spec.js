import { getNameFromList } from "../getNameFromList";

const mockCountriesList = [
  { id: 1, name: "Canada" },
  { id: 2, name: "United Kingdom" },
  { id: 3, name: "Denmark" },
  { id: 4, name: "Belgium" },
];

const invalidCountriesList = [
  { name: "Canada" },
  { id: 2 },
  { id: 3, name: "Denmark" },
  { id: 4, label: 5 },
  { key: "USA" },
];

const listOfObjects = [{ id: 2 }, { id: 4, label: 5 }, { key: "USA" }];

describe("getNameFromList", () => {
  test("givens array of objects with key name - returns list of name as string", () => {
    expect(getNameFromList(mockCountriesList)).toBe(
      "Canada, United Kingdom, Denmark, Belgium"
    );
  });
  test("given array with different parameters, find key name - returns list of name as string", () => {
    expect(getNameFromList(invalidCountriesList)).toBe("Canada, Denmark");
  });
  test("given nothing - return string no data", () => {
    expect(getNameFromList()).toBe("no data");
  });
  test("given array of objects without key name - returns string no data", () => {
    expect(getNameFromList(listOfObjects)).toBe("no data");
  });
});
