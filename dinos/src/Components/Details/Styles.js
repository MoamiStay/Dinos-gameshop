import styled from "styled-components";

// importtant comment

export const Section = styled.section`
  position: relative;
  width: 100%;
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
  font-size: 2.5rem;
`;

export const PreviewContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PreviewImg = styled.img`
  width: 100%;
  height: auto;
`;

export const VideoPlayer = styled.video`
  width: 100%;
  height: auto;
`;
