import { useQuery } from "@tanstack/react-query";
import api from "../utils/api";

const fetchUpComingMovies = () => {
  return api.get(`/movie/top_rated`);
};

export const useUpComingMovies = () => {
  return useQuery({
    queryKey: ["movie-topRated"],
    queryFn: fetchUpComingMovies,
    select: (result) => result.data,
  });
};
