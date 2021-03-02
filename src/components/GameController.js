import React, { useState, useEffect } from 'react';
import DiceArea from './DiceArea';
import PlayerArea from './PlayerArea';
import ScoreSelector from './ScoreSelector';

import scoring from '../logic/scoring';
import player from '../logic/player';

const GameController = () => {
	const players = [player('Ty'), player('Courtenay'), player('Leila')];

	const [diceState, setDiceState] = useState([]);
	const [diceScore, setDiceScore] = useState(scoring(diceState));
	const [playerState, setPlayerState] = useState(players);
	const [activePlayer, setActivePlayer] = useState(0);
	const [activePlayerScore, setActivePlayerScore] = useState(
		playerState[activePlayer]
	);
	const [round, setRound] = useState(1);

	useEffect(() => {
		setDiceScore(scoring(diceState));
	}, [diceState]);

	useEffect(() => {
		setActivePlayerScore(playerState[activePlayer]);
		// players[activePlayer] = activePlayerScore;
	}, [activePlayerScore, activePlayer, players, playerState]);

	const nextTurn = () => {
		if (activePlayer === players.length - 1) {
			setActivePlayer(0);
			setRound(round + 1);
		} else {
			setActivePlayer(activePlayer + 1);
		}
	};

	return (
		<section className='Game-container'>
			<button onClick={nextTurn}>{players[activePlayer].playerName}</button>
			<div className='logo-box'>
				<div className='logo-back'>
					<i className='fas fa-dice'></i>
				</div>
				<div className='logo-text'>Yahtzoo!</div>
			</div>
			<h5> {players[activePlayer].playerName}'s Turn!</h5>
			<h6>Round {round}</h6>
			<ScoreSelector
				diceScore={diceScore}
				activePlayerScore={activePlayerScore}
				setActivePlayerScore={setActivePlayerScore}
				nextTurn={nextTurn}
			/>
			<DiceArea
				setDiceState={setDiceState}
				diceState={diceState}
				activePlayer={activePlayer}
			/>
			<PlayerArea {...playerState} />
		</section>
	);
};

export default GameController;
