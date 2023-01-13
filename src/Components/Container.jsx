import react,{useState} from 'react'
import NavBar from '../Components/Nav-Footer/Nav';
import Home from '../Components/Home/Home';




function Container() {
   const [isLight, setIsLight] = useState(false)
   return (
         <div className={`Container ${isLight && "light"}`}>
            <NavBar />
            <Home/>
         </div>
      
   );
}

export default Container;