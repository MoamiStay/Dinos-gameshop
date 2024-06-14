import { Game, Img, ImgContainer, Title, Rating } from "./styles";

const Item = ({ item }) => {

    return (
        <Game>
            <ImgContainer>
                <Img src={item.background_image} alt={item.name}></Img>
            </ImgContainer>

            <Title>{item.name}</Title>
            <Rating>Stars* {item.rating}</Rating>
            <p>{item.genres[0].name}</p>
        </Game>
    )
};

export default Item;