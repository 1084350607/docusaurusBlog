import { animated } from 'react-spring';
import styled from 'styled-components';

export const FirstWrapper = styled.div`
    width: 100%;
    height: calc(100vh - 60px);
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding-right: 250px;
    padding-left: 250px;
    //background-image: url("../../static/img/3.jpg");
    background-repeat: no-repeat;
    background-position: right center;
    background-size: cover;
`

export const FirstWrapperImage = styled.div`

`

export const FirstWrapperText = styled.div`
    width: 400px;
    height: 500px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: -3rem;
`

export const TextLine = styled.div`
    width: ${props => props.width ? props.width : '3rem'};
    height: 2px;
    background-color: black;
    margin-top: 20px;
`

export const AnimitedTitle = styled.h1`
    font-size: 2.5rem;
    font-family: Luminari, fantasy;
`

export const AnimitedIntro = styled.p`
    margin-top: 40px;
    font-size: 1.5rem;
    text-align: center;
    font-family: Impact, fantasy;
    font-weight: 100;
`


export const AnimitedImg = styled.img`
    width: 400px;
    height: 500px;
    box-shadow: 2px 2px 2px 2px gray;
        
    &:hover{
        filter: brightness(.8);
        transition: .4s ease-in-out;
    }
`