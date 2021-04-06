import React from 'react'
import styled from 'styled-components';
import BaseProps from '../interface/BaseProps'

import Game from './game/Game';
import IntroBox from './boxs/intro/IntroBox';
import TitleBox from './boxs/title/TitleBox';
import ScoreBox from './boxs/score/ScoreBox';
import Footer from './footer/Footer';

function Render(props: BaseProps) {
    const { className } = props;
    return (
        <div className={className}>
            <div className='top'>
                <TitleBox />
                <ScoreBox />
            </div>
            <IntroBox />
            <Game />
            <Footer />
        </div>
    )
}

export default styled(Render)`
    width: 40em;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;

    .top {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }

`;
