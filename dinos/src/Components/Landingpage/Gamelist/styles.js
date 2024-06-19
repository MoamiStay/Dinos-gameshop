import styled from "styled-components";

export const GameItems = styled.div``;

export const UL = styled.ul`
  list-style-type: none;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 40px 30px;
  padding: 0;
`;

export const LI = styled.li`
  border: 1px solid green;
  text-decoration: none;
  font-size: small;
`;

export const Game = styled.div`
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
