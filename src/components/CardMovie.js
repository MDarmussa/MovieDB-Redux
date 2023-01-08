import React from 'react'
import { Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'


function CardMovie({ movi }) {
  return (
    <Col xs="6" sm="6" md="4" lg="3" className='my-1'>
          <Link to={`/movie/${movi.id}`}>
               <div className='card'>
                    <img src={`https://image.tmdb.org/t/p/w500/`+movi.poster_path} className='card__image' alt='anything' />
                    <div className='card__overlay'>
                         <div className='overlay__text text-center w-100 p-2'>
                              <p>Movie Name: {movi.original_title}</p>
                              <p>Release Date: {movi.release_date}</p>
                              <p># of Reviews: {movi.vote_count}</p>
                              <p>Review: {movi.vote_average}</p>
                         </div>
                    </div>
               </div>
          </Link>
    </Col>
  )
}

export default CardMovie