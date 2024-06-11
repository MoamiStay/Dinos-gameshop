import InfiniteScroll from "react-infinite-scroller";
import { useState, useCallback } from "react";
import { BaseEndpoint, keyEndpoint } from "../../../assets/Endpoints/Urls";
import { GameItems } from "./styles";
import Item from "./Item";

const Gamelist = (props) => {
    const [games, setGames] = useState(props.games || []);
    const [hasMore, setHasMore] = useState(true);

    const fetchMoreGames = async (page) => {
        const response = await fetch(`${BaseEndpoint}?page=${page}${keyEndpoint}`);
        const data = await response.json();
        // console.log(data);
        return data.results;
    };

    const loadFunc = useCallback((page) => {
        fetchMoreGames(page).then(newGames => {
            if (newGames.length === 0) {
                setHasMore(false); // No more items to load
            } else {
                setGames(prevGames => [...prevGames, ...newGames]);
            }
        }).catch(err => {
            console.error("Error fetching more games:", err);
            setHasMore(false);
        });
    }, []);

    return (
        <InfiniteScroll
            pageStart={1}
            loadMore={loadFunc}
            hasMore={hasMore}
            loader={<div className="loader" key={0}>Loading....</div>}
        >
            <GameItems>
                {games.map((item, idx) => {
                    return <Item key={idx} item={item} />;
                })}
            </GameItems>
        </InfiniteScroll>
    );
};

export default Gamelist;
