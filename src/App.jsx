
import RecipeList from "./component/RecipeList"
import NavBar from "./component/NavBar"
import Header from "./component/Header"
import Footer from "./component/Footer"

function App() {


  return (
    <>
    <NavBar/>
    <Header/>
    <RecipeList text="Discover Simple, Delicious and the Best Recipes"  />
    <Footer />
     
    </>
  )
}

export default App
