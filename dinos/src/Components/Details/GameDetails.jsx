import Preview from "./Carousel/Preview";
import Description from "./Description/Description";
import { GameTitle, Section } from "./Styles";


const GameDetails = (props) => {
    const data = props.data;

    return (
        <>
        <Section bgImage={data.background_image}>
            <div className="top-width">
                <GameTitle>{data.name}</GameTitle>
                <Preview data={data}></Preview>
                <Description data={data}></Description>
            </div>
            </Section>
        </>
    )
};

export default GameDetails;