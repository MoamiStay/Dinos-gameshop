import Preview from "./Carousel/Preview";
import Description from "./Description/Description";
import { Section } from "./Styles";
import Infobox from "./Infobox/Infobox";


const GameDetails = (props) => {
    const data = props.data;

    return (
        <>
        <Section bgImage={data.background_image}>
            <div className="top-width">
                <Infobox data={data}></Infobox>
                <Preview data={data}></Preview>
                <Description data={data}></Description>
            </div>
            </Section>
        </>
    )
};

export default GameDetails;