import styled from 'styled-components';
import { animated } from 'react-spring';


export const BlogItemWrapper = styled.div`
    width: 70vw;
    height: 50vh;
    border: 1px solid black;
`

export const BlogItemLeft = styled.div`
    width: 30%;
    height: 100%;
    border: 1px solid black;
    display: flex;
    flex-direction: column;
    align-items: center;
    .timeCircle{
        width: 100px;
        height: 100px;
        border-radius: 50%;
        border: 1px solid black;
        box-sizing: border-box;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 50px
    }
    .timeLine{
        border: 1px solid gray;
        height: calc(100% - 100px);
        transform: scaleX(.5)
    }
`


export const BlogItemRight = styled.div`

`