# React - Yahtzoo

### It's legally distinct from Yahtzee!!

#### Live View: https://ty-react-yahtzee.netlify.app/

Tech Stack: React, JS, HMTL, CSS

This is a porfolio project started on February 27, 2021.

#### How to Play Yahtzee

(From https://www.dicegamedepot.com/yahtzee-rules/ )

Choose a starting player by any method (oldest player, youngest player, highest roll of the dice, etc.)

Beginning with the starting player, players will take turns one at a time in clockwise order. The game consists of thirteen rounds and at the end of the thirteenth round then the game will end. (All the categories on the players’ score cards will be completely filled in at that point.)

At the start of a turn, the player takes all 5 dice and rolls them. They can then roll some or all of the dice up to two more times, setting aside any dice they’d like to keep and rerolling the rest. The dice can be scored after any of the rolls, but scoring the dice ends the player’s turn. Setting dice aside after one roll does not prevent one or more of them from being rolled again on any subsequent roll if the player so chooses.

Each player’s goal is to try and score as high as they can in one of the thirteen categories shown on their score card.

To score the dice, the player selects one of the categories on their score card and writes the score into it. Each category can be scored only once per game (except for the Yahtzee category). Categories can be filled in any order. A player must score the dice on their turn even if it turns out that there are no good categories remaining to score in. Once a category is filled it may not be changed.

A player may write a score of zero in any category if they have rolled no point-generating results or if they simply choose to do so. For example, a player could put a roll of 2-4-5-6-6 into the Ones category even though it would score zero points.

After marking their score on their score card, the player’s turn ends and play proceeds to the player on their left.

The categories on the score card are divided into two sections. The categories in the Upper Section are:

- ###### Ones
  - What is needed to score: Ones
  - How many points are scored: Receive 1 point for each 1 rolled
- ###### Twos
  - What is needed to score: Twos
  - How many points are scored: Receive 2 points for each 2 rolled
- ###### Threes
  What is needed to score: Threes
  How many points are scored: Receive 3 points for each 3 rolled
- ###### Fours
  - What is needed to score: Fours
  - How many points are scored: Receive 4 points for each 4 rolled
- ###### Fives
  - What is needed to score: Fives
  - How many points are scored: Receive 5 points for each 5 rolled
- ###### Sixes
  - What is needed to score: Sixes
  - How many points are scored: Receive 6 points for each 6 rolled
  - Ultimately, each player will want to try and score a grand total of 63 or more points in the Upper Section by the end of the game. If they do so, they receive a 35 point bonus.

The categories in the Lower Section are:

- ###### Three of a Kind
  - What is needed to score: Three dice of the same number
  - How many points are scored: Add up all the spots on all the dice. (For example, rolling 2-2-2-3-5 would score a total of 14 points.)
- ###### Four of a Kind
  - What is needed to score: Four dice of the same number
  - How many points are scored: Add up all the spots on all the dice
- ###### Full House
  - What is needed to score: Three dice showing the same number, and two dice showing another number.
  - How many points are scored: 25 points
- ###### Small Straight
  - What is needed to score: Any four consecutive numbers (for example, 3-4-5-6)
  - How many points are scored: 30 points
- ###### Large Straight
  - What is needed to score: Any five consecutive numbers (for example, 1-2-3-4-5)
  - How many points are scored: 40 points
- ###### Yahtzee (or Five of a Kind)
  - What is needed to score: All 5 dice showing the same number
  - How many points are scored: 50 points
- ###### Chance
  - What is needed to score: Any combination of dice
  - How many points are scored: Add up all the spots on all the dice
  - It’s possible that a player will end up with a combination of dice that could be used in more than one category. For example, a roll of 3-3-3-4-4 could be scored as threes or fours in the Upper Section, or as a Full House or a Three-Of-A-Kind, or Chance in the Lower Section. The player has the option of scoring the dice in any one of those categories as long as they have not been used previously in the game.

#### Special Yahtzee Scoring

If a player rolls a Yahtzee on their turn but they have already filled in the Yahtzee category in a previous turn, then special scoring rules apply:

If the player has already filled in their Yahtzee box with a score of 50, they receive a Yahtzee bonus of 100 additional points. However, if their Yahtzee box was previously filled in with a score of zero then they don’t receive the Yahtzee bonus.

The player then selects another category (other than the Yahtzee category) to score the dice as normal.

If the category in the Upper Section that corresponds to the numbers in the Yahtzee is unused, then the player must use that category.
If the corresponding box in the Upper Section has been used already then the player may choose to score one of the unused boxes in the Lower Section. In this case, the Yahtzee that the player has rolled acts as a “Joker” so that it can be placed in the Full House, Small Straight, and Large Straight categories if the player so wishes, even though it may not meet the standard requirements for those categories.
If the player can’t use a box in either the upper or Lower Section, they score zero points.

#### Winning

Once all players have taken thirteen turns (and subsequently filled in all the categories on their score card) the game ends.

Players add up their scores in the following manner:

##### Upper Section

Mark the total sum of the Upper Section score in the corresponding total score box. If a player scores 63 or more points in the Upper Section then they receive a 35 point bonus.

##### Lower Section

Mark the total sum of the Lower Section score in the corresponding total score box. Add 100 points for each check in the Yahtzee bonus box.

##### Grand Total

Add the total sums of the upper and Lower Sections together. This is the player’s total score for the game.

The player with the highest total score is the winner! In the case of a tie, all tied players share the victory.
