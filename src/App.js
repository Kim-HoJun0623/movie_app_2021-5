import { findRenderedComponentWithType } from "react-dom/test-utils";
import Potato from "./Potato";
const foodLike = [
  {
    id: 1,
    name: "tacoyaki",
    image:"https://d20aeo683mqd6t.cloudfront.net/ko/articles/title_images/000/039/143/original/IMG_5649%E3%81%AE%E3%82%B3%E3%83%92%E3%82%9A%E3%83%BC.jpg?2019&d=750x400"

  },
  {
    id: 2,
    name: "pigmeat",
    image:"http://res.heraldm.com/phpwas/restmb_idxmake.php?idx=507&simg=/content/image/2019/09/27/20190927000594_0.jpg"

  },
  {
    id: 3,
    name: "rice",
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqZZWRIyHxRCTzh93aDrt7inRRh9tRlKYGWw&usqp=CAU"

  }
]
// function renderFood(dish){
//   return (
  
//     <Food name={dish.name} picture={dish.image}/>
//   )
// }
// const renderFood = dish => <Food name={dish.name} picture={dish.image}/>

function App() {
  return (
    <div>
      {/* <h1>Hello</h1>
      <Food fav="Kimchi" />
      <Potato fav="potato"/> */}
      {
        foodLike.map( dish =>(<Food  key ={dish.id} name={dish.name} picture={dish.image}/>))
        
      }
    </div>
  );
}



function Food({name,picture}){
  
  
  return(
    <div>
     <h1>I like {name}</h1>
     <img src={picture} alt={name}/>
     
  </div>
  )
  
 
}
export default App;
