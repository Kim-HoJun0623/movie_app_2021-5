import axios from 'axios'
import React from 'react'

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
  } = await axios.get('https://yts.mx/api/v2/list_movies.json')
  // const movies 
  console.log(movies)
}
componentDidMount(){
 this.getMovies()
  // setTimeout(() => {this.setState({isLoading : false})
  // },6000)
}
render(){
  const{isLoading} = this.state
  return(
    <div>
     <h1>{isLoading ? 'Loading...' : '영화 데이터 출력'}</h1>
    </div>
  )
}

}

export default App