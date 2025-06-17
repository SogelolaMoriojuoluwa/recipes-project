import { Link } from "react-router-dom"
import '../assets/Footer.css'

 function Footer() {
  return (
    <>
    <footer className="bg-dark ">
    <div className="container py-4 text-white footer-content">

      <div className=" d-flex gap-3 justify-content-center">
          <a href="https://www.linkedin.com/in/moriojuoluwa-grace-sogelola-34a887329/" className="text-white" target="_blank">
          <i class="bi bi-linkedin"></i>
        </a>
          <a href="https://github.com/SogelolaMoriojuoluwa" className="text-white" target="_blank">
          <i class="bi bi-github"></i>
        </a>
            <a href="https://x.com/Emm_jay388" className="text-white" target="_blank"> 
            <i class="bi bi-twitter"></i>
          </a>  
       
      </div>
      
      <ul className="d-flex gap-4 justify-content-center list-unstyled mt-2">
         <li>
          <Link className="text-decoration-none text-white" to= '/'>
         Home
        </Link>
        </li>
        <li>
           <Link className="text-decoration-none text-white" to='/about'>
          About
        </Link>
        </li>
        <li>
           <Link className="text-decoration-none text-white" to='/contact'>
          Contact us
        </Link>
        </li>
      </ul>
      
      <p className="text-center ">@2025 Moriojuoluwa | All Right Reserved</p>
    </div>
   </footer>
   
    </>
  )
}
export default Footer