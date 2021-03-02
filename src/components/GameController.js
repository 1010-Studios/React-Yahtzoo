import React, { useState, useEffect } from 'react';
import DiceArea from './DiceArea';
import PlayerArea from './PlayerArea';
import ScoreSelector from './ScoreSelector';

import scoring from '../logic/scoring';
import player from '../logic/player';

const GameController = () => {
	const players = [
		player('Ty'),
		player('Courtenay'),
		player('Leila'),
		player('Scruffy'),
	];

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
	}, [activePlayerScore, activePlayer, playerState]);

	const errorAvoider = () => setPlayerState(players); //Just a placeholder to prevent errors

	const nextTurn = () => {
		if (activePlayer === players.length - 1) {
			setActivePlayer(0);
			setRound(round + 1);
		} else {
			setActivePlayer(activePlayer + 1);
		}
	};

	if (round >= 14) {
		errorAvoider();
		return (
			<section className='Game-container'>
				<h1>GAME O'ER</h1>
				<PlayerArea {...playerState} />
			</section>
		);
	}

	return (
		<section className='Game-container'>
			<div className='logo-box'>
				<div className='logo-back'>
					<i className='fas fa-dice'></i>
				</div>
				<div className='logo-text'>Yahtzoo!</div>
			</div>
			<h5>
				{' '}
				{players[activePlayer].playerName}'s Turn! <br />
				<span>--Round {round}--</span>
			</h5>
			<div className='game-board-container'>
				<DiceArea
					setDiceState={setDiceState}
					diceState={diceState}
					activePlayer={activePlayer}
				/>
				<ScoreSelector
					diceScore={diceScore}
					activePlayerScore={activePlayerScore}
					setActivePlayerScore={setActivePlayerScore}
					nextTurn={nextTurn}
				/>
			</div>
			<PlayerArea {...playerState} />
		</section>
	);
};

export default GameController;
