import React, { Component } from 'react';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			inicial: 0,
		};
    this.globalVar = 5;
    console.log('constructor')
  }
  componentWillMount() {
    console.log('componentWillMount')
     this.setState({ inicial: 1 });
  }
	render() {
    const NAME = `{this.props.name} mendez`;
    // const { inicial } = this.state;
    return (
        <div>
            <h1>{`Hola => ${NAME}`}</h1>
            <h2>{`Eres el numero ${this.state.inicial}`}</h2>
        </div>
    );
	}
}

export default App;
