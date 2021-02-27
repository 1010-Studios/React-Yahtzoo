import React from 'react';
import '../styles/DiceArea.css';

const DiceArea = () => {
	return (
		<div className='dice-container'>
			<div className='dice-hold'>
				<h2>Hold</h2>
				<i className='fas fa-dice-one'></i>
				<i className='fas fa-dice-two'></i>
				<i className='fas fa-dice-three'></i>
				<i className='fas fa-dice-four'></i>
				<i className='fas fa-dice-five'></i>
			</div>
			<div className='dice-active'>
				<h2>Active Roll</h2>
				<i className='fas fa-dice-one'></i>
				<i className='fas fa-dice-two'></i>
				<i className='fas fa-dice-three'></i>
				<i className='fas fa-dice-four'></i>
				<i className='fas fa-dice-five'></i>
			</div>
			<button className='btn-roll'>
				<i className='fas fa-dice'>Roll!</i>
			</button>
		</div>
	);
};

export default DiceArea;
