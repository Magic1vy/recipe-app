import { useEffect, useState } from 'react';
import video from "./bg.mp4";
import search from './search.png';
import './App.css';
import MyRecipesComponent from './MyRecipesComponent';

function App() {
    const MY_ID="b8b5141a";
    const MY_KEY="bc4b9d4e0406ca7de976d1ae97565a1b";


    const [mySearch, setMySearch] = useState("")
    const [myRecipe, setMyRecipe] = useState([])
    const [wordSubmitted, setWordSubmitted] = useState("")


    const myRecipeSearch = (e) => {
      setMySearch(e.target.value);
    }

    const finalSearch = (e) => {
      e.preventDefault();
      setWordSubmitted(mySearch);
    }


    useEffect ( ()=> {
      const getResponse = async () => { 
      const response = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${wordSubmitted}&app_id=${MY_ID}&app_key=${MY_KEY}`);
      const data = await response.json();
      setMyRecipe(data.hits);
    }
    getResponse()
  }, [wordSubmitted])


  return (
    <div className='App'>
<div className='container'>
<video  autoPlay muted loop>
  <source src={video} type= "video/mp4"/>
</video>
<h1>Find a Recipe</h1>
</div >

<div className='container'> 
<form onSubmit={finalSearch}>
  <input className='search' placeholder='Search...' onChange={myRecipeSearch} value={mySearch} />
</form>
  <button onClick={finalSearch}><img src={search} className="icons" alt="icon"/> </button>
</div>
<div>
  {myRecipe.map( (item, index) => (
    <MyRecipesComponent key={index}
    label  = {item.recipe.label}
    dishTipe = {item.recipe.dishType}
    mealType = {item.recipe.mealType}
    image = {item.recipe.image}
    calories = {item.recipe.calories}
    ingradients = {item.recipe.ingredientLines}/>
    
  ))}
</div>
    </div>

  );
}

export default App;
