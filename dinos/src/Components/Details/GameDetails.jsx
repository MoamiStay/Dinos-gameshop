import Preview from "./Preview";
import { GameTitle, Section } from "./Styles";


const GameDetails = (props) => {
    const data = props.data;
    // console.log(data);

    return (
        <>
        <Section bgImage={data.background_image}>
        <GameTitle>{data.name}</GameTitle>
        <Preview data={data}></Preview>
        </Section>
        </>
    )
};

export default GameDetails;