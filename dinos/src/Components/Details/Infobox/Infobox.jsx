import GetGenres from "../../../assets/Functions/GetGenres";
import { GameTitle, Container, Info } from "./Styles";

const Infobox = (props) => {
    const data = props.data;

    return (
        <Container>
        <GameTitle>{data.name}</GameTitle>
        <Info>
            <div>Rating: {data.rating_top} + ratings</div>
            <div>Release: {data.released}</div>
            <GetGenres data={data}></GetGenres>
            <p>*esrb_rating</p>
        </Info>
        </Container>
    )
};

export default Infobox;