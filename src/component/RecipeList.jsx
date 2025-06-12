import { useEffect, useState } from "react"
// import { Helmet } from "react-helmet"
import Rating from "../component/Rating"
import '../assets/RecipeList.css'
import { useNavigate } from 'react-router-dom';
import 'animate.css';
import AOS from 'aos';
import 'aos/dist/aos.css';




function RecipeList() {
  const [recipes, setRecipes] = useState([]);
  const [buttonText, setButton] = useState({});
  const [searchQuery, setSearchQuery] = useState('');
  const [difficultyFilter, setDifficultyFilter] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const navigate = useNavigate();
  


  useEffect(() =>{
     AOS.init({
    duration: 1000, 
    once: true,     
    
  });
    fetch('https://dummyjson.com/recipes?limit=50')
  .then((response) => response.json())
  .then((result) => {
    console.log(result)
    const filtered = result.recipes.filter(recipe =>
        recipe.name.toLowerCase().includes(searchQuery.toLowerCase())&&
        (difficultyFilter ? recipe.difficulty === difficultyFilter : true)
      );
    setRecipes(filtered)
    setTotalPages(Math.ceil(filtered.length / limit));
    setCurrentPage(1);
  })
    
  }, [searchQuery, difficultyFilter])


  
  const handleButton = (id) =>{
      setButton((prevText) => ({
        ...prevText,
        [id]: !prevText[id]
      }))
  }
  
const limit = 10;
const paginatedRecipes = recipes.slice((currentPage - 1) * limit, currentPage * limit);
  return (
    <>
      {/* <Helmet>
      <meta charSet="utf-8" />
                <title>Recipes</title>
                <link rel="canonical" href="https://recipes-project-rho.vercel.app/" />
      </Helmet> */}
    <section className="recipe-list">
    <div className="container p-3">
      <h4 className="heading">Discover Simple, Delicious and the Best Recipes</h4>
      
       <div className="d-flex flex-lg-row flex-sm-column justify-content-lg-between">

          <div className="d-flex mb-3">
            <input className="form-control me-2 search" type="search" placeholder="Search" aria-label="Search" value={searchQuery}
           onChange={(e) => {
            setSearchQuery(e.target.value);
            setCurrentPage(1); 
  }}/>
            
          </div>

          <div className="d-flex gap-3 mb-3 justify-content-sm-end">
            <div> 
              <p  className="mb-0 mt-2 dif">Difficulty</p>
            </div>
              <button
                  className={`filter-button btn ${difficultyFilter === '' ? 'btn-primary' : 'btn-secondary'}`}
                  onClick={() => setDifficultyFilter('')}
                >
                  All
                </button>

                <button
                  className={`filter-button btn ${difficultyFilter === 'Easy' ? 'btn-primary' : 'btn-secondary'}`}
                  onClick={() => setDifficultyFilter('Easy')}
                >
                  Easy
                </button>

                <button
                  className={`filter-button btn ${difficultyFilter === 'Medium' ? 'btn-primary' : 'btn-secondary'}`}
                  onClick={() => setDifficultyFilter('Medium')}
                >
                  Medium
                </button>

    
          </div>
          
        </div>
      
        <div className="row gy-4 ">
      
      {paginatedRecipes.length === 0 ? (
    <div className="text-center mt-4 text-danger">
      <div className="notfound-img d-flex justify-content-center mt-4">
        <img src="src\assets\undraw_page-eaten_b2rt.svg" alt="" width={230}  height={170}/>
      </div>
      <h4 className="error-message">No recipes found for your search.</h4>
    </div>
  ) : (
        
        paginatedRecipes.map((recipe, index) => (
         <div key={recipe.id} className="col col-lg-4 col-md-6 col-sm-12" data-aos="fade-up" data-aos-easing="ease-in-out"
    data-aos-delay={index * 100}>
          <div className="card shadow ">
            
              <div className="recipe-image">
                <img src={recipe.image} alt="Recipe image" className="card-img-top"  style={{ height: "200px", objectFit: "cover" }}/>
              
                  <p className="cuisine">Cuisine: {recipe.cuisine}</p>
                  <p className="difficulty"> {recipe.difficulty}</p>
              
              </div>
              
              
              

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
      <div className="mt-3 d-flex justify-content-center">
           {Array.from({ length: totalPages }, (_, index) => (
          <button className="btn btn-outline-secondary me-2 filter-button"
            key={index}
            onClick={() => setCurrentPage(index + 1)}
            disabled={currentPage === index + 1}
          >
            {index + 1}
          </button>
        ))}
      </div>
      
        

    </div>
   
    </section>
  
    </>
   
  )
}


export default RecipeList
