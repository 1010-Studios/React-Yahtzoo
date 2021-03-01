const player = (name) => {
	return {
		name: name,
		scoreCard: {
			ones: 0,
			twos: 0,
			threes: 0,
			fours: 0,
			fives: 0,
			sixes: 0,
			threeOfAKind: 0,
			fourofAKind: 0,
			fullHouse: 0,
			smallStraight: 0,
			largeStraight: 0,
			yahtzee: 0,
			chance: 0,
			bonus: 0,
		},
		score: 0,
	};
};

export default player;
