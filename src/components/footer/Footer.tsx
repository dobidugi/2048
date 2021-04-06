import React from 'react'
import styled from 'styled-components'
import { data } from '../../data';
import BaseProps from '../../interface/BaseProps'


function Footer(props: BaseProps) {
    const { className } = props;
    return (
        <div className={className}>
            <a href={`${data.Footer.link}`}>{data.Footer.text}</a>
        </div>
    )
}

export default styled(Footer)` 
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 3em;
    font-weight: 800;
    a {
        text-decoration: none;
        
    }
    a:hover 
    {
        text-decoration:none; 
        cursor:pointer;  
    }

`
