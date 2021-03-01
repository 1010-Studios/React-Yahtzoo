import React, { useState, useEffect } from 'react';
import DiceArea from './DiceArea';
import PlayerArea from './PlayerArea';
import ScoreSelector from './ScoreSelector';

import scoring from '../logic/scoring';

const GameController = () => {
	const [diceState, setDiceState] = useState([]);
	const [score, setScore] = useState(scoring(diceState));
	const [activePlayer, setActivePlayer] = useState();

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
			<DiceArea setDiceState={setDiceState} />
			<ScoreSelector {...score} activePlayer={activePlayer} />
			<PlayerArea />
		</section>
	);
};

export default GameController;
