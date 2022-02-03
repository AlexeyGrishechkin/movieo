import { createGenreList } from "../createGenreList";

const genreList = [
  { id: 1, name: "action" },
  { id: 2, name: "comedy" },
  { id: 3, name: "thriller" },
  { id: 4, name: "cartoon" },
  { id: 5, name: "family" },
];
const filmGenre = [1, 3];

describe("createGenreList get genreList array of objects with id and name and filmGenre array of number (genres id) and returns names of genre as string", () => {
  test("get valid arrays", () => {
    expect(createGenreList(genreList, filmGenre)).toBe("action, thriller");
  });
  test("get valid genre list and film genre with unknown id and return excuses text as string", () => {
    expect(createGenreList(genreList, [6])).toBe(
      "sorry, no genre data for this film"
    );
  });
  test("genreList is empty and return excuses text as string", () => {
    expect(createGenreList([], [3])).toBe("sorry, no genre data for this film");
  });
});
