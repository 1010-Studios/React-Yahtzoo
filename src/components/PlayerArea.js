import React from 'react';
import '../styles/PlayerArea.css';

const PlayerArea = (props) => {
	// console.log(props);

	const calcScore = (scoreCard) => {
		return scoreCard.reduce((a, b) => a + b);
	};

	const ScoreCard = (score) => {
		const playerScore = Object.keys(score).map((keyName, i) => (
			<li key={i}>
				<div>
					{keyName} : {Number(score[keyName]) || 0}
				</div>
			</li>
		));
		return <ul className='player-scores'>{playerScore}</ul>;
	};

	const PlayerCard = ({ playerName, scoreCard }) => {
		const scoreAsArr = Object.values(scoreCard);
		return (
			<section className='player-card'>
				<h4>{playerName || 'Player'}</h4>
				<h5>Score: {calcScore(scoreAsArr)}</h5>
				<div className='player-scoreboard'>
					<ScoreCard {...scoreCard} />
				</div>
			</section>
		);
	};

	const ScoreBoard = ({ ...playerArr }) => {
		console.log(playerArr);
		console.log('here');
		console.log(Object.values(playerArr));
		const cards = Object.values(playerArr).map((player) => (
			<PlayerCard {...player}>Yo</PlayerCard>
		));
		return <div className='player-cards'>{cards}</div>;
	};

	return (
		<div className='player-container'>
			<ScoreBoard {...props} />
		</div>
	);
};

export default PlayerArea;
