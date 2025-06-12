import NavBar from "../component/NavBar"
import Footer from "../component/Footer"
import '../assets/AboutPage.css'

 function AboutPage() {
  return (
    <>
    <NavBar />
    <section className="about">
         <div className='container p-5 mt-5 '>
      <h4>About Us</h4>
      <p>
      Welcome to Emmy's Recipe, your ultimate destination for delicious, easy-to-follow recipes that bring joy to every kitchen.
    </p>
    <p>We're here to make your time in the kitchen more fun, flavorful, and fulfilling. Whether you're cooking for one, feeding a family, or hosting a dinner party, you'll find inspiration, guidance, and community right here.</p>
    <p>Whether you're a seasoned chef or just starting your culinary journey, our mission is to make cooking approachable, enjoyable, and rewarding. We believe that great meals start with simple ingredients, a little creativity, and a lot of love.</p>
    <hr />
    <h5>Our Mission</h5>
    <p>To inspire confidence and creativity in every home cook.
    We believe everyone can cook with the right support, ingredients, and a bit of encouragement. Our goal is to empower people to make meals they're proud of regardless of their skill, level or kitchen size.
    </p>
    <hr />
    <h5>What you'll find here</h5>
    <ul>
      <li>Recipe based on their difficulty or level.</li>
      <li>Get recipes that are suitable for either breakfast, lunch or dinner.</li>
      <li>Learn how to shop for, store, and cook with fresh, seasonal, or unique ingredients. </li>
      <li>Step-by-Step guides on how to prepare each recipes.</li>
      <li>Find recipe that are easy to cook and their calories per serving.</li>
      <li>Discover recipe from around the world with authenticity and respect.</li>
    </ul>
    <hr />
    <h5> Why We Love What We Do</h5>
    <p>Food brings people together. It's more than sustenance it's culture, comfort, celebration, and connection. We're honored to be part of your cooking journey and strive to make every visit to our site a helpful, tasty experience.</p>
    </div>
    
    </section>
   
    <Footer />
    </>
  )
}
export default AboutPage