import React, { useState, useEffect } from 'react';
import DiceArea from './DiceArea';
import PlayerArea from './PlayerArea';
import ScoreSelector from './ScoreSelector';

import scoring from '../logic/scoring';

const GameController = () => {
	const [diceState, setDiceState] = useState([]);
	const [score, setScore] = useState(scoring(diceState));

	useEffect(() => {
		setScore(scoring(diceState));
	}, [diceState]);
	return (
		<section className='Game-container'>
			<div className='logo-box'>
				<div className='logo-back'>
					<i className='fas fa-dice'></i>
				</div>
				<div className='logo-text'>Yahtzoo!</div>
			</div>
			<h2>{[...diceState]}</h2> {/* Placeholder for data checking*/}
			<DiceArea setDiceState={setDiceState} />
			<PlayerArea />
			<ScoreSelector {...score} />
		</section>
	);
};

export default GameController;
