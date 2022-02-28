const API_KEY= "ddd21be8bc2d93f362919d0b3fc3300c";
const request = {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchTopActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchTopComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchTopHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchTopRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchTopDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
}

export default request;