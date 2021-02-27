import './App.css';
import DiceArea from './components/DiceArea';
import PlayerArea from './components/PlayerArea';

function App() {
	return (
		<div className='App'>
			<section className='Game-container'>
				<div className='logo-box'>
					<div className='logo-back'>
						<i className='fas fa-dice'></i>
					</div>
					<div className='logo-text'>Yahtzoo!</div>
				</div>
				<DiceArea />
				<PlayerArea />
			</section>
		</div>
	);
}

export default App;
