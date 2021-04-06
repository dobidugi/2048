import React, { useContext, useEffect } from 'react'
import styled from 'styled-components';
import { HandleContext, StateContext } from '../../context/game/GameContext';
import BaseProps from '../../interface/BaseProps'
import GameOver from './GameOver';
import Item from './Item';

function Game(props: BaseProps) {
    const { className } = props;
    const { board, gameState } = useContext(StateContext);
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
                case 'ArrowUp':
                case 'w':
                    up();
                    break;
                case 'ArrowLeft':
                case 'a':
                    left();
                    break;
                case 'ArrowRight':
                case 'd':
                    right();
                    break;
                case 'ArrowDown':
                case 's':
                    down();
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
            {!gameState &&
                <GameOver />
            }
            {
                itemList.map((i: number, index: number) => (
                    <Item key={index} className={"item"} value={i} />
                ))
            }
        </div>
    )
}

export default styled(Game)`
    position: relative;
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
