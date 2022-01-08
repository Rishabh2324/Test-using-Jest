const getPeople = async (fetch) => {
  const getRequest = await fetch("https://swapi.dev/api/people");
  const data = await getRequest.json();
  return {
    count: data.count,
    results: data.results,
  };
};

export default getPeople;
