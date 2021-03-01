import React from 'react';
import '../styles/ScoreSelector.css';

const ScoreSelector = ({
	diceScore,
	setActivePlayerScore,
	activePlayerScore,
}) => {
	const scoreWindow = document.querySelector('.win_score');

	const ScoreTable = (score) => {
		const scoreBTN = Object.keys(score).map((keyName, i) => (
			<div className='score-table' key={i}>
				<button
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
		closeWindow();
	};

	const closeWindow = (ev) => {
		scoreWindow.classList.toggle('hidden');
	};

	return (
		<div className='win_score hidden'>
			<div className='score-list-container'>
				<ScoreTable {...diceScore} />
			</div>
			<button className='close-win-score' onClick={closeWindow}>
				<i className='fas fa-angle-double-down'>Assign Score</i>
			</button>
		</div>
	);
};

export default ScoreSelector;
