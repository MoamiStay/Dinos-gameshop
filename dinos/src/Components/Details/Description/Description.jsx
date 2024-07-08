import DescriptionComponent from "./DescriptionComponent";

const Description = (props) => {
    const data = props.data;
    console.log(data);

    return (
        <>
            <h3>Game description</h3>
            <div style={{width: "60%", height: "100px", overflow: "scroll"}}>
                <DescriptionComponent description={data.description} />
            </div>
        </>
    )
};

export default Description;