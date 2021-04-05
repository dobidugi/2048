import React from 'react'
import styled from 'styled-components'
import BaseProps from '../../../interface/BaseProps'

interface BoxProps extends BaseProps {
    title: string,
    value: number
}


function Box(props: BoxProps) {
    const { title, value, className } = props;
    return (
        <div className={className}>
            <b>{title}</b>
            <b className={"score"}>{value}</b>
        </div>
    )
}

export default styled(Box)` 
    width: 10em;
    height: 3em;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background:#BBAC9F;
    margin-left: 1em;
    border-radius: 3%;
    b {
        color: white;
    }

    .score {
        font-size: 1.5em;
        font-weight: bold;
    }
`
