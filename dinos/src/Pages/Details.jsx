import useApi from "../Hooks/useApi";
import { useParams } from "react-router-dom";
import { BaseEndpoint, keyEndpoint } from "../assets/Endpoints/Urls";
import GameDetails from "../Components/Details/GameDetails";

const Details = () => {
    const { id } = useParams(); 
    const { data, isLoading, isError } = useApi(`${BaseEndpoint}/${id}?${keyEndpoint}`)

    return (
        <>
        {/* LEFT: Homepage, Genres, Tags */}
        <GameDetails data={data} /> 
        {/* CENTER: Title, screenshots, Description, Achievements, DLC's, Gameseries, Related, Redditposts */}
        {/* BOTTOM: Rating, Release, Devs, Platforms, Stores */}
        </>
    )
};

export default Details;







// import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import { BaseEndpoint, keyEndpoint } from "../assets/Endpoints/Urls";

// const Details = () => {
//     const { id } = useParams();
//     const [game, setGame] = useState(null);
//     const [loading, setLoading] = useState(null);
//     const [error, setError] = useState(null);

//     // Fetching API data for the details of the speficied game:
//     useEffect(() => {
//         fetch(`${BaseEndpoint}/${id}?${keyEndpoint}`)
//         .then(response => response.json())
//         .then(data => {
//             setGame(data);
//             setLoading(false);
//         })
//         .catch(error => {
//             console.error(`Error fetching game details:`, error);
//             setError(error);
//             setLoading(false);
//         });
//     }, [id]);
    
//   if (loading) return <div>Loading...</div>;
//   if (error) return <div>Error loading product details</div>;
//   if (!game) return <div>Product not found</div>;

//     return (
//         <>
//             <p>HERE's THE GAME:!</p>
//             <h1>{game.name}</h1>
//         </>
//     )
// };

// export default Details;