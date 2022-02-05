import { createGenreList } from "../createGenreList";

const mockGenreList = [
  { id: 1, name: "action" },
  { id: 2, name: "comedy" },
  { id: 3, name: "thriller" },
  { id: 4, name: "cartoon" },
  { id: 5, name: "family" },
];
const filmGenre = [1, 3];

describe("createGenreList", () => {
  test("given array of objects with id and name and array of number (id) - returns names of genre as string", () => {
    expect(createGenreList(mockGenreList, filmGenre)).toBe("action, thriller");
  });
  test("given valid array of objects and array of number with unknown id - returns excuses text as string", () => {
    expect(createGenreList(mockGenreList, [6])).toBe(
      "sorry, no genre data for this film"
    );
  });
  test("array of objects is empty - returns excuses text as string", () => {
    expect(createGenreList([], [3])).toBe("sorry, no genre data for this film");
  });
});
