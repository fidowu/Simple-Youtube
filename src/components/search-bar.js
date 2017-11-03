import React  from 'react';


class SearchBar extends React.Component{

	constructor(props){
		super(props);

		this.state = {
				term: ''

		}
		this.handleInputChange = this.handleInputChange.bind(this);
	}
	
	handleInputChange(event) {
		this.props.setSearchString(event.target.value);
		this.setState({term : event.target.value})
	}

	render() {
			return (
				<div className="search-bar">
				   <input type="text" className="search-input" 
				       value={this.state.term} onChange={this.handleInputChange} placeholder="Search" />
				</div>

			)
	}
}


export default SearchBar;
