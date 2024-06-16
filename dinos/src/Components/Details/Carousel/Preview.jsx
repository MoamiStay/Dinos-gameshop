import React, { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { Carousel } from "antd";
import { BaseEndpoint, keyEndpoint } from "../../../assets/Endpoints/Urls";
import { PreviewContainer, PreviewImg, VideoPlayer } from "./Styles";

const Preview = () => {
    const { id } = useParams();
    const [screenshots, setScreenshots] = useState([]);
    const [trailers, setTrailers] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);
    const videoRefs = useRef([]);

    useEffect(() => {
        const fetchScreenshots = async () => {
            try {
                const response = await fetch(`${BaseEndpoint}/${id}/screenshots?${keyEndpoint}`);
                const data = await response.json();
                setScreenshots(data.results || []);
            } catch (error) {
                setIsError(true);
            }
        };

        const fetchTrailers = async () => {
            try {
                const response = await fetch(`${BaseEndpoint}/${id}/movies?${keyEndpoint}`);
                const data = await response.json();
                setTrailers(data.results || []);
            } catch (error) {
                setIsError(true);
            }
        };

        const fetchData = async () => {
            setIsLoading(true);
            await Promise.all([fetchScreenshots(), fetchTrailers()]);
            setIsLoading(false);
        };

        fetchData();
    }, [id]);

    const handleBeforeChange = () => {
        videoRefs.current.forEach(video => {
            if (video) video.pause();
        });
    };

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (isError) {
        return <div>Error loading content</div>;
    }

    const combinedContent = [...screenshots, ...trailers];

    if (combinedContent.length === 0) {
        return <div>No content available</div>;
    }

    return (
        <Carousel arrows infinite={false} className="preview-carousel" beforeChange={handleBeforeChange}>
            {combinedContent.map((item, idx) => (
                <PreviewContainer key={idx}>
                    {item.image ? (
                        <PreviewImg src={item.image} alt="screenshot image" />
                    ) : (
                        <VideoPlayer
                            ref={el => (videoRefs.current[idx] = el)}
                            controls
                        >
                            <source src={item.data.max} type="video/mp4" />
                        </VideoPlayer>
                    )}
                </PreviewContainer>
            ))}
        </Carousel>
    );
};

export default Preview;
