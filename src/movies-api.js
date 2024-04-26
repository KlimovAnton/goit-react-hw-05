import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3/";
const KEY = "36271bde09fb3588e38e08fb70b0c966";

export const getMovies = async () => {
    const response = await axios.get("trending/movie/day?language=en-US", {
      headers: {
        Authorization: 
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNjI3MWJkZTA5ZmIzNTg4ZTM4ZTA4ZmI3MGIwYzk2NiIsInN1YiI6IjY2MmJmZWU5NGEyMjI2MDEyODU4Yzk1ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.VlMFzVsMvcSowwOTGN8Iy4d8mKEATM_ZSYPB0wLEqEs",
      },
    });
     return response.data.results;
  };
  
//   export const getMovieById = async (paymentId) => {
//     const response = await axios.get(`/payments/${paymentId}`);
//     return response.data;
//   };


