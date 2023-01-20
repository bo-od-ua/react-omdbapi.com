import Card from './Card'

function Movies(props) {
    return (
        <div className="movies">
            {
							props.movies.length ?
							( props.movies.map(movie => <Card key={movie.imdbID} {...movie} />)) :
							(<p>Noting found.</p>)
						}
        </div>
    );
}

export default Movies;