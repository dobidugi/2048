import React, { useCallback, useState } from 'react'

interface GameContextProps {
    children: React.ReactNode;
}


export const StateContext = React.createContext<any>(null);
export const HandleContext = React.createContext<any>(null);
const initBoard = [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
]
function GameContext(props: GameContextProps) {

    const [board, setBoard] = useState(initBoard);

    const getRandom = () => {
        return Math.floor(Math.random() * (4 - 0) + 0);
    }
    const handleReset = useCallback(() => {
        const _board = [
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0],
        ]
        let row = getRandom();
        let col = getRandom();
        _board[row][col] = 2;
        while (true) {
            row = getRandom();
            col = getRandom();
            if (_board[row][col] === 0) {
                _board[row][col] = 2;
                break;
            }
        };
        setBoard(_board);
    }, []);
    const { children } = props;
    return (
        <StateContext.Provider
            value={{
                board: board
            }}
        >
            <HandleContext.Provider
                value={{
                    reset: handleReset
                }}
            >
                {children}
            </HandleContext.Provider>
        </StateContext.Provider >
    )
}

export default GameContext
