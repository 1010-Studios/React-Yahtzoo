import React, { useState, useEffect } from 'react';
import DiceArea from './DiceArea';
import PlayerArea from './PlayerArea';
import ScoreSelector from './ScoreSelector';

import scoring from '../logic/scoring';
import player from '../logic/player';

const GameController = () => {
	const [diceState, setDiceState] = useState([]);
	const [diceScore, setDiceScore] = useState(scoring(diceState));
	const [activePlayerScore, setActivePlayerScore] = useState(player('Ty'));
	// console.log(activePlayerScore.scoreCard);

	useEffect(() => {
		setDiceScore(scoring(diceState));
	}, [diceState]);

	useEffect(() => {
		setActivePlayerScore(activePlayerScore);
	}, [activePlayerScore]);

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
				activePlayerScore={activePlayerScore}
				setActivePlayerScore={setActivePlayerScore}
			/>
			<DiceArea setDiceState={setDiceState} />
			<PlayerArea {...activePlayerScore} />
		</section>
	);
};

export default GameController;
