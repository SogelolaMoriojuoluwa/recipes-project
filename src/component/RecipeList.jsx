import { useEffect, useState } from "react"

function RecipeList() {
  const [recipes, setRecipes] = useState([])
  const [buttonText, setButton] = useState({})

  useEffect(() =>{
    fetch("https://dummyjson.com/recipes")
  .then((response) => response.json())
  .then((result) => {
    console.log(result)
    setRecipes(result.recipes)
  })
    
  }, [])
  
  const handleButton = (id) =>{
      setButton((prevText) => ({
        ...prevText,
        [id]: !prevText[id]
      }))
  }
  

  return (
    <>
    <section className="">
    <div className="container p-3">
      <div className="row gy-4">
      
        {recipes.map((recipe) => (
         <div key={recipe.id} className="col col-lg-4 col-md-6 col-sm-12">
          <div className="card shadow">
          <img src={recipe.image} alt="Recipe image" className="card-img-top"  style={{ height: "200px", objectFit: "cover" }}/>

          <div className="card-body">
          <h6>Name: {recipe.name}</h6>
          <p>Meal Time: {recipe.mealType}</p>
         
          <p>Cuisine: {recipe.cuisine}  <span className="float-end">{recipe.rating}</span></p>
          
          <button className="btn btn-secondary mb-2" type="button" data-bs-toggle="collapse" data-bs-target={`#collapseExample${recipe.id}`} aria-expanded= {buttonText[recipe.id] || false} aria-controls={`#collapseExample${recipe.id}`} onClick={() => handleButton(recipe.id)}
          >
          {buttonText[recipe.id] ? "Hide ingredients" : "Show ingredients"}
            </button>
            <div className="collapse" id= {`collapseExample${recipe.id}`}>
              <div className="card card-body">
                <ul>
                  {recipe.ingredients.map((ingredient,index) => (
                      <li key={index}>{ingredient}</li>
                  ))}
                </ul>
               
              </div>
              </div>
          </div>
          </div>
         </div> 
       
       
     
      ))}
      </div>     
    </div>
    </section>
  
    </>
   
  )
}


export default RecipeList
