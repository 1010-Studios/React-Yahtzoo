//Iterate and return available scores

const scoreLowerBoard = (diceArr) => {
	let filterArr = diceArr;
	const scoreFilter = (num) =>
		filterArr
			.filter((x) => x === num)
			.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

	return {
		ones: scoreFilter(1),
		twos: scoreFilter(2),
		threes: scoreFilter(3),
		fours: scoreFilter(4),
		fives: scoreFilter(5),
		sixes: scoreFilter(6),
	};
};

const scoreUpperBoard = (diceArr) => {
	console.log(diceArr);
	//3x, 4x
	//Full House
	//Sml Straight, Lrg Straight
	//Yahtzee, Bonus
	//Chance

	return {
		threeOfAKind: 0,
		fourofAKind: 0,
		fullHouse: 0,
		smallStraight: 0,
		largeStraight: 0,
		yahtzee: 0,
		bonus: 0,
		chance: 0,
	};
};

const scoring = (diceArr) => [
	scoreLowerBoard(diceArr),
	scoreUpperBoard(diceArr),
];

export default scoring;
