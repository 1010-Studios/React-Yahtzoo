const scoreBoard = (diceArr) => {
	//Upper Board
	let filterArr = diceArr;
	const scoreFilter = (num) =>
		filterArr
			.filter((x) => x === num)
			.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
	//Sml Straight, Lrg Straight
	const checkStraight = (checkSequence) => {
		let seq = 1;
		for (let i = 0; i < diceArr.length; i++) {
			if (diceArr[i] + 1 === diceArr[i + 1]) seq++;
			if (seq === checkSequence) {
				if (seq === 4) return 30;
				if (seq === 5) return 40;
			}
		}
		return 0;
	};

	//3x, 4x, Yahtzee
	const checkMulitples = (checkMultiples) => {
		let repeated = 1;
		for (let i = 0; i < diceArr.length; i++) {
			for (let j = i + 1; j < diceArr.length; j++) {
				if (diceArr[i] === diceArr[j]) repeated++;
			}
			if (repeated === checkMultiples) {
				switch (repeated) {
					case 3:
					case 4:
						return diceArr.reduce((a, b) => a + b);
					default:
						return 50;
				}
			}
			repeated = 1;
		}
		return 0;
	};

	//Full House
	const checkFullHouse = () => {
		const fullHouse = new Set(diceArr);
		if (fullHouse.size === 2) return 25;
		return 0;
	};

	//Chance
	const chance = diceArr.reduce(
		(accumulator, currentValue) => accumulator + currentValue,
		0
	);

	//Bonuses

	return {
		ones: scoreFilter(1),
		twos: scoreFilter(2),
		threes: scoreFilter(3),
		fours: scoreFilter(4),
		fives: scoreFilter(5),
		sixes: scoreFilter(6),
		threeOfAKind: checkMulitples(3),
		fourOfAKind: checkMulitples(4),
		fullHouse: checkFullHouse(),
		smallStraight: checkStraight(4),
		largeStraight: checkStraight(5),
		yahtzee: checkMulitples(5),
		chance: chance,
	};
};

const scoring = (diceArr) => scoreBoard(diceArr);

export default scoring;
