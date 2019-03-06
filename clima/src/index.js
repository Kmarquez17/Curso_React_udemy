import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// class App extends Component {
// 	state = {
// 		hola: 0,
// 	};

// 	componentDidUpdate(prevProps, prevState) {
// 		console.log('He actualizado una vez mas');
// 		if (prevState.hola !== this.state.hola) {
// 			this.whileRep();
// 		}
// 	}

// 	whileRep = () => {
// 		setTimeout(() => {
// 			this.setState({
// 				hola: 1 + 1,
// 			});
// 		}, 1000);
// 	};

// 	Click = () => {
// 		this.whileRep();
// 	};

// 	render() {
// 		return (
// 			<div>
// 				<h1> {this.state.hola} </h1> <button onClick={this.Click}> Click </button>{' '}
// 			</div>
// 		);
// 	}
// }

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
