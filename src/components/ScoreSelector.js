import React from 'react';
import '../styles/ScoreSelector.css';

const ScoreSelector = ({
	diceScore,
	setActivePlayerScore,
	activePlayerScore,
	nextTurn,
}) => {
	const ScoreTable = (score) => {
		const scoreBTN = Object.keys(score).map((keyName, i) => (
			<div className='score-table' key={i}>
				<button
					disabled={
						activePlayerScore.scoreCard[keyName] === false ? false : true
					}
					id={keyName}
					className='score-table-btn'
					value={score[keyName]}
					onClick={assignScore}>
					{keyName} : {score[keyName]}
				</button>
			</div>
		));
		return <div className='score-container'>{scoreBTN}</div>;
	};

	//Button Click

	const assignScore = (ev) => {
		setActivePlayerScore(
			{ ...activePlayerScore },
			(activePlayerScore.scoreCard[ev.target.id] = Number(ev.target.value))
		);
		nextTurn();
	};

	return (
		<div className='win_score '>
			<div className='score-list-container'>
				<ScoreTable {...diceScore} />
			</div>
		</div>
	);
};

export default ScoreSelector;
