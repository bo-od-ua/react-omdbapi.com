import React from 'react';
import Movies from '../components/Movies';
import Search from '../components/Search';
//import Movie from '../components/Movie';

class Main extends React.Component {
	state = {
		movies: []
	}

	componentDidMount() {
		fetch('http://www.omdbapi.com/?apikey=f01b5b97&s=matrix')
			.then(response => response.json())
			.then(data => this.setState({
				movies: data.Search ? data.Search : [],
				loading: false
			}));
	}

	handleEnter = (search, type) => {
		if (search.trim() === "") return;
		search = encodeURIComponent(search);
		let url= `http://www.omdbapi.com/?apikey=f01b5b97&s=${search}`;
		if(type!== 'all'){
			url= url+ `&type=${type}`;
		}
		fetch(url)
			.then(response => response.json())
			.then(data => this.setState({movies: data.Search}));
	}

	render() {
		return (
			<main className="container">
				<Search enterHandler={this.handleEnter} />
				{this.state.movies.length ? (
					<Movies movies={this.state.movies} />
				) : (
					<div className="loader">Loading...</div>
				)}
			</main>
		);
	}
}

export default Main;