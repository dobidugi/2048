import React from 'react'
import styled from 'styled-components';
import { data } from '../../data';
import BaseProps from '../../interface/BaseProps'

function TitleBox(props: BaseProps) {
    const { className } = props;
    return (
        <div className={className}>
            <b>{data.title}</b>

        </div>
    )
}

export default styled(TitleBox)` 
    width: 100%;
    
    display: flex;

    font-size: 5em;
    font-weight: 800;
`;
