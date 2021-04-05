import React, { useContext } from 'react'
import styled from 'styled-components'
import BaseProps from '../../../interface/BaseProps'
import Box from './Box';
import { data } from '../../../data';
import { StateContext } from '../../../context/game/GameContext';
function ScoreBox(props: BaseProps) {
    const { className } = props;
    const { score, bestScore } = useContext(StateContext);
    return (
        <div className={className}>
            <Box
                title={data.Score.scoreText}
                value={score}
            />
            <Box
                title={data.Score.bestText}
                value={bestScore}
            />
        </div>
    )
}

export default styled(ScoreBox)`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;

    align-items: flex-end;


`
