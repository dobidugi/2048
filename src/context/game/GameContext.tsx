import React, { useCallback, useEffect, useState } from 'react'

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
    const [flags, setFlags] = useState<Boolean[]>([false, false, false, false]);
    const [gameState, setGameState] = useState<number>(0);
    /*
    gameState
    0 -> nothing
    1 -> lose
    2 -> win
    */
    const [score, setScore] = useState<number>(0);
    const [bestScore, setBestScore] = useState<number>(0);

    useEffect(() => {
        const _bestScore =
            window.localStorage.hasOwnProperty("bestScore") ?
                Number(window.localStorage.getItem("bestScore")) :
                0
        setBestScore(_bestScore);
    }, [])

    const getRandom = () => {
        return Math.floor(Math.random() * (4 - 0) + 0);
    }

    const checkGameOverFlags = useCallback((num: number) => {
        const _flags: Boolean[] = [...flags];
        _flags[num] = true;
        const res = _flags.filter(flag => flag === true)
        if (res.length === 4) { // game over
            setGameState(1);
        }
        setFlags(_flags);
    }, [flags]);

    const addScore = useCallback((getScore: number) => {
        if (getScore + score > bestScore) {
            window.localStorage.setItem("bestScore", String(getScore + score));
            setBestScore(getScore + score);
        }
        setScore(getScore + score);
    }, [bestScore, score]);

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
        setGameState(0);
        setScore(0);
        setBestScore(Number(window.localStorage.getItem("bestScore")));
    }, []);


    const newBlock = useCallback(() => {
        const _board = [...board];
        while (true) {
            const row = getRandom();
            const col = getRandom();
            if (_board[row][col] === 0) {
                _board[row][col] = 2;
                break;
            }
        };
        setBoard(_board);
        setFlags([false, false, false, false]); // reset flags
    }, [board]);

    const handleUp = useCallback(() => {
        const _board = [...board];
        let movedFlag: boolean = false;
        let getScore = 0;
        for (let i = 0; i < SIZE; i++) { // add same block 
            for (let j = SIZE - 1; j >= 1; j--) {
                if (_board[j][i] !== 0) {
                    for (let k = j - 1; k >= 0; k--) {
                        if (_board[j][i] === _board[k][i]) {
                            _board[k][i] *= 2;
                            getScore += _board[k][i];
                            _board[j][i] = 0;
                            movedFlag = true;
                            if (getScore === 2048) {
                                setGameState(2);
                            }
                            break;
                        } else if (_board[k][i] !== 0) {
                            break;
                        }
                    }
                }
            }
        }


        for (let i = 0; i < SIZE; i++) { // move block
            for (let j = 1; j < SIZE; j++) {
                if (_board[j][i] !== 0) {
                    for (let k = 0; k < j; k++) {
                        if (_board[k][i] === 0) {
                            _board[k][i] = _board[j][i];
                            _board[j][i] = 0;
                            movedFlag = true;
                            break;
                        }
                    }
                }
            }
        }

        setBoard(_board);
        movedFlag === true ? newBlock() : checkGameOverFlags(0);
        addScore(getScore);

    }, [addScore, board, checkGameOverFlags, newBlock]);

    const handleLeft = useCallback(() => {
        const _board = [...board];
        let getScore = 0;
        let movedFlag: boolean = false;
        for (let i = 0; i < SIZE; i++) { // add same block 
            for (let j = SIZE - 1; j >= 1; j--) {
                if (_board[i][j] !== 0) {
                    for (let k = j - 1; k >= 0; k--) {
                        if (_board[i][j] === _board[i][k]) {
                            _board[i][k] *= 2;
                            getScore += _board[i][k];
                            _board[i][j] = 0;
                            movedFlag = true;
                            if (getScore === 2048) {
                                setGameState(2);
                            }
                            break;
                        } else if (_board[i][k] !== 0) {
                            break;
                        }
                    }
                }
            }
        }

        for (let i = 0; i < SIZE; i++) { // move block
            for (let j = 1; j < SIZE; j++) {
                if (_board[i][j] !== 0) {
                    for (let k = 0; k < j; k++) {
                        if (_board[i][k] === 0) {
                            _board[i][k] = _board[i][j];
                            _board[i][j] = 0;
                            movedFlag = true;
                            if (getScore === 2048) {
                                setGameState(2);
                            }
                            break;
                        }
                    }
                }
            }
        }

        setBoard(_board);
        movedFlag === true ? newBlock() : checkGameOverFlags(1);
        addScore(getScore);

    }, [addScore, board, checkGameOverFlags, newBlock]);

    const handleRight = useCallback(() => {
        const _board = [...board];
        let getScore = 0;
        let movedFlag: boolean = false;
        for (let i = 0; i < SIZE; i++) { // add same block 
            for (let j = 0; j < SIZE - 1; j++) {
                if (_board[i][j] !== 0) {
                    for (let k = j + 1; k < SIZE; k++) {
                        if (_board[i][j] === _board[i][k]) {
                            console.log(_board[i][j], _board[i][k]);
                            _board[i][k] *= 2;
                            getScore += _board[i][k];
                            _board[i][j] = 0;
                            movedFlag = true;
                            if (getScore === 2048) {
                                setGameState(2);
                            }
                            break;
                        } else if (_board[i][k] !== 0) {
                            break;
                        }
                    }
                }
            }
        }

        for (let i = 0; i < SIZE; i++) { // move block
            for (let j = (SIZE - 1) - 1; j >= 0; j--) {
                if (_board[i][j] !== 0) {
                    for (let k = (SIZE - 1); k > 0; k--) {
                        if (_board[i][k] === 0) {
                            _board[i][k] = _board[i][j];
                            _board[i][j] = 0;
                            movedFlag = true;
                            break;
                        }
                    }
                }
            }
        }

        setBoard(_board);
        movedFlag === true ? newBlock() : checkGameOverFlags(2);
        addScore(getScore);
    }, [addScore, board, checkGameOverFlags, newBlock]);

    const handleDown = useCallback(() => {
        const _board = [...board];
        let getScore = 0;
        let movedFlag: boolean = false;
        for (let i = 0; i < SIZE; i++) { // add same block
            for (let j = 0; j < SIZE - 1; j++) {
                if (_board[j][i] !== 0) {
                    for (let k = j + 1; k < SIZE; k++) {
                        if (_board[j][i] === _board[k][i]) {
                            _board[k][i] *= 2;
                            getScore += _board[k][i];
                            _board[j][i] = 0;
                            movedFlag = true;
                            if (getScore === 2048) {
                                setGameState(2);
                            }
                            break;
                        } else if (_board[k][i] !== 0) {
                            break;
                        }
                    }
                }
            }
        }

        for (let i = 0; i < SIZE; i++) { // move block
            for (let j = (SIZE - 1) - 1; j >= 0; j--) {
                if (_board[j][i] !== 0) {
                    for (let k = SIZE - 1; k >= j; k--) {
                        if (_board[k][i] === 0) {
                            _board[k][i] = _board[j][i];
                            _board[j][i] = 0;
                            movedFlag = true;
                            break;
                        }
                    }
                }
            }
        }

        setBoard(_board);
        movedFlag === true ? newBlock() : checkGameOverFlags(3);
        addScore(getScore);

    }, [addScore, board, checkGameOverFlags, newBlock]);



    const { children } = props;
    return (
        <StateContext.Provider
            value={{
                board: board,
                gameState: gameState,
                score: score,
                bestScore: bestScore
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
