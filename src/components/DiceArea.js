import React, { useState } from 'react';
import '../styles/DiceArea.css';

const DiceArea = () => {
	const [holdDice, setHoldDice] = useState([]);
	const [activeDice, setActiveDice] = useState([1, 2, 3, 4, 5]);

	function rollDice() {
		console.log(activeDice);
		for (let i = 0; i < activeDice.length; i++) {
			activeDice[i] = Math.floor(Math.random() * 6 + 1);
		}
		setActiveDice([...activeDice]);
	}

	/***********************************************
	 *
	 * Drag and Drop Functionality
	 *
	 ***********************************************/

	function allowDrop(ev) {
		ev.preventDefault();
	}

	function drag(ev) {
		ev.target.classList.toggle('dragging');
		ev.dataTransfer.setData('text', ev.target.id);
	}

	function dragEnter(ev) {
		ev.target.closest('div').classList.add('dragOver');
	}

	function dragExit(ev) {
		ev.target.closest('div').classList.remove('dragOver');
	}

	function drop(ev) {
		ev.preventDefault();
		let data = ev.dataTransfer.getData('text');
		const targetContainer = ev.target.closest('div');

		if (targetContainer.className === 'dice-hold dragOver') {
			let indexNo = activeDice.indexOf(Number(data));
			console.log(indexNo);
			if (indexNo !== -1) {
				const moveThis = activeDice.splice(activeDice.indexOf(Number(data)), 1);
				setHoldDice([...holdDice, ...moveThis]);
			}
		}

		if (targetContainer.className === 'dice-active dragOver') {
			let indexNo = holdDice.indexOf(Number(data));
			if (indexNo !== -1) {
				const moveThis = holdDice.splice(holdDice.indexOf(Number(data)), 1);
				setActiveDice([...activeDice, ...moveThis]);
			}
		}

		targetContainer.classList.remove('dragOver');
	}

	/***********************************************
	 *
	 * Render n sich
	 *
	 ***********************************************/

	const DrawDice = (dice) => {
		const diceArr = Object.values(dice);
		const drawArr = diceArr.map((die) => {
			let no;
			switch (die) {
				case 1:
					no = 'one';
					break;
				case 2:
					no = 'two';
					break;
				case 3:
					no = 'three';
					break;
				case 4:
					no = 'four';
					break;
				case 5:
					no = 'five';
					break;
				case 6:
					no = 'six';
					break;
				default:
					break;
			}
			return (
				<li>
					<i
						draggable='true'
						onDragStart={drag}
						id={die}
						className={`fas fa-dice-${no}`}></i>
				</li>
			);
		});

		return <ul className='dice-draw'>{drawArr}</ul>;
	};

	return (
		<section className='dice-container'>
			<div
				onDrop={drop}
				onDragOver={allowDrop}
				onDragEnter={dragEnter}
				onDragExit={dragExit}
				className='dice-hold'>
				<h2>Hold</h2>
				<DrawDice {...holdDice} />
			</div>
			<div
				onDrop={drop}
				onDragOver={allowDrop}
				onDragEnter={dragEnter}
				onDragExit={dragExit}
				className='dice-active'>
				<h2>Active Roll</h2>
				<DrawDice {...activeDice} />
			</div>
			<button className='btn-roll'>
				<i onClick={rollDice} className='fas fa-dice'>
					Roll!
				</i>
			</button>
		</section>
	);
};

export default DiceArea;
