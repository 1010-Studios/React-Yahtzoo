import React from 'react';
import '../styles/ScoreSelector.css';

const ScoreTable = (score) => {
	const scoreBTN = Object.keys(score).map((keyName, i) => (
		<li className='score-table' key={i}>
			<button className='score-table-btn' value={score[keyName]}>
				{keyName} : {score[keyName]}
			</button>
		</li>
	));
	return <ul className='score-container'>{scoreBTN}</ul>;
};

const ScoreSelector = (score) => {
	const closeWindow = (ev) => {
		ev.target.closest('div').classList.toggle('hidden');
	};
	console.log(score);
	return (
		<div className='win_score'>
			<button className='close-win-score' onClick={closeWindow}>
				<i className='fas fa-angle-double-right' />
				Scores
			</button>
			<ScoreTable {...score[0]} />
			<ScoreTable {...score[1]} />
			<p></p>
		</div>
	);
};

export default ScoreSelector;
