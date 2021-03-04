import React from 'react';
import '../styles/ScoreSelector.css';

const ScoreSelector = ({
	diceScore,
	setActivePlayerScore,
	activePlayerScore,
	nextTurn,
	diceState,
}) => {
	const jokerScores = {
		...diceScore,
		fullHouse: 25,
		smallStraight: 30,
		largeStraight: 40,
	};

	const scoreIsAvailable = (score, keyName, currentScore) => {
		const upperBoard = Object.keys(diceScore).slice(0, 6);
		if (diceState.length <= 1) {
			return true;
		}
		if (isYahtzee) {
			// const checkUpperBoard =
			// 	upperBoard.includes(keyName) && score > 0 && currentScore === false;

			if (upperBoard.includes(keyName) && score > 0 && currentScore === false) {
				return false;
			}

			// if (!checkUpperBoard && currentScore !== false) return true;
			// return true;
		}
		if (currentScore !== false) return true;
		else return false;
	};

	const ScoreTable = (score) => {
		const scoreBTN = Object.keys(score).map((keyName, i) => (
			<div className='score-table' key={i}>
				<button
					disabled={scoreIsAvailable(
						score[keyName],
						keyName,
						activePlayerScore.scoreCard[keyName]
					)}
					id={keyName}
					className='score-table-btn'
					value={isYahtzee ? jokerScores[keyName] : score[keyName]}
					onClick={assignScore}>
					{keyName.split(/(?=[A-Z])/).join(' ')} :{' '}
					{isYahtzee ? jokerScores[keyName] : score[keyName]}
				</button>
			</div>
		));
		return <div className='score-container'>{scoreBTN}</div>;
	};

	//Scoring
	const isYahtzee =
		diceScore.yahtzee === 50 && activePlayerScore.scoreCard.yahtzee === 50;

	const bonusUpperBoard =
		Object.values(activePlayerScore.scoreCard)
			.slice(0, 6)
			.reduce((a, b) => a + b) >= 63;

	console.log(
		Object.values(activePlayerScore.scoreCard)
			.slice(0, 6)
			.reduce((a, b) => a + b)
	);
	console.log(bonusUpperBoard);

	if (bonusUpperBoard) {
		setActivePlayerScore(
			{ ...activePlayerScore },
			(activePlayerScore.scoreCard.upperBoard = 35)
		);
	}

	const assignScore = (ev) => {
		if (isYahtzee) {
			setActivePlayerScore(
				{ ...activePlayerScore },
				(activePlayerScore.scoreCard.bonus += 100)
			);
		}

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
