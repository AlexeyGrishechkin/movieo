import { expandList } from "../expandList";

const countriesList = [
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

describe("expandList gets array of objects with key name and returns list of name as string", () => {
  test("get valid array of objects with key name", () => {
    expect(expandList(countriesList)).toBe(
      "Canada, United Kingdom, Denmark, Belgium"
    );
  });
  test("get array with different parameters, find key name and return list of name as string", () => {
    expect(expandList(invalidCountriesList)).toBe("Canada, Denmark");
  });
  test("get nothing and return string no data", () => {
    expect(expandList()).toBe("no data");
  });
  test("get array of objects without key name and return string no data", () => {
    expect(expandList(listOfObjects)).toBe("no data");
  });
});
