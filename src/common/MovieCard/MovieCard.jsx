import React from "react";
import { Badge } from "react-bootstrap";
import "./MovieCard.style.css";
import { useMovieGenreQuery } from "../../hooks/usMovieGenre";

const MovieCard = ({ movie }) => {
  const { data: genreData } = useMovieGenreQuery();

  const showGenre = (genreIdList) => {
    if (!genreData) return [];
    const genreNameList = genreIdList.map((id) => {
      const genreObj = genreData.find((genre) => genre.id === id);
      return genreObj.name;
    });

    return genreNameList;
  };
  return (
    <div
      style={{
        backgroundImage:
          "url(" +
          `https://image.tmdb.org/t/p/w300_and_h450_bestv2${movie.poster_path}` +
          ")",
      }}
      className="movie-card"
    >
      <div className="overlay">
        <h1 className="title-design">{movie.title}</h1>
        <div className="id-design">
          {showGenre(movie.genre_ids).map((id) => (
            <Badge bg="danger">{id}</Badge>
          ))}
        </div>
        <div>
          <div className="average-design">
            {" "}
            {(Math.round(movie.vote_average * 10) / 10).toFixed(1)}
          </div>
          <div className="popularity-design">
            {(Math.round(movie.popularity * 10) / 10).toFixed(1)}
          </div>
          <div className="adult-design">
            {movie.adult ? "18세이상 관람가" : "전체 관람가"}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
