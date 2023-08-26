import { useState } from "react";

//import de mes images
import hero from "../assets/computer.jpeg";
import photo from "../assets/Photo.jpg";

const Home = ({ darkMode }) => {
  return (
    <main className={darkMode ? "dark" : "light"}>
      <div className="container">
        <nav>
          <a href="#description">À propos de moi</a>
          <a href="#formation">Formation</a>
          <a href="#project">Projets</a>
          <a href="#influence">Mes influences</a>
          <a href="contacts">Contacts</a>
        </nav>

        <img src={hero} alt="Bannière classique" />

        <section id="description">
          <div>
            <img src={photo} alt="Ma photo" />
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
        <section id="formation">Formation</section>
        <section id="project">Projets</section>
        <section id="influence">influenceurs</section>
        <section id="contacts">Contacts</section>
      </div>
    </main>
  );
};

export default Home;
