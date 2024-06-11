import styled from "styled-components";

export const Container = styled.div`
  height: 50vh;
  position: relative;
  line-height: 20px;
  text-align: center;
`;

export const Image = styled.img`
  display: block;
  width: 100%;
  height: auto;
  object-fit: contain;
`;

export const Overlay = styled.div`
  position: absolute;
  bottom: 0%;
  width: 100%;
  background: rgb(0, 0, 0);
  background: rgba(0, 0, 0, 0.5);
  color: #fff;
  font-size: 2rem;
`;
