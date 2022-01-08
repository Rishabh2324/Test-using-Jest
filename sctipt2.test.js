import fetch from "node-fetch";
import getPeople from "./script2";

it("calls swapi to call people", () => {
  expect.assertions(1);
  return getPeople(fetch).then((response) => {
    expect(response.count).toEqual(82);
  });
});
