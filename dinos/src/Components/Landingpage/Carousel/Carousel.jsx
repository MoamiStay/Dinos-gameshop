import React from 'react';
import useApi from '../../../Hooks/useApi';
import { UrlGenres } from '../../../assets/Endpoints/Urls';
import { Carousel } from 'antd';
import { Container, Image, Overlay } from './Styles';
import { getArrowOffsetToken } from 'antd/es/style/placementArrow';

const CarouselComponent = () => {
  const { data, isLoading, isError } = useApi(UrlGenres)
  const games = data.results;
  console.log(games);

    if (isLoading) {
  return (
    <>
      <p>Loading...</p>
    </>
  );
  }

    if (isError) {
  return (
    <>
      <p>An error occured while fetching Genre Images in header</p>
    </>
  );
  }

  if (games) {
    return (
  <>
    <Carousel arrows infinite={true} autoplay={true} autoplaySpeed={5000}>
            {games.slice(0,4).map((item, idx) => {
                console.log(item);
                return (
                    <>
                    <Container key={idx}>
                            <Overlay className='CarouselHover'>
                                <h2>{item.name}</h2>
                            </Overlay>
                            <Image src={item.image_background} alt="image" ></Image>
                    </Container>
                    </>
                 ) 
             })} 
    </Carousel>
  </>
)}};

export default CarouselComponent;