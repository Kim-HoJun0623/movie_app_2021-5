import "./App.css"
import {HashRouter, Route} from 'react-router-dom'
import About from './routes/About'
import Home from './routes/Home'

function App(){
  return(
   <HashRouter> 
      <Route path='/home' component={Home}/>
      <Route path='/about' component={About}/>
   </HashRouter>
  )
}

export default App;

 {/* <Route path='/' exact='true'  component={Home} >
        <h1>Home</h1>
        </Route>
      <Route path='/about'  component={About} /> */}