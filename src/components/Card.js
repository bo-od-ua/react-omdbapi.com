function Card(props) {
    const {
        Title,
        Year,
        imdbID,
        Type,
        Poster
    } = props;
    return (
        <div id={"movie-" + imdbID} className="card">
            <div className="card-image waves-effect waves-block waves-light">
                <img className="activator" src={Poster} alt="" />
            </div>
            <div className="card-content">
                <span className="card-title activator grey-text text-darken-4">
                    {Title}
                </span>
                <p>
                    <span>{Year}, {Type}</span>
                    <a href="#" className="right">Read more</a>
                </p>
            </div>
        </div>
    );
}

export default Card;