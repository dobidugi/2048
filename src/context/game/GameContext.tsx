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
    const SIZE = 4;

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
    const handleUp = useCallback(() => {
        const _board = [...board];

        for (let i = 0; i < SIZE; i++) {
            for (let j = 1; j < SIZE; j++) {
                if (_board[j][i] !== 0) {
                    for (let k = 0; k < j; k++) {
                        if (_board[k][i] === 0) {
                            _board[k][i] = _board[j][i];
                            _board[j][i] = 0;
                            break;
                        }
                    }
                }
            }
        }

        setBoard(_board);

    }, [board]);

    const handleLeft = useCallback(() => {
        const _board = [...board];
        for (let i = 0; i < SIZE; i++) {
            for (let j = 1; j < SIZE; j++) {
                if (_board[i][j] !== 0) {
                    for (let k = 0; k < j; k++) {
                        if (_board[i][k] === 0) {
                            _board[i][k] = _board[i][j];
                            _board[i][j] = 0;
                            break;
                        }
                    }
                }
            }
        }

        setBoard(_board);

    }, [board]);

    const handleRight = useCallback(() => {
        const _board = [...board];
        for (let i = 0; i < SIZE; i++) {
            for (let j = (SIZE - 1) - 1; j >= 0; j--) {
                if (_board[i][j] !== 0) {
                    for (let k = (SIZE - 1); k > 0; k--) {
                        if (_board[i][k] === 0) {
                            _board[i][k] = _board[i][j];
                            _board[i][j] = 0;
                            break;
                        }
                    }
                }
            }
        }

        setBoard(_board);
    }, [board]);

    const handleDown = useCallback(() => {
        const _board = [...board];
        for (let i = 0; i < SIZE; i++) {
            for (let j = (SIZE - 1) - 1; j >= 0; j--) {
                if (_board[j][i] !== 0) {
                    for (let k = SIZE - 1; k >= j; k--) {
                        if (_board[k][i] === 0) {
                            _board[k][i] = _board[j][i];
                            _board[j][i] = 0;
                            break;
                        }
                    }
                }
            }
        }

        setBoard(_board);
    }, [board]);

    const { children } = props;
    return (
        <StateContext.Provider
            value={{
                board: board
            }}
        >
            <HandleContext.Provider
                value={{
                    reset: handleReset,
                    up: handleUp,
                    left: handleLeft,
                    right: handleRight,
                    down: handleDown
                }}
            >
                {children}
            </HandleContext.Provider>
        </StateContext.Provider >
    )
}

export default GameContext
