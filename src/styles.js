import styled from "styled-components";

export const MainSpace = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ImageSpace = styled.div`
  width: 55vw;
  height: 100vh;
  background-image: url("/motoboy.jpeg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  @media (max-width: 768px) {
    display: none;
  }
`;

export const FormSpace = styled.div`
  width: 45vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  @media (max-width: 768px) {
    width: 100vw;
  }
`;
