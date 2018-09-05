import React, {Component} from 'react';
import './App.css';
import Search from './components/Search';
import Gif from './components/Gif';

class App extends Component {
	state={	
		isLoading: false,
		inputValue: '',
		results: [],
	}

	handleChange = event => {
		this.setState({
			inputValue: event.target.value
		});
	}	

  handleSubmit = event => {  
  	event.preventDefault()
    this.setState({ isLoading: true });
    const query = this.state.inputValue;

    fetch(`https://api.giphy.com/v1/gifs/search?api_key=8PPSPL45las2U4qYn85VDTGGgvnK34hZ&q=${query}&limit=25&offset=0&rating=G&lang=en`)
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Something went wrong...');
        }
      })
      .then(responseDate => {
        this.setState({
          results: responseDate.data,
          isLoading: false
        })
      })
      .catch(error => this.setState({ error, isLoading: false }));    
  }



	render() {
		const { results, inputValue, isLoading} = this.state;

		return (
			<div>
				<h1>Gif search</h1>
				<Search 
					handleChange={this.handleChange}
					handleSubmit={this.handleSubmit}
					inputValue={inputValue}
				/>
				<Gif
					results={results}
				/>
			</div>
		);
	}
}

export default App;