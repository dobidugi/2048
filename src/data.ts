interface Data {
    title: string,
    button: string,
    headText: string,
    GameOver: {
        ment: String;
        button: String;
    }
}

export  const data: Data = {
    title: "2048",
    button: "New Game",
    headText: "Make 2048!",
    GameOver: {
        ment: "Game Over!",
        button: "Try agin"
    }
};