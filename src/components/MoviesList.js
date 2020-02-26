import React from 'react'
import Movie from './Movie'

export default class MoviesList extends React.Component {
  constructor(props) {
    super(props)
    this.state = { movieList: [] }
  }

  componentDidMount() {
    let movies = async () => {
      const movies = await fetch("https://thoughtworksreactreduxmovies.firebaseio.com/movies.json")
      const some = await movies.json()
      this.setState({ movieList: some })
    }
    movies()
  }

  render() {
    return (
      <div className="movies-list">
        {this.state.movieList.map((movie, index) => {
          const { Title, Year, Type, Poster, Genre, Released, Runtime } = movie;
          return <Movie
            key={`movie_${index}`}
            Poster={Poster}
            Title={Title}
            Year={Year}
            Genre={Genre}
            Released={Released}
            Runtime={Runtime}
            Type={Type} />
        })
        }</div>
    )
  }
}
