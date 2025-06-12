import { useEffect, useState } from "react"
// import { FaArrowDown } from "react-icons/?fa";
import '../assets/Header.css'


function Header () {
  const [recipesImg, setrecipesImg] = useState([])

   const slideTexts = [
    "Explore Global Cuisines and Recipe",
    "Deliciously Easy Recipes",
     "Explore Your Taste Bud With Different Recipes",
    "Food Taste Better When Eaten With Family",
  "Feel New Experience With Simple and Easy Food You Make",
  "Embark on a global culinary adventure with Ease"
   
  ];
const slideSub = [
  " Get ready to cook, savor, and fall in love with food all over again.",
  "Discover recipes that are stunning on the plate and simple in the kitchen.",
    "Indulge your sweet tooth with desserts that are as dreamy as they are delicious.",
  "Enjoy everyday eating different dishes with family.",
  "Who says easy can't be elegant? Discover recipes that are stunning on the plate and simple in the kitchen.",
  "Whether you're craving comfort or adventure, we’ve got something delicious in store."
  
  

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
        <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel"  data-bs-interval="10000">
  <div className="carousel-inner">
    {/* <i class="bi bi-arrow-down"></i> */}
      
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
                    {/* <div className="arrow">
                         <FaArrowDown />
                    </div> */}
              </div>
              
             
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