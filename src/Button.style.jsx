import styled from "styled-components";


export const ButtonPrimary = styled.button`
    width: 150px;
    height: 40px;
    color: ${({theme}) => theme.colors.bluePrimary};
    background-color: ${({ theme }) => theme.colors.purplePrimary};
    font-size: ${({theme}) => theme.size.x};
    border: none;
    border-radius: ${({theme}) => theme.size.xx};
    cursor: pointer;
    transition: all 0.3s ease-in-out;

    &:hover {
        background-color: ${({theme}) => theme.colors.bluePrimary};
        color: ${({theme}) => theme.colors.purplePrimary};
    }
`