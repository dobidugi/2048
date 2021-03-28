import React from 'react'
import styled from 'styled-components';
import { data } from '../data';
import BaseProps from '../interface/BaseProps'
import Game from './game/Game';

function Render(props: BaseProps) {
    const {className} = props;
    return (
        <div className={className}>
            <h1>{data.title}</h1>
            <Game />
        </div>
    )
}

export default styled(Render)`
    display: flex;
    flex-direction: column;
    align-items: center;
`;
