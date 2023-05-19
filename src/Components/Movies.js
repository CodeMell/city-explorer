function Movies(props) {
    return (
      <div>
        <h2>List of Movies</h2>
        {props.moviesData.results.map((movie,i) => {
          return(
            <li key={i}>
              <p>Title: {movie.original_title}</p>
              <p>Overview: {movie.overview}</p>
            </li>
          )
        })}
        
      </div>
    );
  }
  
  export default Movies;