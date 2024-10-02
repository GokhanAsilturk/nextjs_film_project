const API_URL = 'https://api.themoviedb.org/3';
const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

const fetchMovieApi= async (pathName, query = "") =>{
  try{
  const url = 
    `${API_URL}${pathName}?api_key=${API_KEY}&${query}`;
  
  const response = await fetch(url);
  return response.json();
  }
  catch(error){
    throw new Error(error);
  }
}


const getSingleCategory = async(categoryId) =>{
  return fetchMovieApi('/discover/movie',`with_genres=${categoryId}`);
}

const getCategories = async() =>{
  return fetchMovieApi('/genre/movie/list',`page=1`);
}

const getPopularMovies = async() =>{
  return fetchMovieApi('/movie/popular',`page=1`);
}

const getTopRatedMovies = async() =>{
  return fetchMovieApi('/movie/top_rated',`page=1`);
}

const getMovie = async(movieId) =>{
  return fetchMovieApi(`/movie/${movieId}`);
}

export {fetchMovieApi,
        getSingleCategory,
        getCategories,
        getPopularMovies,
        getTopRatedMovies,
        getMovie
      };