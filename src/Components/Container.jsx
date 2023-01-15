import NavBar,{Footer} from '../Components/Nav-Footer/Nav-Footer';
import Home from '../Components/Home/Home';




function Container() {

   return (
         <div className="Container">
            <NavBar />
            <Home/>
            <Footer/>
         </div>
      
   );
}

export default Container;