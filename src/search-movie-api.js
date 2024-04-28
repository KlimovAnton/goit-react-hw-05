import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3/";

export const fetchSearchFilms = async (query, page) => {
    const response = await axios.get(`search/movie`, {
      headers: {
        Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNjI3MWJkZTA5ZmIzNTg4ZTM4ZTA4ZmI3MGIwYzk2NiIsInN1YiI6IjY2MmJmZWU5NGEyMjI2MDEyODU4Yzk1ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.VlMFzVsMvcSowwOTGN8Iy4d8mKEATM_ZSYPB0wLEqEs",
      },
      params: {
        query: query,
        page: page,
        include_adult: false,
        language: "en-US",
      },
    });
    return response.data;
  };