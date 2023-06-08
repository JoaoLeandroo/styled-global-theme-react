import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: Verdana, Geneva, Tahoma, sans-serif;
    }

    body {
        width: 100vw;
        height: 100vh;
        background-color: ${({theme}) => theme.colors.gray};

        display: flex;
        align-items: center;
        justify-content: center;
    }
`
