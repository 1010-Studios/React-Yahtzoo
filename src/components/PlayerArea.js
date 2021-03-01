import React from 'react';
import '../styles/PlayerArea.css';

const PlayerArea = (props) => {
	const scoreAsArr = Object.values(props.scoreCard);

	const calcScore = (scoreCard) => {
		return scoreCard.reduce((a, b) => a + b);
	};

	const ScoreCard = (score) => {
		const playerScore = Object.keys(score).map((keyName, i) => (
			<li key={i}>
				<div>
					{keyName} : {score[keyName]}
				</div>
			</li>
		));
		return <ul className='player-scores'>{playerScore}</ul>;
	};

	const PlayerCard = ({ playerName, scoreCard }) => (
		<section className='player-card'>
			<h4>{playerName || 'Player'}</h4>
			<h5>Score: {calcScore(scoreAsArr)}</h5>
			<div className='player-scoreboard'>
				<ScoreCard {...scoreCard} />
			</div>
		</section>
	);

	return (
		<div className='player-container'>
			<PlayerCard {...props} />
		</div>
	);
};

export default PlayerArea;
