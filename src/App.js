import axios from 'axios'
import React from 'react'
import Movie from './Movie'
import "./App.css"

class App extends React.Component{

state = {
  isLoading : true,
  movies: []

}
getMovies = async () =>{
  const {
    data: {
      data:{movies}
    }
  } = await axios.get('https://yts.mx/api/v2/list_movies.json?sort_by=rating')
  console.log(movies)
  // const movies 
  // console.log(movies)
  this.setState({movies, isLoading:false})
}
componentDidMount(){
 this.getMovies()
  // setTimeout(() => {this.setState({isLoading : false})
  // },6000)
}
render(){
  const{isLoading,movies} = this.state
  return(
    <section className='container'>
      {isLoading ?(
        <div className='loader'>
          <span className='Loader-text'>Loading...</span>
        </div>
      )
    
     :(
      <div className='moives' >
        {
           movies.map((movie) => {
            console.log(movie)
            return (
             <Movie 
             key = {movie.id}
             id = {movie.id}
             year = {movie.year}
             title = {movie.title}
             summary = {movie.summary}
             poster = {movie.medium_cover_image}
             genres ={movies.genres}
             />
             )})}
      </div>
     ) }
    </section>
  )
}

}

export default App