import React, { useState, useEffect } from 'react';
import DiceArea from './DiceArea';
import PlayerArea from './PlayerArea';
import ScoreSelector from './ScoreSelector';

import scoring from '../logic/scoring';
import player from '../logic/player';

const GameController = () => {
	const [diceState, setDiceState] = useState([]);
	const [diceScore, setDiceScore] = useState(scoring(diceState));
	const [activePlayer, setActivePlayer] = useState(player);
	// console.log(activePlayer.scoreCard);

	useEffect(() => {
		setDiceScore(scoring(diceState));
	}, [diceState]);

	useEffect(() => {
		setActivePlayer(activePlayer);
	}, [activePlayer]);

	return (
		<section className='Game-container'>
			<div className='logo-box'>
				<div className='logo-back'>
					<i className='fas fa-dice'></i>
				</div>
				<div className='logo-text'>Yahtzoo!</div>
			</div>
			<ScoreSelector
				diceScore={diceScore}
				activePlayer={activePlayer}
				setActivePlayer={setActivePlayer}
			/>
			<DiceArea setDiceState={setDiceState} />
			<PlayerArea {...activePlayer} />
		</section>
	);
};

export default GameController;
