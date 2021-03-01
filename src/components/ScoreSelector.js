import React from 'react';
import '../styles/ScoreSelector.css';

const ScoreTable = (score) => {
	console.log(score);
	return (
		<table className='scoretable'>
			<tr>
				<td>Ones:</td>
				<td>{score.ones}</td>
			</tr>
			<tr>
				<td>Twos:</td>
				<td>{score.twos}</td>
			</tr>
			<tr>
				<td>Threes:</td>
				<td>{score.threes}</td>
			</tr>
			<tr>
				<td>Fours:</td>
				<td>{score.fours}</td>
			</tr>
			<tr>
				<td>Fives:</td>
				<td>{score.fives}</td>
			</tr>
			<tr>
				<td>Sixes:</td>
				<td>{score.sixes}</td>
			</tr>
		</table>
	);
};

const ScoreSelector = (score) => {
	console.log(score);
	return (
		<div className='win_score'>
			<button
				className='btn_win_score_close'
				onClick={(ev) => {
					ev.target.closest('div').classList.toggle('hidden');
				}}>
				<i className='fas fa-window-close'></i>
			</button>
			<ScoreTable {...score[0]} {...score[1]} />
			<p></p>
		</div>
	);
};

export default ScoreSelector;
