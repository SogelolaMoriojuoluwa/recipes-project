
import RecipeList from "./component/RecipeList"
import NavBar from "./component/NavBar"
import Header from "./component/Header"
import Footer from "./component/Footer"
import { Element } from 'react-scroll'

function App() {


  return (
    <>
    <NavBar/>
    <Header/>
    <Element name="Recipe">
     <RecipeList />
    </Element>
   
    <Footer />
     
    </>
  )
}

export default App
