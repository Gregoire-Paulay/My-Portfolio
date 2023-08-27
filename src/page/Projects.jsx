import tripadvisor from "../assets/tripadvisor.png";
import vinted from "../assets/vinted.png";
import deliveroo from "../assets/deliveroo.png";
import airbnb from "../assets/airbnb.png";

const Projects = ({ darkMode }) => {
  return (
    <main className={darkMode ? "dark" : "light"}>
      <div className="container">
        <div className="my-Project">
          <h2>Mes projets</h2>
          <p>
            Voici une liste des projets réalisé au cours de ma formation, ainsi
            que les projets à venir
          </p>
          <h3>Projets terminés</h3>
          <section className="finished">
            <div>
              <a href="https://tripadvisor-gp.netlify.app">
                <img src={tripadvisor} alt="tripadvisor" />
              </a>

              <div>
                <h4>Tripadvisor Web</h4>
                <h5>Projet Front-End</h5>
                <p>
                  <i className="fa-solid fa-square"></i>Envoi automatisé de
                  mails
                </p>
                <p>
                  <i className="fa-solid fa-square"></i>Carousel de photos
                </p>
                <p className="github">
                  <i className="fa-brands fa-github"></i>
                  <a href="https://github.com/Gregoire-Paulay/Tripadvisor-Integration">
                    Répertoire Github
                  </a>
                </p>
              </div>
            </div>

            <div>
              <a href="https://deliveroo-gp.netlify.app">
                <img src={deliveroo} alt="deliveroo" />
              </a>
              <div>
                <h4>Deliveroo Web</h4>
                <h5>Projet Front-End</h5>
                <p>
                  <i className="fa-solid fa-square"></i>Récupération de données
                </p>
                <p>
                  <i className="fa-solid fa-square"></i>Panier de commande
                </p>
                <p className="github">
                  <i className="fa-brands fa-github"></i>
                  <a href="https://github.com/Gregoire-Paulay/Deliveroo-frontend">
                    Répertoire Github
                  </a>
                </p>
              </div>
            </div>
          </section>

          <h3>Projets en cours</h3>
          <section className="building">
            <div>
              <a href="https://vinted-front-gp.netlify.app">
                <img src={vinted} alt="vinted" />
              </a>
              <div>
                <h4>Vinted Web</h4>
                <h5>Projet Full-Stack</h5>
                <p>
                  <i className="fa-solid fa-square"></i>Inscription / Connexion
                </p>
                <p>
                  <i className="fa-solid fa-square"></i>Récupération de données
                </p>
                <p>
                  <i className="fa-solid fa-square"></i>Publication d'annonces
                </p>
                <p>
                  <i className="fa-solid fa-square"></i>Barre de recherche
                </p>
                <p>
                  <i className="fa-solid fa-square"></i>Paiement
                </p>
                <p>
                  <i className="fa-solid fa-square"></i>Upload de Photo
                </p>
                <p className="github">
                  <i className="fa-brands fa-github"></i>
                  <a href="https://github.com/Gregoire-Paulay/Vinted-Front">
                    Répertoire Github Front-End
                  </a>
                </p>
                <p className="github">
                  <i className="fa-brands fa-github"></i>
                  <a href="https://github.com/Gregoire-Paulay/Vinted-BackEnd">
                    Répertoire Github Back-End
                  </a>
                </p>
              </div>
            </div>
          </section>

          <h3>Projets à venir</h3>
          <section className="coming-soon">
            <div>
              <a href="#">
                <img src={airbnb} alt="airbnb" />
              </a>
              <div>
                <h4>Airbnb Mobile</h4>
                <h5>Projet Full-Stack</h5>
                <p>
                  <i className="fa-solid fa-square"></i>Inscription / Connexion
                </p>
                <p>
                  <i className="fa-solid fa-square"></i>Modification du profil
                  utilisateur
                </p>
                <p>
                  <i className="fa-solid fa-square"></i>Affichage de cartes
                </p>
                <p>
                  <i className="fa-solid fa-square"></i>Géolocalisation
                </p>
                <p>
                  <i className="fa-solid fa-square"></i>Accès à la galerie
                  d'images
                </p>
                <p>
                  <i className="fa-solid fa-square"></i>Accès à l'appareil photo
                </p>
                <p className="github">
                  <i className="fa-brands fa-github"></i>
                  <a href="https://github.com/Gregoire-Paulay/">
                    Répertoire Github
                  </a>
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
};

export default Projects;
