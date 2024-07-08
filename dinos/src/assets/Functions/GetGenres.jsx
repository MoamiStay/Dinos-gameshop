const GetGenres = (props) => {
    const data = props.data;
    const genres = data.genres;

    return (
    genres.map((item, idx) =>{
        console.log(item.name);
        return (
        <p key={idx}>{item.name}</p>
        )
    }))
};

export default GetGenres;