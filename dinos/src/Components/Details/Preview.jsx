import React from "react";
import { useParams } from "react-router-dom";
import useApi from "../../Hooks/useApi";
import { BaseEndpoint, keyEndpoint } from "../../assets/Endpoints/Urls";
import { PreviewContainer, PreviewImg } from "./Styles";
import { Carousel } from "antd";

const Preview = () => {
    const { id } = useParams();
    const { data, isLoading, isError } = useApi(`${BaseEndpoint}/${id}/screenshots?${keyEndpoint}`)
    const screenshots = data.results;


    return (
  <>
    <Carousel arrows infinite={false}>
        {screenshots.map((item, idx) => {
        return (
        <PreviewContainer>
        <PreviewImg src={item.image} alt="screenshot image"></PreviewImg>
      </PreviewContainer>
            )
        })}
    </Carousel>
  </>
);
};

export default Preview;