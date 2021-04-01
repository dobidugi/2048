import React from 'react'
import styled from 'styled-components';
import { data } from '../../data';
import BaseProps from '../../interface/BaseProps'
import Button from '../Button';

const Ment = styled.h1`
    font-size: 4em;
`;
const Overlay = styled.div` 
    position: absolute;
    width: 100%;
    height: 100%;
    background: white;
    opacity: 0.5;
    z-index: 1;
`;

function GameOver(props: BaseProps) {
    const { className } = props;
    return (
        <div className={className}>
            <Ment className={"overlay_txt"}>{data.GameOver.ment}</Ment>
            <Button className={"overlay_txt"} text={String(data.GameOver.button)} />
            <Overlay />
        </div>
    )
}

export default styled(GameOver)` 
    position: absolute;
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .overlay_txt {
        z-index: 2;
    }
    
`
