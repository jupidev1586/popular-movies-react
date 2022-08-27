// const BASE_URL = 'https://edgemony-backend.herokuapp.com/';


const API_KEY = `ad6baf64ad75ee341315fda666f2d48e`;
const SITE_BASE = `https://api.themoviedb.org/3/movie/top_rated?api_key=`;
const SITE_BASE_GENRES = `https://api.themoviedb.org/3/genre/movie/list?api_key=`
const SITE_URL = `${SITE_BASE}${API_KEY}`;
const SITE_URL_GENRES = `${SITE_BASE_GENRES}${API_KEY}`;


export { SITE_URL, SITE_URL_GENRES };