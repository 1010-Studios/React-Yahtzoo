const player = (playerName) => {
	return {
		playerName: playerName,
		scoreCard: {
			ones: false,
			twos: false,
			threes: false,
			fours: false,
			fives: false,
			sixes: false,
			threeOfAKind: false,
			fourOfAKind: false,
			fullHouse: false,
			smallStraight: false,
			largeStraight: false,
			yahtzee: false,
			chance: false,
			bonus: false,
			upperBoard: false,
		},
		score: false,
	};
};

export default player;
