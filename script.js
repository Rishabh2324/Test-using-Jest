const googledatabase = [
  "cats.com",
  "dogs.com",
  "myfavouritedogs.com",
  "myFavouriteCats.com",
  "animals.com",
  "tiger.com",
  "mouse.com",
];

const googleSearch = (searchInput, db) => {
  const matches = db.filter((website) => {
    return website.includes(searchInput);
  });
  return matches.length > 3 ? matches.slice(0, 3) : matches;
};

console.log(googleSearch("cats", googledatabase));

export default googleSearch;
