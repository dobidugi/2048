import React, { useEffect } from 'react'
import styled from 'styled-components';
import BaseProps from '../../interface/BaseProps'
import Item from './Item';

function Game(props: BaseProps) {
    const { className } = props;
    useEffect(() => {
        window.document.addEventListener("keyup", () => {

        });


    });

    return (
        <div className={className}>
            <Item className={"item"} value={0} />
            <Item className={"item"} value={2} />
            <Item className={"item"} value={4} />
            <Item className={"item"} value={8} />
            <Item className={"item"} value={16} />
            <Item className={"item"} value={32} />
            <Item className={"item"} value={64} />
            <Item className={"item"} value={128} />
            <Item className={"item"} value={256} />
            <Item className={"item"} value={512} />
            <Item className={"item"} value={1024} />
            <Item className={"item"} value={2048} />
            <Item className={"item"} value={0} />
            <Item className={"item"} value={0} />
            <Item className={"item"} value={0} />
            <Item className={"item"} value={0} />

        </div>
    )
}

export default styled(Game)`
    display: flex;
    flex-direction: row;
    width: 500px;
    height: 500px;
    justify-content: center;
    align-items: center;
    background: #BBAC9F;
    border-radius: 2%;
    flex-wrap: wrap;
    

    .item {
        width:20%;
        height: 20%;
        margin: 2%;
        align-items: center;
        justify-content: center;
        border-radius: 2%;
    }
    .item[data-value="0"] {
        background: #CCC0B3;
    }
    .item[data-value="2"] {
        background: #EEE3DA;
    }
    .item[data-value="4"] {
        background: #EEE0C9;
    }
    .item[data-value="8"] {
        background: #F3B279;
        color: white;
    }
    .item[data-value="16"] {
        background: #F69563;
        color: white;
    }
    .item[data-value="32"] {
        background: #F77C5F;
        color: white;
    }
    .item[data-value="64"] {
        background: #F75F3B;
        color: white;
    }
    .item[data-value="128"] {
        background: #EDD073;
        color: white;
    }
    .item[data-value="256"] {
        background: #EDCC61;
        color: white;
    }
    .item[data-value="512"] {
        background: #EDC850;
        color: white;
    }
    .item[data-value="1024"] {
        background: #EDC43F;
        color: white;
    }
    .item[data-value="2048"] {
        background: #EDC22D;
        color: white;
    }
    

`
