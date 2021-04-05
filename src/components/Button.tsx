import React, { useCallback, useContext } from 'react'
import styled from 'styled-components';
import { HandleContext } from '../context/game/GameContext';
import BaseProps from '../interface/BaseProps'

interface ButtonProps extends BaseProps {
    text: string;
}

function Button(props: ButtonProps) {
    const { className, text } = props;
    const { reset } = useContext(HandleContext);
    const handleClick = useCallback(() => {

        reset();
    }, [reset]);
    return (
        <button className={className} onClick={handleClick} >
            <b>{text}</b>
        </button>
    )
}

export default styled(React.memo(Button))` 
    width: 8em;
    height: 2.5em;
    margin: 0;
    border: none;
    background: #8F7A65;
    color: #F8F6F1;
    outline: none;
    font-size: 1.2em;
    border-radius: 0.3em;
`
