import projects from "../assets/data/projects.json";

const Projects = ({ darkMode }) => {
  return (
    <main className={darkMode ? "dark" : "light"}>
      <div className="container">
        <div className="my-Project">
          <h2>Mes projets</h2>
          <p>
            Voici une liste des mes projets réalisés, ainsi que ceux en cours
          </p>

          <section className="finished">
            {projects.map((project) => {
              return (
                <div key={project.name}>
                  <a
                    href={project.link ? project.link : project["github-front"]}
                  >
                    <img src={project.picture} alt="Projet" />{" "}
                  </a>

                  <div className="description">
                    <h5>{project.name}</h5>
                    <div>
                      <div>
                        <p className="type">{project.type} :</p>
                        {project.description.map((detail, index) => {
                          return <li key={index}>{detail}</li>;
                        })}
                      </div>

                      <div className="github">
                        {project["github-front"] && (
                          <a href={project["github-front"]}>
                            <i className="fa-brands fa-github"></i>
                            <span>Github Front </span>
                          </a>
                        )}

                        {project["github-back"] && (
                          <a href={project["github-back"]}>
                            <i className="fa-brands fa-github"></i>
                            <span>Github Back</span>
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </section>
        </div>
      </div>
    </main>
  );
};

export default Projects;
