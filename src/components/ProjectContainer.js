import About from "./About";
import Study from "./Study";
import Projects from "./Projects";
import Faculdade from "./Faculdade";

const ProjectContainer = () => {
  return (
    <div className="projects" id="projects">
      <div className="divider anime-opacity" data-aos="fade">
        <span></span>
        <span>
          <div className="title">
            <div className="typing">
              $<div className="cd magenta">cd</div>
              <div className="yellow">Projetos</div>
            </div>
          </div>
        </span>
        <span></span>
      </div>

      <Projects />
      <Study />
      <Faculdade />
      <About />
    </div>
  );
};

export default ProjectContainer;
