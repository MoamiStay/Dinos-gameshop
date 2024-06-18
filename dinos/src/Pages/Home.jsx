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
    <section className="homepage-layout">
      <aside>
        <p>Left side</p>
        <p>Left side</p>
        <p>Left side</p>
      </aside>
        <main>
            <div>
              <CarouselComponent />
            </div>
            <div>
              <Gamelist games={games} />
            </div>
          </main>
      <aside>
        <p>Right side</p>
        <p>Right side</p>
        <p>Right side</p>
      </aside>
    </section>
)


};

export default Home;
