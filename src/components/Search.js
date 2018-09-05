import React, {Component} from 'react';

class Search extends Component {
	render() {
		const { handleSubmit, handleChange } = this.props;
		return (
			<form onSubmit={handleSubmit}>
				<input 
					type="text"
					onChange={handleChange}
					name="search"
				/>
				<button>Submit</button>
			</form>
		)
	}
}

export default Search;