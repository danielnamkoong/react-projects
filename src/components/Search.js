import React, {Component} from 'react';

class Search extends Component {
	render() {
		const { handleSubmit, handleChange } = this.props;
		return (
			<form onSubmit={handleSubmit} className="search">
				<input 
					type="text"
					onChange={handleChange}
					name="search"
				/>
				<button type="submit" value="Search">Submit</button>
			</form>
		)
	}
}

export default Search;