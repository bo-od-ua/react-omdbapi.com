import Card from './Card'

function Movies(props) {
	console.log(props);
	return (
		<div className="movies">
			{
				props.movies.length ? (
					props.movies.map(movie =>
						<Card
							key={movie.imdbID}
							readMoreHandler= {props.readMoreHandler}
							{...movie}
						/>
					)
				) : (
					<p>Noting found...</p>
				)
			}
		</div>
	);
}

export default Movies;
