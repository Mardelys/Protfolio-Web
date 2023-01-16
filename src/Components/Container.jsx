import NavBar,{Footer} from '../Components/Nav-Footer/Nav-Footer';
import Home from '../Components/Home/Home';
import AboutMe from './About-Contact/About';
import ContainerProjects from './Projects/ContainerProjects';




function Container() {

   return (
         <div className="Container">
            <NavBar />
            <Home/>
            <AboutMe/>
            <ContainerProjects/>
            <Footer/>
         </div>
      
   );
}

export default Container;