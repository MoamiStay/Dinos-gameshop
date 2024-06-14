
const Description = (props) => {
    const data = props.data;
    console.log(data);

    return (
        <div style={{width: "60%"}}>
            <p>{data.description_raw}</p>
        </div>
    )
};

export default Description;