import { useEffect, useState } from "react"

import '../assets/Header.css'

function Header () {
  const [recipesImg, setrecipesImg] = useState([])

  useEffect(() =>{
    fetch("https://dummyjson.com/recipes")
  .then((response) => response.json())
  .then((result) => {
    console.log(result)
   setrecipesImg(result.recipes)
  })
    
  }, [])

    return(
        <>
        <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    
      
          {recipesImg.slice(0, 6).map((recipe, index) => (
            <div
              className={`carousel-item ${index === 0 ? "active" : ""}`}
              key={recipe.id}
            >
              <img
                src={recipe.image}
                className="d-block w-100 img"
                alt={recipe.name}
              />
            </div>
          ))}
     
   
    
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
        
        
        </>
    )
}
export default Header