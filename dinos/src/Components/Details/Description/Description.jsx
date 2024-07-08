import DescriptionComponent from "./DescriptionComponent";

const Description = (props) => {
    const data = props.data;

    return (
        <>
            <div style={{width: "60%", height: "100px", overflow: "scroll"}}>
                <h3>Game description</h3>
                <DescriptionComponent description={data.description} />
            </div>
        </>
    )
};

export default Description;