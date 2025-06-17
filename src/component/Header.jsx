import { useEffect, useState } from "react"
import '../assets/Header.css'



function Header () {
  const [recipesImg, setrecipesImg] = useState([])
  


  
   const slideTexts = [
    "Explore Global Cuisines and Recipe",
    "Deliciously Easy Recipes",
     "Explore Your Taste Bud With Different Recipes",
    "Food Taste Better When Eaten With Family",
  "Craving Something Light Yet Satisfying",
  "Embark on a global culinary adventure with Ease"
   
  ];
const slideSub = [
  " Get ready to cook, savor, and fall in love with food all over again.",
  "Discover recipes that are stunning on the plate and simple in the kitchen.",
    "Indulge your sweet tooth with desserts that are as dreamy as they are delicious.",
  "Enjoy everyday eating different dishes with family.",
  "Dive into our collection of garden-fresh recipes bursting with seasonal goodness.",
  "Whether you're craving comfort or adventure, we've got something delicious in store."
]
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
        
          <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel"  >
  <div className="carousel-inner">
   
    
      
          {recipesImg.slice(0, 6).map((recipe, index) => (
            <div
              className= {`carousel-item ${index === 0 ? "active" : ""} `}  
              key={recipe.id}
            >
              <img
                src={recipe.image}
                className="d-block w-100 img"
                alt={recipe.name}
              />
            
            <div>               
               <div className="carousel-caption ">                
                   <h3 className="slide-text">{slideTexts[index]}</h3>
                   <p className="slide-sub">{slideSub[index]}</p>
              </div>
              {/* <button className="arrow animated infinite bounce" >
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-arrow-down-square-fill" viewBox="0 0 16 16">
                    <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm6.5 4.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5a.5.5 0 0 1 1 0"/>
                    </svg>
              </button> */}
             
              </div>
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