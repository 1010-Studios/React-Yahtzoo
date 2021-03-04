import React, { useState, useEffect } from 'react';
import DiceArea from './DiceArea';
import PlayerArea from './PlayerArea';
import ScoreSelector from './ScoreSelector';

import scoring from '../logic/scoring';
import player from '../logic/player';

const GameController = () => {
	const players = [player('Player 1'), player('Player 2')];

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
		setPlayerState(playerState);
	}, [activePlayerScore, activePlayer, playerState]);

	const nextTurn = () => {
		if (activePlayer === players.length - 1) {
			setActivePlayer(0);
			setRound(round + 1);
		} else {
			setActivePlayer(activePlayer + 1);
		}
	};

	if (round >= 14) {
		return (
			<section className='Game-container'>
				<h1>GAME OVER</h1>
				<h5>--Refresh page to play again--</h5>
				<PlayerArea
					playerState={playerState}
					activePlayerScore={activePlayerScore}
				/>
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
					diceState={diceState}
				/>
			</div>
			<PlayerArea
				playerState={playerState}
				activePlayerScore={activePlayerScore}
			/>
		</section>
	);
};

export default GameController;
