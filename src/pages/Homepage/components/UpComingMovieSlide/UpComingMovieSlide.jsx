import React from "react";
import { useUpComingMovies } from "../../../../hooks/useUpComingMovies";
import { Alert } from "react-bootstrap";
import MovieSlider from "../../../../common/MovieSlider/MovieSlider";
import { responsive } from "../../../../constants/responsive";

const UpComingMovieSlide = () => {
  const { data, isLoading, isError, error } = useUpComingMovies();

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (isError) {
    return <Alert variant="danger">{error.message}</Alert>;
  }

  return (
    <div>
      <MovieSlider
        title="UpComing Movies"
        movies={data.results}
        responsive={responsive}
      />
    </div>
  );
};

export default UpComingMovieSlide;
