import { useEffect, useState } from "react"
// import { Helmet } from "react-helmet"
import Rating from "../component/Rating"
import '../assets/RecipeList.css'
import { useNavigate } from 'react-router-dom';
import ErrorImage from '../assets/image/errorimage.svg'


import AOS from 'aos';
import 'aos/dist/aos.css';
import PaginatedList from "./PaginatedList";




function RecipeList () {
  const [recipes, setRecipes] = useState([]);
  const [buttonText, setButton] = useState({});
  const [searchQuery, setSearchQuery] = useState('');
  const [difficultyFilter, setDifficultyFilter] = useState('');
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true)
  const [pageNumber, setPageNumber] = useState([]);


  useEffect(() =>{
     AOS.init({
    duration: 1000, 
    once: true,     
    
  });
  
  try{
    setIsLoading(true)
     fetch('https://dummyjson.com/recipes?limit=50')
  .then((response) => response.json())
  .then((result) => {
    // console.log(result)
    const filtered = result.recipes.filter(recipe =>
        recipe.name.toLowerCase().includes(searchQuery.toLowerCase())&&
        (difficultyFilter ? recipe.difficulty === difficultyFilter : true)
      );
    setRecipes(filtered)
    
  })
  }
  catch(error){
    setIsLoading(false)
  }finally{
    setIsLoading(false)
  }
   
    
  }, [searchQuery, difficultyFilter])

  
  const handlePage = (data) => {
    // Only update if data is different to prevent infinite loop
    if (JSON.stringify(pageNumber) !== JSON.stringify(data)) {
      setPageNumber(data);
    }
  }
  
  const handleButton = (id) =>{
      setButton((prevText) => ({
        ...prevText,
        [id]: !prevText[id]
      }))
  }
  

  return (
    <>
      {/* <Helmet>
      <meta charSet="utf-8" />
                <title>Recipes</title>
                <link rel="canonical" href="https://recipes-project-rho.vercel.app/" />
      </Helmet> */}
    <section className="recipe-list" >
    <div className="container p-3">
      <h4 className="heading mt-5 mb-3 pt-4">Discover Simple, Delicious and the Best Recipes</h4>
         
       <div className="row">

         <div className="col-lg-6 col-md-12 mb-2">
          {/* Search Input */}
            <input className="form-control me-2 search" id="search" type="search" placeholder="Search" aria-label="Search" value={searchQuery}
           onChange={(e) => {
            setSearchQuery(e.target.value);
            // setCurrentPage(1); 
  }}/>
            
          </div>

          <div className="col-lg-6 col-md-12">
            {/* Filtered Button */}
            <div className="d-flex gap-3 mb-3 justify-content-sm-end">
            <div> 
              <p  className="mb-0 mt-1 dif">Difficulty</p>
            </div>
              <button
                  className={`filter-button btn ${difficultyFilter === '' ? 'btn-warning' : 'btn-secondary'}`}
                  onClick={() => setDifficultyFilter('')}
                >
                  All
                </button>

                <button
                  className={`filter-button btn ${difficultyFilter === 'Easy' ? 'btn-warning' : 'btn-secondary'}`}
                  onClick={() => setDifficultyFilter('Easy')}
                >
                  Easy
                </button>

                <button
                  className={`filter-button btn ${difficultyFilter === 'Medium' ? 'btn-warning' : 'btn-secondary'}`}
                  onClick={() => setDifficultyFilter('Medium')}
                >
                  Medium
                </button>

    
          </div>
          
          </div>
        </div>
      {
        isLoading && ( <div className="spinner-border" role="status">
      <span className="visually-hidden">Loading...</span></div>)
      }
        
      
    
        <div className="row gy-4 ">
      {/* Error Message */}
      {searchQuery && pageNumber.length === 0 ? (
    <div className="text-center mt-4 text-danger">
      <div className="notfound-img d-flex justify-content-center mt-4">
        <img src= {ErrorImage} alt="" width={230}  height={170}/>
      </div>
      <h4 className="error-message">No recipes found for your search.</h4>
    </div>
  ) : (
        // pagination
       pageNumber.map((recipe, index) => (
         <div key={recipe.id} className="col col-lg-4 col-md-6 col-sm-12" data-aos="fade-up" data-aos-easing="ease-in-out"
    data-aos-delay={index * 100}>
          <div className="card shadow ">
            
              <div className="recipe-image">
                <img src={recipe.image} alt="Recipe image" className="card-img-top"  style={{ height: "200px", objectFit: "cover" }}/>
              
                  <p className="cuisine">Cuisine: {recipe.cuisine}</p>
                  <p className="difficulty"> {recipe.difficulty}</p>
              
              </div>
              
              
              
           {/* Display Recipe Card */}
          <div className="card-body">
          <h6 className="card-title"> Name:<span className="card-value"> {recipe.name}</span></h6>
          <p className="card-title">Meal Time: <span className="card-value">{recipe.mealType}</span> </p>           
  
          <div className="d-flex justify-content-between align-items-center">
           <span className="card-title">Ratings:</span>
            <Rating rating={recipe.rating} />
          </div>
          
         
            <div className="d-flex justify-content-between mt-3">
              <div>
                <button className="btn btn-secondary mb-3 filter-button" type="button" data-bs-toggle="collapse" data-bs-target={`#collapseExample${recipe.id}`} aria-expanded= {buttonText[recipe.id] || false} aria-controls={`#collapseExample${recipe.id}`} onClick={() => handleButton(recipe.id)}
                  >
                  {buttonText[recipe.id] ? "Hide ingredients" : "Show ingredients"}
                    </button>
              </div>

              <div>
                  <button className="btn btn-outline-secondary filter-button" type="button" onClick={() => navigate(`/recipe/${recipe.id}`)}>Show more</button>
              </div>
            </div>
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
       
       
     
        )))}
      </div>       
      
                <PaginatedList dataRecipe={recipes} itemPerPage={10} handlePage={handlePage}/>
      
        

    </div>
   
    </section>
  
    </>
   
  )
}


export default RecipeList;
