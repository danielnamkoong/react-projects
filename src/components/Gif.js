import React, {Component} from 'react';

class Gif extends Component {
	render() {
		return (
			<div>
				<ul>
					{this.props.results.map(d => 
						<li key={d.id}> 
							<iframe src={`https://giphy.com/embed/${d.id}`} />
						</li>
					)}
				</ul>
			</div>
		);
	}
}

export default Gif;