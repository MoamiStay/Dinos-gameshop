import useApi from "../Hooks/useApi";
const UrlGameList = "https://api.rawg.io/api/games?page=1&key=0a4e4684ac2e467782d960abdd0667a2";
import Gamelist from "../Components/Landingpage/Gamelist/Gamelist";

const Home = () => {
  const { data, isLoading, isError } = useApi(UrlGameList)
  const games = data.results;

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
      <Gamelist games={games} />
    </>
)


};

export default Home;
