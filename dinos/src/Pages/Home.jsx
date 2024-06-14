import useApi from "../Hooks/useApi";
import { UrlGameList } from "../assets/Endpoints/Urls";
import Gamelist from "../Components/Landingpage/Gamelist/Gamelist";
import CarouselComponent from "../Components/Landingpage/Carousel/Carousel";

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
      <div className="top-width">
        <CarouselComponent />
      </div>
      <div className="bot-width">
        <Gamelist games={games} />
      </div>
    </>
)


};

export default Home;
