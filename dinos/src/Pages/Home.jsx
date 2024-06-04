import useApi from "../Hooks/useApi";
const UrlGameList = "https://api.rawg.io/api/games?page=1&key=0a4e4684ac2e467782d960abdd0667a2";

const Home = () => {
  const { data, isLoading, isError } = useApi(UrlGameList)
  // const games = JSON.stringify(data);
  // console.log(data.results);
  // console.log(Object.keys(data));

  let games = data.results;
  console.log(games);
  console.log(Object.keys(games));

  if (isLoading) {
  return (
    <>
      <p>Loading...</p>
    </>
  );
  }

    if (isError) {
  return (
    <>
      <p>An error occured while fetching games</p>
    </>
  );
  }


  return (
    <>
    <h1>Successfully found data HURRAY</h1>
    <div>
      {/* {Object.keys(games).map((item, idx) => {
        return <>{idx}</>
      })} */}
      {/* {games.map((item, idx) => {
        return <p key={idx}> {item}</p>
      })} */}
    </div>
    </>
  )



};

export default Home;
