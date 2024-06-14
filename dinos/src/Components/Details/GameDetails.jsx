import Preview from "./Preview";
import { GameTitle, Section } from "./Styles";


const GameDetails = (props) => {
    const data = props.data;
    // console.log(data);

    return (
        <>
        <Section bgImage={data.background_image}>
        <GameTitle className="top-width">{data.name}</GameTitle>
        <div className="top-width">
        <Preview data={data}></Preview>
        </div>
        </Section>
        </>
    )
};

export default GameDetails;