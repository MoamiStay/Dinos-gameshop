import GetGenres from "../../../assets/Functions/GetGenres";
import { GameTitle, Container, Info } from "./Styles";

const Infobox = (props) => {
    const data = props.data;

    return (
        <Container>
        <GameTitle>{data.name}</GameTitle>
        <Info>
            <div>Rating: {data.rating} {data.ratings_count} votes</div>
            <div>Release: {data.released}</div>
            <GetGenres data={data}></GetGenres>
        </Info>
        </Container>
    )
};

export default Infobox;