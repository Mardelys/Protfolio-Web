import NavBar,{Footer} from '../Components/Nav-Footer/Nav-Footer';
import Home from '../Components/Home/Home';
import AboutMe from './About-Contact/About';
import Contact from './About-Contact/Contact'
import RenderProjects from './Projects/ContainerProjects';



function Container() {

   return (
         <div className="Container">
            <NavBar />
            <Home/>
            <AboutMe/>
            <RenderProjects/>
            <Contact/>
            <Footer/>
         </div>
      
   );
}

export default Container;