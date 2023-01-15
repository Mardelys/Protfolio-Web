import "./Home.css";
import {IoRemoveOutline} from 'react-icons/io5'


function Home() {
   return (
      
      <div className="home">
         <div className="container-info">
            <h3><IoRemoveOutline className="outline"/>Hello</h3>
            <h1 className="title-name">I'm <b>Mardelys Torres</b></h1>
            <h2> Full stack software developer.</h2>
            <div className="info-center">
               <p>
                  I'm a full-stack software developer specializing in building and
                  designing exceptional digital experiences. Every day gaining
                  experience, constantly improving and not stopping to learn.
               </p>
               <button className="download-cv">DOWNLOAD CV</button>
            </div>
         </div>
         <div className="container-photo">
            <a href="#" className="">
               <img
                  className="img-ejp"
                  src={require("./foto.png")}
                  alt=""
               />
            </a>
         </div>
      </div>
   );
}

export default Home;
