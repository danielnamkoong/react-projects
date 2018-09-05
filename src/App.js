import React, {Component} from 'react';
import axios from 'axios';
import Search from './components/Search';

class App extends Component {
	state={
		inputValue: '',
		isLoading: false,
	}

	componentDidMount = () => {
		this.handleSubmit();
		console.log('componentDidMount');
	}

	handleSubmit = event => {
		console.log('handleSubmit');
	}

	handleChange = event => {
		console.log('handleChange');
		const inputValue = event.target.value;
		this.setState({
			inputValue
		})
		console.log(inputValue);
	}

	render() {
		return (
			<div>
				<h1>Gif search</h1>
				<Search 
					handleSubmit={this.handleSubmit}
					handleChange={this.handleChange}
				/>
			</div>
		)
	}
}

export default App;