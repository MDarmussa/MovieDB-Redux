import React, {useEffect, useState} from 'react'
import { Row } from 'react-bootstrap'
import CardMovie from './CardMovie'
import PaginationComponent from './Pagination'
import { useSelector, useDispatch } from "react-redux";
import { getAllMovie } from '../redux/actions/movieAction'


function MoviesList() {

  const[movies, setMovies] = useState([])
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllMovie());
  }, [])

  const dataMovies = useSelector((state) => state.movies);

  useEffect(() => {
    setMovies(dataMovies)
  }, [dataMovies])


  return (
    <Row className='mt-5'>
      {movies.length >= 1 ? (movies.map((movi) =>{
            return (
                <CardMovie key={movi.id} movi={movi} />
            )
      })) : <h2 className='text-center p-5'>No Movies Found...</h2>}
      {movies.length >= 1 ? (<PaginationComponent />) : null}
    </Row>
  )
}

export default MoviesList