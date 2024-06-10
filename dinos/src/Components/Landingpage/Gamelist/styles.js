import styled from "styled-components";

export const GameItems = styled.div`
  border: 1pc solid blue;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`;

export const Game = styled.div`
  border: 1px solid green;
  width: 100%;
`;

export const ImgContainer = styled.div`
  width: 100%;
  height: 50%;
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Title = styled.h3`
  font-size: medium;
`;

export const Rating = styled.p`
  color: red;
`;

export const Other = styled.div``;
