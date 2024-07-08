import Preview from "./Carousel/Preview";
import Description from "./Description/Description";
import { Section, MainBody } from "./Styles";
import Infobox from "./Infobox/Infobox";


const GameDetails = (props) => {
    const data = props.data;

    return (
        <>
        <Section bgimage={data.background_image}>
            <div className="top-width">
                <Infobox data={data}></Infobox>
                <Preview data={data}></Preview>
                <MainBody>
                    <div>
                        <Description data={data}></Description>
                        <p>tags</p>
                        <p>Achievements</p>
                        <p>Same gameseries + Gameseries count</p>
                        <p>Similar games</p>
                        <p>reddit_count + reddit_url</p>
                    </div>
                    <div>
                        <p>publishers</p>
                        <p>developers</p>
                        <p>website</p>
                        <p>added_by_status</p>
                        <p>metacritic + metacritic_platforms</p>
                        <p>Platforms</p>
                    </div>
                </MainBody>
            </div>
            </Section>
        </>
    )
};

export default GameDetails;