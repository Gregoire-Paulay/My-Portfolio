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
import tripadvisor from "../assets/tripadvisor.png";
import vinted from "../assets/vinted.png";
import deliveroo from "../assets/deliveroo.png";

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
          <a href="#contacts">Contacts</a>
        </nav>

        <img src={hero} alt="Bannière classique" />

        <section id="description">
          <div>
            <img src={photo} alt="Ma PP" />
            <h2>Grégoire Paulay</h2>
          </div>
          <div>
            <h3>À propos de moi</h3>
            <p>
              Ancien géologue spécialisé dans le littoral qui à décider il y a
              plusieurs mois de se reconvertir dans le monde incroyable du
              développement web et mobile.
            </p>
            <p>
              Je suis actuellement en formation chez
              <a href="https://www.lereacteur.io"> Le Reacteur</a> pour une
              formation intensive d'un peu plus de 10 semaine qui à commencer le
              17 Juillet 2023 et se terminera le 04 Octobre 2023.
            </p>
            <p>
              Ce bootcamp intensif m'a permis d'acquérir des compétences solides
              en développement fullstack. J'ai pu apprendre à maitriser
              Javascripte, Node.js, React et MongoDB. Grâce à une pédagogie axée
              sur la pratique, j'ai développé une base solide pour concevoir et
              déployer des applications web et mobiles. Le programme m'a
              également outillé pour résoudre des problèmes complexes, me
              concentrer en premier lieu sur le fonctionnel et m'adapter
              rapidement aux évolutions technologiques.
            </p>
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
            </div>
          </div>
          <div>
            <p>
              Les technologies sur lesquelles je me forme actuellement / vais me
              former
            </p>
            <div>
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
          <p onClick={handleNavigate}>Cliquer pour plus d'infos</p>
          <div>
            <img src={tripadvisor} alt="projet" onClick={handleNavigate} />
            <img src={deliveroo} alt=" projet" onClick={handleNavigate} />
            <img src={vinted} alt=" projet" onClick={handleNavigate} />
          </div>
        </section>
        <section id="influence">
          <h2>Les influences qui me divertisse et m'inspire</h2>
        </section>
        <section id="contacts">
          <h2>Contactez-moi</h2>
          <div>
            <i className="fa-solid fa-envelope"></i>
          </div>
          <div>
            <i className="fa-brands fa-linkedin"></i>
          </div>
          <div>
            <i className="fa-brands fa-github"></i>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Home;
