import React from 'react'
import styled from 'styled-components';
import BaseProps from '../interface/BaseProps'

import Game from './game/Game';
import IntroBox from './IntroBox/IntroBox';
import TitleBox from './TitleBox/TitleBox';

function Render(props: BaseProps) {
    const { className } = props;
    return (
        <div className={className}>
            <TitleBox />
            <IntroBox />
            <Game />
        </div>
    )
}

export default styled(Render)`
    width: 50%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;


`;
