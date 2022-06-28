import React from 'react'
import Movie from '../Movie'

export default function MoviesList(props) {
  return (
    <>
      <ul>
      {props.movies.map((key,i) =>(
            <Movie key={i} title={i.title} release={i.releaseDate} openingText={i.openingText} />
        ))
        } 
      </ul>
    </>
  )
}