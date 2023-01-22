import axios from "axios";

const API_KEY='115b567d77b04428b1251a93b22d9778';

export async function fetchMovies (query) {  
    let URL = "";
    if (query) {
        URL = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}&page=1`;
    } else {
        URL = `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}&page=1`;
    }

    const response = await axios.get(URL);
    const results = response.data.results;

    if (results.length === 0 && query) {
      throw new Error("Search result not successful. Enter the correct movie name and repeat");
    }

    return results;
}

export async function fetchMoiveByID(id) {
    const URL = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`;
    const response = await axios.get(URL);

    return response.data;
}

export async function fetchCast(id) {
    
    const URL = `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${API_KEY}&language=en-US`;
    const response = await axios.get(URL);

    return response.data.cast
;
}