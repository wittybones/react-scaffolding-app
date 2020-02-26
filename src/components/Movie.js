import React from 'react'

const Movie = (({ Title, Year, Type, Poster, Genre, Released, Runtime }) => {
  return <div className="card" >
    <img className="card-img-top" src={Poster} alt="Card image cap" />
    <div className="card-body">
      <div className="card-title title font-weight-bold">{Title}</div>
      <div className="card-title font-weight-light">{Genre}</div>
      <div className="card-title font-weight-light">{Year}</div>
      <div className="card-title font-weight-light">{Type}</div>
      <div className="card-title font-weight-light">{Released}</div>
      <div className="card-title font-weight-light">{Runtime}</div>
    </div>
  </div>

})

export default Movie;
