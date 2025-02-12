const team = {
  _players: [
    {firstName: 'Leonard', lastName: 'Jenkins', age: 32},
    {firstName: 'Bernard', lastName: 'Rollins', age: 29},
    {firstName: 'Foghorn', lastName: 'Leghorn', age: 85}
  ],
  _games: [
    {opponent: 'Hawks', teamPoints: 33, opponentPoints: 23},
    {opponent: 'Timberwolves', teamPoints: 45, opponentPoints: 33},
    {opponent: 'Giants', teamPoints: 43, opponentPoints: 24}
  ],

  get players(){
    return this._players;

    },

    get games() {
      return this._games;

    },

    addPlayer(newFirstName, newlastName, newAge) {
      let player = {
          firstName: newFirstName,
          lastName: newlastName,
          age: newAge
      };

      this.players.push(player)
    },

    addGame(newOpponent, newTeamPoints, newOpponentPoints) {
      let game = {
        opponent: newOpponent,
        teamPoints: newTeamPoints,
        opponentPoints: newOpponentPoints
      };

      this.games.push(game)
    },
  };

  team.addPlayer('Fred', 'Banks', 35);
  console.log(team.players);

  team.addGame('Titans', 100, 98);
  console.log(team.games);