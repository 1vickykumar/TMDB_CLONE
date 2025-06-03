import fetchApi from "./fetchApi";
const token = import.meta.env.VITE_TMDB_TOKEN;
export const GetTrendingOnDay = () => {
  const url = "https://api.themoviedb.org/3/trending/all/day?language=en-US";
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
  };
  return  fetchApi({url, options})
};
export const GetTrendingWeek = () => {
  const url = "https://api.themoviedb.org/3/trending/all/week?language=en-US";
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
  };
  return  fetchApi({url, options})
};

