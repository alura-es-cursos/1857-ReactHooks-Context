import styled from "styled-components";
export const MainSpace = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ImageSpace = styled.div`
  width: 60vw;
  height: 100vh;
  background-image: url(${process.env.PUBLIC_URL + "/motoboy.jpeg"});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

export const FormSpace = styled.div`
  width: 40vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;
