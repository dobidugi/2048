interface Data {
    title: string,
    button: string,
    headText: string,
    GameOver: {
        ment: string;
        button: string;
    }
    GameWin: {
        ment: string;
    }

    Score: {
        scoreText: string,
        bestText: string,
    }

    Footer: {
        text: string,
        link: string,
    }
}

export  const data: Data = {
    title: "2048",
    button: "New Game",
    headText: "Make 2048!",
    GameOver: {
        ment: "Game Over!",
        button: "Try again"
    },
    GameWin: {
        ment: "You Win!"
    },
    Score: {
        scoreText: "SCORE",
        bestText: "BEST",
    },

    Footer: {
        text: "view code",
        link: "https://github.com/dobidugi/2048"
    }
    
};