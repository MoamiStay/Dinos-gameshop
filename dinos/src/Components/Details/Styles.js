import styled from "styled-components";

export const Section = styled.section`
  position: relative;
  width: 100%;
  height: 100vh; /* Adjust based on your design */
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url(${(props) => props.bgImage});
    background-size: cover;
    background-position: center;
    opacity: 0.1; /* Adjust the opacity as needed */
    z-index: -1; /* Ensure the pseudo-element is behind the children */
  }
`;

export const GameTitle = styled.h1`
  width: 100%;
  font-size: 3rem;
  text-align: center;
`;

export const PreviewContainer = styled.div`
  margin: auto;
  width: 50%;
`;

export const PreviewImg = styled.img`
  width: 100%;
  object-fit: cover;
`;
