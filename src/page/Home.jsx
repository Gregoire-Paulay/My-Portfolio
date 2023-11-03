import { useNavigate } from "react-router-dom";

//import de mes images
import hero from "../assets/computer.jpeg";
import photo from "../assets/Photo.jpg";
import html from "../assets/html.png";
import css from "../assets/css.png";
import js from "../assets/javascript.png";
import node from "../assets/node-js.png";
import mongo from "../assets/mongodb.png";
import react from "../assets/react.png";
import typescript from "../assets/typescript.png";

// import de mon data.json
import data from "../assets/data/data.json";

const Home = ({ darkMode }) => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/projects");
  };

  return (
    <main className={darkMode ? "dark" : "light"}>
      <div className="container">
        <nav>
          <a href="#description">À propos de moi</a>
          <a href="#formation">Formation</a>
          <a href="#project">Projets</a>
          <a href="#influence">Mes influences</a>
        </nav>

        <img src={hero} alt="Bannière classique" />

        <section id="description">
          <div>
            <img src={photo} alt="Ma PP" />
            <h2>Grégoire Paulay</h2>
          </div>
          <div>
            <h3>À propos de moi</h3>
            <div className="details">
              <div>
                <p>
                  Ancien géologue spécialisé dans le littoral qui à décider il y
                  a plusieurs mois de se reconvertir dans le monde incroyable du
                  développement web et mobile.
                </p>
                <p>
                  Je viens de terminez ma formation chez
                  <a href="https://www.lereacteur.io"> Le Reacteur</a> et suis
                  actuellement à la recherche d'un stage de 6mois pour obtenir
                  mon titre RNCP lié à cette formation.
                </p>
                <p>
                  Ce bootcamp intensif m'a permis d'acquérir des compétences
                  solides en développement fullstack. J'ai pu apprendre à
                  maitriser Javascripte, Node.js, React et MongoDB. Grâce à une
                  pédagogie axée sur la pratique, j'ai développé une base solide
                  pour concevoir et déployer des applications web et mobiles. Le
                  programme m'a également outillé pour résoudre des problèmes
                  complexes, me concentrer en premier lieu sur le fonctionnel et
                  m'adapter rapidement aux évolutions technologiques.
                </p>
              </div>
              <div>
                <h4>Me contacter</h4>
                <div>
                  <i className="fa-solid fa-envelope"></i>
                  <span>gregoirepaulay.pro@gmail.com</span>
                </div>
                <div>
                  <i className="fa-brands fa-linkedin"></i>
                  <span>
                    <a href="https://www.linkedin.com/in/grégoire-paulay-142384285/">
                      https://www.linkedin.com/
                    </a>
                  </span>
                </div>
                <div>
                  <i className="fa-brands fa-github"></i>
                  <span>
                    <a href="https://github.com/Gregoire-Paulay">
                      https://github.com/
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="formation">
          <h2>Formation</h2>
          <div>
            <p>Les technologies sur lesquelles je suis formées</p>
            <div>
              <a href="https://developer.mozilla.org/fr/docs/Web/HTML">
                <img src={html} alt="Logo HTML" />
              </a>
              <a href="https://developer.mozilla.org/fr/docs/Learn/Getting_started_with_the_web/CSS_basics">
                <img src={css} alt="Logo CSS" />
              </a>
              <a href="https://www.javascript.com/">
                <img src={js} alt="Logo JS" />
              </a>
              <a href="https://nodejs.org/fr">
                <img src={node} alt="Logo Node-JS" />
              </a>
              <a href="https://www.mongodb.com/fr-fr">
                <img src={mongo} alt="Logo MongoDB" className="mongo" />
              </a>
              <a href="https://react.dev/">
                <img src={react} alt="Logo React" />
              </a>
              <a href="https://www.typescriptlang.org/">
                <img src={typescript} alt="Logo TS" />
              </a>
            </div>
          </div>
        </section>

        <section id="project">
          <h2>Projets</h2>
          {/* <p onClick={handleNavigate}>Cliquer pour plus d'infos</p> */}
          <div onClick={handleNavigate}>
            <img
              src="https://res.cloudinary.com/dy2ayuond/image/upload/v1697725465/Vinted-gp.png"
              alt=" projet"
            />
            <img
              src="https://res.cloudinary.com/dy2ayuond/image/upload/v1697725698/airbnb_utohhu.png"
              alt=" projet"
            />
            <img
              src="https://res.cloudinary.com/dy2ayuond/image/upload/v1697817771/Marvel/Home.png"
              alt=" projet"
            />
            <img
              src="https://res.cloudinary.com/dy2ayuond/image/upload/v1699016062/PokéInfo-Home.png"
              alt=" projet"
            />
          </div>
        </section>

        <section id="influence">
          <h2>Les influences qui me divertisse et m'inspire</h2>
          <div>
            {data.map((data) => {
              console.log(data);
              return (
                <a href={data.link} key={data.name}>
                  <p>{data.name}</p>
                  <img src={data.picture} alt={data.name} />
                  <p>{data.domain}</p>
                </a>
              );
            })}
          </div>
        </section>

        <section className="recruit">
          <h2>Recrutez-moi</h2>
          <p>
            Si ce que vous avez vu à retenu votre attention n'hésitez pas à me
            contacter via un de mes réseaux, je serais disponible dès le 05
            Octobre 2023.
          </p>
          <div>
            <i className="fa-solid fa-envelope"></i>
            <span>gregoirepaulay.pro@gmail.com</span>
          </div>
          <div>
            <i className="fa-solid fa-phone"></i>
            <span>06 23 29 73 02</span>
          </div>
          <div>
            <i className="fa-brands fa-linkedin"></i>
            <span>
              <a href="https://www.linkedin.com/in/grégoire-paulay-142384285/">
                https://www.linkedin.com/
              </a>
            </span>
          </div>
          <div>
            <i className="fa-brands fa-github"></i>
            <span>
              <a href="https://github.com/Gregoire-Paulay">
                https://github.com/
              </a>
            </span>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Home;
