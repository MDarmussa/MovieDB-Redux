
import { ALLMOVIES, MovieAPI } from "../types/moviesType"
import axios from "axios"


//in redux, it can't accept async/await - it need middleware: it's something between the action and the reducer
export const getAllMovie = () => {
     // middleware: step 1: create higher function with parameter (dispatch)
     return async (dispatch) => {
          const res = await axios.get(MovieAPI)
          console.log(res)
          dispatch({type: ALLMOVIES, data:res.data.results, pages: res.data.total_pages})
     }     
}

//to solve the middleware issue, create high function component (arrow function)
     //1- install redux-thunk and inject it in store - applyMiddleware(thunk)
     //2. create higher function that take dispatch as a param

     
     export const getMovieSearch = (word) => {
          return async (dispatch) => {
               const res = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=1bc1b530a88739d11b24475d16e9b00d&language=en-US&query=${word}`)
               dispatch({type: ALLMOVIES, data:res.data.results, pages: res.data.total_pages})
          }     
     }

     export const getPage = (page) => {
          return async (dispatch) => {
               const res = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=1bc1b530a88739d11b24475d16e9b00d&language=en-US&page=${page}`)
               dispatch({type: ALLMOVIES, data:res.data.results, pages: res.data.total_pages})
          }     
     }