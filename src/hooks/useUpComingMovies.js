import { useQuery } from "@tanstack/react-query";
import api from "../utils/api";

const fetchUpComingMovies = () => {
  return api.get(`/movie/upcoming`);
};

export const useUpComingMovies = () => {
  return useQuery({
    queryKey: ["movie-upcoming"],
    queryFn: fetchUpComingMovies,
    select: (result) => result.data,
  });
};
