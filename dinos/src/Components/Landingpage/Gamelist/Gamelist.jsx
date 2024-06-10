import { GameItems } from "./styles";
import Item from "./Item";

const Gamelist = (props) => {
    const games = props.games;
    console.log(games);

    if (games) {
    return (
        <>
        <GameItems>
            {games.map((item, idx) =>{
                return <Item key={idx} item={item} />;
            })}
        </GameItems>
        </>
    )
}
};

export default Gamelist;

