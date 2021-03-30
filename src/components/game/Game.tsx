import React, { useContext, useEffect } from 'react'
import styled from 'styled-components';
import { HandleContext, StateContext } from '../../context/game/GameContext';
import BaseProps from '../../interface/BaseProps'
import Item from './Item';

function Game(props: BaseProps) {
    const { className } = props;
    const { board } = useContext(StateContext);
    const { up, left, right, down } = useContext(HandleContext);
    const itemList = [];
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            itemList.push(board[i][j]);
        }
    }
    useEffect(() => {
        function keyUpEvent(e: KeyboardEvent) {
            switch (e.key) {
                case 'w':
                    up();
                    console.log('w')
                    break;
                case 'a':
                    left();
                    console.log('a');
                    break;
                case 'd':
                    right();
                    console.log('d');
                    break;
                case 's':
                    down();
                    console.log('s');
                    break;
            }
        }
        window.document.addEventListener("keyup", keyUpEvent);
        return () => {
            window.document.removeEventListener("keyup", keyUpEvent);
        }

    });

    return (
        <div className={className}>
            {
                itemList.map((i: number, index: number) => (
                    <Item key={index} className={"item"} value={i} />
                ))
            }
            {/* <Item key={1} className={"item"} value={board[0][0]} />
            <Item key={2} className={"item"} value={board[0][1]} />
            <Item key={3} className={"item"} value={board[0][2]} />
            <Item key={4} className={"item"} value={board[0][3]} />
            <Item key={5} className={"item"} value={board[1][0]} />
            <Item key={6} className={"item"} value={board[1][1]} />
            <Item key={7} className={"item"} value={board[1][2]} />
            <Item key={8} className={"item"} value={board[1][3]} />
            <Item key={9} className={"item"} value={board[2][0]} />
            <Item key={10} className={"item"} value={board[2][1]} />
            <Item key={11} className={"item"} value={board[2][2]} />
            <Item key={12} className={"item"} value={board[2][3]} />
            <Item key={13} className={"item"} value={board[3][0]} />
            <Item key={14} className={"item"} value={board[3][1]} />
            <Item key={15} className={"item"} value={board[3][2]} />
            <Item key={16} className={"item"} value={board[3][3]} /> */}
        </div>
    )
}

export default styled(Game)`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 35em;
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
        transition: all .3s ease-in-out;
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
