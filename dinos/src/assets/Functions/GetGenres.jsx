import React, { useState, useEffect } from "react";

const GetGenres = (props) => {
    const data = props.data;
    const genres = data?.genres;

    if (!genres) {
        return <p>Loading...</p>
    }
    
    return (
    genres.map((item, idx) =>{
        return (
        <p key={idx}>{item.name}</p>
        )
    }))
};

export default GetGenres;