export function updateGameScore(player1Points, player2Points): Game {
    const game = new Game
    game.player1Points = player1Points
    game.player2Points = player2Points
    return game
}

export function decideGameWinner(game): string {
    const player1Points = game.player1Points
    const player2Points = game.player1Points

    if (player1Points >= 4 && player1Points - player2Points >= 2) {
        return 'Player 1'
    } 
    if (player2Points >= 4 && player2Points - player1Points >= 2) {
        return 'Player 2'
    }
}

export function printScore([player1Points, player2Points]): string {
    const scoreArray = ['love', 'fifteen', 'thirty', 'forty']
    if (player1Points == 3 && player2Points == 3) {
        return 'deuce'
    }
}

class Game {
    public player1Points: number;
    public player2Points: number;
}
