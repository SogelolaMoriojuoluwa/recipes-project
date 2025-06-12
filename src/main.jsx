
import { ChakraProvider } from '@chakra-ui/react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import { createBrowserRouter, RouterProvider } from "react-router"


import App from './App.jsx'

// Page
import AboutPage from './pages/AboutPage.jsx'
import ContactPage from './pages/ContactPage.jsx'
import RecipeList from './component/RecipeList.jsx'
import RecipeDetail from './pages/RecipeDetailsPage.jsx'


const router = createBrowserRouter([
  {
    path: '/',
  element: <App /> 
  },
  {
    path: '/about',
    element: <AboutPage/>,
  },
  {
     path: '/contact',
    element: <ContactPage/>,
  },
   {
     path:"/recipelist", 
     element: <RecipeList />,
     },
   {
    path: "/recipe/:id",
    element: <RecipeDetail />
   }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <ChakraProvider>
      <RouterProvider router={router} />
    </ChakraProvider>
   
    
  </StrictMode>,
)
