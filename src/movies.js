import React from 'react'
import  { useState, useEffect } from 'react'


import Film from '../src/components/Film'
const Movies = (props) => {
  useEffect(() => {
    console.log('props is -->'+props)
  }, []);
    return ( 
        <div className="film-holder">
              {/*-------------------------  */}
               
                {props.movies.map(film => (
                  <Film movie={film}  key={film.id} />
                ))}
               

              {/*-------------------------  */}
            </div>
     );
}
 
export default Movies;

