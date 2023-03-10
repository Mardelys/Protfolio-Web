import "./Home.css";
import {IoRemoveOutline} from 'react-icons/io5'


function Home() {
   return (
      
      <div className="home" id="home">
         <div className="container-info">
            <h3><IoRemoveOutline className="outline"/>Hola</h3>
            <h1 className="title-name">Soy  <b>Mardelys Torres</b></h1>
            <h2> Full stack software developer.</h2>
            <div className="info-center">
               <p>
               Soy un desarrollador de software full-stack capáz de construir y
                  diseñar experiencias digitales excepcionales, cada día ganando
                  experiencia, mejorando constantemente y sin parar de aprender. !Conóceme!
               </p>
               <a target="_blank" href="https://drive.google.com/file/d/1Qbxpa9oDFY0-EC_YkwAAlgPzr0uCVtjt/view"><button className="download-cv">DESCARGAR CV</button></a>
            </div>
         </div>
         <div className="container-photo">
               <img
                  className="img-ejp"
                  src={require("./images/foto.png")}
                  alt=""
               />
            
         </div>
      </div>
   );
}

export default Home;
