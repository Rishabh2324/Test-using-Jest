const googleSearch = require("./script");

dbMock = [
  "cats.com",
  "dogs.com",
  "myfavouritedogs.com",
  "myFavouriteCats.com",
  "animals.com",
  "tiger.com",
  "mouse.com",
];

describe('googleSearch', () => {
  
})

it("this is a test", () => {
  expect('hello').toBe('hello')
});
it("this is a test two", () => {
  expect('hello').toBe('hello')
});

it("it is searchign google", () => {
  expect(googleSearch("mouse", dbMock)).toEqual(['mouse.com'])
  expect(googleSearch("animals", dbMock)).toEqual(['animals.com'])
  expect(googleSearch("dogs", dbMock)).toEqual(['dogs.com','myfavouritedogs.com'])
});

it('eork with undefined adn null input' , () => {
  expect(googleSearch(undefined,dbMock)).toEqual([]);
  expect(googleSearch(null,dbMock)).toEqual([])
})

it('It does not return more than 3 strings' , () => {
  expect(googleSearch('.com',dbMock).length).toEqual(3);
})