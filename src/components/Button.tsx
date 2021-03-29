import React from 'react'
import styled from 'styled-components';
import { data } from '../data';
import BaseProps from '../interface/BaseProps'

function Button(props: BaseProps) {
    const { className } = props;
    return (
        <button className={className} >
            <b>{data.button}</b>
        </button>
    )
}

export default styled(Button)` 
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
