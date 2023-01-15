import NavBar,{Footer} from '../Components/Nav-Footer/Nav-Footer';
import Home from '../Components/Home/Home';
import AboutMe from './About-Contact/About';




function Container() {

   return (
         <div className="Container">
            <NavBar />
            <Home/>
            <AboutMe/>
            <Footer/>
         </div>
      
   );
}

export default Container;