const allPlayers = document.querySelectorAll('.player');
const player = [];

//player[0] = allPlayers[0].getAttribute('id');
//player[1] = allPlayers[1].getAttribute('id');

// const newTurn = new Turn;

const startTurn = (e) => {
  e.preventDefault();
  player[0] = allPlayers[0].getAttribute('id');
  player[1] = allPlayers[1].getAttribute('id');
  newTurn.startRoll(player);
};

document.querySelector('#test').addEventListener('click', startTurn);