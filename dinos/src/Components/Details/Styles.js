import styled from "styled-components";

export const Section = styled.section`
  position: relative;
  width: 70%;
  margin: auto;
  overflow: hidden;
  background-color: #0f161b;

  &::before {
    content: "";
    position: fixed;
    top: 50px;
    left: 0;
    width: 100%;
    height: 100vh;
    background-image: url(${(props) => props.bgImage});
    background-size: cover;
    background-repeat: no-repeat;
    opacity: 0.2; /* Adjust the opacity as needed */
    z-index: -1; /* Ensure the pseudo-element is behind the children */
  }
`;

export const GameTitle = styled.h1`
  width: 100%;
  font-size: 2.5rem;
`;
