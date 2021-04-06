import React from 'react'
import styled from 'styled-components'
import BaseProps from '../../interface/BaseProps'

interface OverlayProps extends BaseProps {
    color: string;
}

function Overlay(props: OverlayProps) {
    const { className, color } = props;
    return (
        <div className={className} style={{ background: color }}>
        </div>
    )
}



export default styled(Overlay)` 
    position: absolute;
    width: 100%;
    height: 100%;
    opacity: 0.5;
    z-index: 1;
`
