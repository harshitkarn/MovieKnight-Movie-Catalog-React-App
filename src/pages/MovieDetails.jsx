import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import classes from "./MovieDetails.module.css";
import languages from '../resources/languages.json'
import loading from '../resources/Spinner-1s-84px.gif'

function MovieDetails() {
  let { movieId } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [loadedMovie, setLoadedmovie] = useState({});
  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/" +
        movieId +
        "?api_key=cf4568f3cedd6caae7e56b907fe23444"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setLoadedmovie({
          id: data["id"],
          link: data["homepage"],
          rating: data["vote_average"],
          img:
            data["poster_path"] == null
              ? "https://upload.wikimedia.org/wikipedia/commons/d/dc/No_Preview_image_2.png"
              : "https://image.tmdb.org/t/p/w500" + data["poster_path"],
          original_title:
            data["original_title"] === data["title"]
              ? ""
              : "(" + data["original_title"] + ")",
          title: data["title"],
          tagline: data["tagline"],
          description: data["overview"],
          runtime: data["runtime"],
          language: data["original_language"],
        });
        console.log(loadedMovie);
        setIsLoading(false);
      });
  });
  if (isLoading) {
    return (
      <section className={classes.loading}>
        <img src={loading} alt="loading..." />
      </section>
    );
  }
  return (
    <div className={classes.movieContainer}>
      <div className={classes.movieImage}>
        <img src={loadedMovie["img"]} alt="movie" />
        <p>
          Rating:{" "}
          {loadedMovie["rating"] === 0 ? "N/A" : loadedMovie["rating"] + "/10"}
        </p>
        <p>Language: {languages[loadedMovie["language"]]["name"]}</p>
      </div>
      <div className={classes.movieDetails}>
        <h1>{loadedMovie["title"] + loadedMovie["original_title"]}</h1>
        {loadedMovie["tagline"]!=="" && (<h3>{loadedMovie["tagline"]}</h3>)}
        <p>{loadedMovie["description"]}</p>
        <p>Runtime: {loadedMovie["runtime"]} minutes</p>
        {loadedMovie["link"]!=="" &&(<a href={loadedMovie["link"]} rel="noreferrer" target="_blank">See More</a>)}
      </div>
    </div>
  );
}

export default MovieDetails;
