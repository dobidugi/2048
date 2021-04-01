import React from 'react'
import styled from 'styled-components';
import { data } from '../../data';
import BaseProps from '../../interface/BaseProps'
import Button from '../Button';

function IntroBox(props: BaseProps) {
    const { className } = props;
    return (
        <div className={className}>
            <b className="intro_text">{data.headText}</b>
            <Button text={String(data.button)} />
        </div>
    )
}

export default styled(IntroBox)` 
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    .intro_text {
        font-size: 1.5em;   
    }
    margin-bottom: 1em;
`
