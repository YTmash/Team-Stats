const team = {
  // Private array holding player information
  _players: [
    {firstName: 'Leonard', lastName: 'Jenkins', age: 32},
    {firstName: 'Bernard', lastName: 'Rollins', age: 29},
    {firstName: 'Foghorn', lastName: 'Leghorn', age: 85}
  ],

  // Private array holding game results
  _games: [
    {opponent: 'Hawks', teamPoints: 33, opponentPoints: 23},
    {opponent: 'Timberwolves', teamPoints: 45, opponentPoints: 33},
    {opponent: 'Giants', teamPoints: 43, opponentPoints: 24}
  ],

  // Getter method to retrieve the list of players
  get players(){
    return this._players;
  },

  // Getter method to retrieve the list of games
  get games() {
    return this._games;
  },

  // Method to add a new player to the team
  addPlayer(newFirstName, newLastName, newAge) {
    let player = {
      firstName: newFirstName,
      lastName: newLastName,
      age: newAge
    };

    // Add the new player to the _players array
    this._players.push(player);
  },

  // Method to add a new game result
  addGame(newOpponent, newTeamPoints, newOpponentPoints) {
    let game = {
      opponent: newOpponent,
      teamPoints: newTeamPoints,
      opponentPoints: newOpponentPoints
    };

    // Add the new game result to the _games array
    this._games.push(game);
  },
};

// Adding a new player to the team
team.addPlayer('Fred', 'Banks', 35);
console.log(team.players); // Logs the updated list of players

// Adding a new game result
team.addGame('Titans', 100, 98);
console.log(team.games); // Logs the updated list of games
