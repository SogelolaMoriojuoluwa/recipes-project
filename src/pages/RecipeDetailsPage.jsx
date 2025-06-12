import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import '../assets/RecipeDetailPage.css'
import Footer from '../component/Footer';
import Rating from "../component/Rating"

function RecipeDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    fetch(`https://dummyjson.com/recipes/${id}`)
      .then(res => res.json())
      .then(data => setRecipe(data));
  }, [id]);

  if (!recipe) return <p className='load'>Loading...</p>;

  return (
    <>

    <section className='recipe-detail'>
      <div className="container p-3 ">
        <div>
           <button className="btn btn-secondary mb-3 mt-3 button" onClick={() => navigate(-1)}>← Go Back</button>
        </div>
     <div className='row'>
        <div className='col-lg-4 col-md-12'>
          <div className='recipe-header mb-3'>
            <div >
                <h4 className='recipe-name'>{recipe.name}</h4>
              <div className='d-flex gap-2 '>  
                   <span className='span-name'>
                      Rating:  
                     </span>
                      <Rating rating={recipe.rating} />
               </div>
            </div>
          </div>
          
        </div>
     
        <div className='img-detail col-lg-8 col-md-12'>
          <img src={recipe.image} alt={recipe.name} />
        </div>

     </div>
     
      <div className='mt-4'>
          <p className='span-name'> Difficulty: <span className='title-value'>{recipe.difficulty}</span> </p>
          <p className='span-name'>Cuisine: <span className='title-value'>{recipe.cuisine}</span> </p>
          <p className='span-name'>Meal Type: <span className='title-value'>{recipe.mealType}</span> </p>
          
   
          
      </div>
      
      
      <div className=' table-content p-4 mt-3'>
        <div className='d-flex gap-5'>
          <div className='ms-4'>
              <h6 className='mb-0 pb-0 title-name'>Prep Time:</h6>
              <p className='mt-0 pt-0'>{recipe.prepTimeMinutes}</p>
          </div>
          <div className='ms-5 '>
              <h6 className='mb-0 pb-0 title-name'>Cooking Time:</h6>
              <p className='mt-0 pt-0'>{recipe.cookTimeMinutes}</p>
          </div>
        </div>
       
       <div className='d-flex gap-5'>
          <div className='ms-4'>
              <h6 className='mb-0 pb-0 title-name'>Serving:</h6>
             <p className='mt-0 pt-0 title-value'>{recipe.servings}</p>
          </div>
          <div className='ms-5 ps-3'>
             <h6 className='mb-0 pb-0 title-name'>Calories per serving </h6>
             <p className='mt-0 pt-0 title-value'>{recipe.caloriesPerServing}</p>
          </div>
        </div>
        
      </div>         
      
      <div className='mt-2'>
          <h4 className='title-main'>Ingredients</h4>
      <ul className='list'>
        {recipe.ingredients.map((ing, idx) => (
          <li key={idx} className='title-value'>{ing}</li>
        ))}
      </ul>
      </div>
      
      <div>
      <h4 className='title-main'>Preperation</h4>
      <ol>
        {recipe.instructions.map((instruct,idy) => (
          <li key={idy} className='title-value'>{instruct}</li>
        ))}
      </ol>
    </div>
    </div>
    
    </section>
    <Footer />
    </>
  );
}

export default RecipeDetail;
