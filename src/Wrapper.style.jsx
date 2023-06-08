import styled from "styled-components";

export const Wrapper = styled.section`
    width: 400px;
    height: 400px;
    background-color: ${({theme}) => theme.colors.black};
    border-radius: ${({theme}) => theme.size.xxl};

    display: flex;
    align-items: center;
    justify-content: center;
`