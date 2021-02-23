import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
body{
color: ${(props) => props.theme.mainColor};
background-color: ${(props) => props.theme.backgroundColor};
p{ color: ${(props) => props.theme.secondaryColor}};
}
`;
export const PageTitle = styled.h1`
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
`;

export const SmallTitle = styled.h3`
  color: #a1024a;
  font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
`;
export const AppWrapper = styled.div`
  display: grid;
  justify-content: space-evenly;
`;
