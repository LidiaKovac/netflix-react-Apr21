import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel } from "react-bootstrap";
import SingleMovie from "./SingleMovie";
import "../styles.css";

class RowOfMovies extends React.Component {
  state = {
    movies: [],
  };
  componentDidMount() {
    this.fetchMovies();
  }
  fetchMovies = async () => {
    let response = await fetch(
      `http://www.omdbapi.com/?apikey=a0871843&s="${this.props.title.toLowerCase()}"&type=movie&page=1`
    );
    let movies_json = await response.json();
    this.setState({ movies: movies_json }, () =>
      console.log(this.state.movies.Search)
    );
  };
  render() {
    return (
      <>
        <h2>{this.props.title}</h2>
        <Carousel className="car-c" indicators={false}>
          <Carousel.Item>
            {this.state.movies.Search &&
              this.state.movies.Search.slice(0, 6).map((movie) => (
                <SingleMovie key={movie.imdbID} img={movie.Poster} title={movie.Title} id={movie.imdbID} />
              ))}
          </Carousel.Item>
          <Carousel.Item>
            {this.state.movies.Search &&
              this.state.movies.Search.slice(4, 10).map((movie, i) => {
                console.log(movie.Title || "title not found", movie.imdbID || "id not found")
                return <SingleMovie key={movie.imdbID} img={movie.Poster} title={movie.Title} id={movie.imdbID} />
              }
              )}
          </Carousel.Item>

        </Carousel>
      </>
    );
  }
}
export default RowOfMovies;
