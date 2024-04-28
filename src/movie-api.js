import axios from "axios";
axios.defaults.baseURL = "https://api.themoviedb.org/3/";

export const fetchDetailsMovie = async (id, params) => {
    const response = await axios.get(`movie/${id}`, {
        params: {
            language: 'en-US',
            append_to_response: params,
            },
        headers: {
            Authorization: 
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNjI3MWJkZTA5ZmIzNTg4ZTM4ZTA4ZmI3MGIwYzk2NiIsInN1YiI6IjY2MmJmZWU5NGEyMjI2MDEyODU4Yzk1ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.VlMFzVsMvcSowwOTGN8Iy4d8mKEATM_ZSYPB0wLEqEs",
        },
    });
     return response.data;
  };