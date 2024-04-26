import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3/";

export const getMovies = async () => {
    const response = await axios.get("trending/movie/day?language=en-US");
     response.data;
  };
  
//   export const getMovieById = async (paymentId) => {
//     const response = await axios.get(`/payments/${paymentId}`);
//     return response.data;
//   };