import React /*, {Component} */from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';

// class App extends Component {
// 	state = {
// 		hola: 0,
// 	};

	
//     componentWillMount(){
//         console.log('componentWillMount')
//     }
//     componentDidMount(){
//         console.log('componentDidMount')
//         console.log('------------------------------------------------------------------------------------------')
//     }
//     componentWillReceiveProps(){
//         console.log('componentWillReceiveProps')
//     }
//     shouldComponentUpdate(nextProps, nextState) {
//         console.log('shouldComponentUpdate')
//         console.log('state '+ this.state.hola)
//         console.log('next '+ nextState.hola)
//         if (this.state.hola !== nextState.hola) {
//           return true;
//         }
//     }
//     componentWillUpdate(){
//         console.log('componentWillUpdate')
//     }
//     componentDidUpdate(){
//         console.log('componentDidUpdate')
//         console.log('------------------------------------------------------------------------------------------')
//     }
//     componentWillUnmount(){
//         console.log('componentWillUnmount')
//     }
    

// 	whileRep = () => {
// 		setTimeout(() => {
// 			this.setState({
// 				hola: this.state.hola + 1,
// 			});
// 		}, 100);
// 	};

// 	Click = () => {
// 		this.whileRep();
// 	};

// 	render() {
//         console.log('render')
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
