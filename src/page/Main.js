import Sprints from "../components/Sprints";
import Projects from "../components/ProjectContainer";
import AnchorLink from 'react-anchor-link-smooth-scroll'
import Menu from "../components/Menu";

const Main = () => {

  return (
    <div>
        <Menu />
      <div
        className="home"
        data-aos="fade"
        data-aos-delay="50"
        data-aos-duration="2000"
      >
        <div className="name" id="home">
          <span>
            <span class="light-green">&lt;</span>Julio Filho
            <span class="light-green">/&gt;</span>
          </span>
          <span class="sub-name">
            Desenvolvedor <span>FrontEnd</span>
          </span>
        </div>

        <div className="start anime">
          <AnchorLink href="#overview">
            <button>
              <i class="fas fa-rocket"></i> Start
            </button>
          </AnchorLink>
        </div>
      </div>
      <Sprints />
      <Projects />
    </div>
  );
};

export default Main;
