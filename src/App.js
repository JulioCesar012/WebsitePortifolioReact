import Main from "./page/Main";
import Particles from "./animations/articles";

import AOS from "aos";
import "aos/dist/aos.css";

import "./global/styles.css";
import "./global/styles/Home.css";
import "./global/styles/Sprints.css";
import "./global/styles/Projects_Container.css";
import "./global/styles/Study.css";
import "./global/styles/About.css";
import "./global/styles/Faculdade.css";
import "./global/styles/Progress.css";
import "./global/styles/Menu.css";
import "./global/styles/NameTop.css";
import "./global/styles/Main.css";

import NameTop from "./components/NameTop";

AOS.init({
  disable: false,
  startEvent: "DOMContentLoaded",
  initClassName: "aos-init",
  animatedClassName: "aos-animate",
  useClassNames: true,
  disableMutationObserver: true,
  debounceDelay: 50,
  throttleDelay: 99,

  offset: 120,
  delay: 0,
  duration: 400,
  easing: "ease",
  once: false,
  mirror: false,
  anchorPlacement: "top-bottom",
});

function App() {
  return (
    <div>
      <NameTop />
      <Particles />
      <Main />
    </div>
  );
}

export default App;
