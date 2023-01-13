import "./Home.css";

function Home() {
   return (
      
      <div className="home">
         <div>
            <h3>Hello</h3>
            <h1>I'm Mardelys Torres</h1>
            <h2> Full stack software developer.</h2>
            <p>
               I'm a full-stack software developer specializing in building and
               designing exceptional digital experiences. Every day gaining
               experience, constantly improving and not stopping to learn.
            </p>
            <button>Descargar CV</button>
         </div>
         <div className="container-photo">
            <a href="#" className="">
               <img
                  className="img-ejp"
                  src={require("../Nav-Footer/images/Favicon.png")}
                  alt=""
               />
            </a>
         </div>
      </div>
   );
}

export default Home;
