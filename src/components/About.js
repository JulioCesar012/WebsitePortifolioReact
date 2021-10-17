/* eslint-disable react/jsx-no-target-blank */
const About = () => {
  return (
    <div className="about" id="about">
      <div className="divider anime-opacity" data-aos="fade">
        <span></span>
        <span>
          <div className="title">
            <div className="typing">
              $<div className="cd magenta">cd</div>
              <div className="yellow">Sobre</div>
            </div>
          </div>
        </span>
        <span></span>
      </div>

      <div className="about-article anime" data-aos="zoom-in-up">
        <div className="about-contact">
          <div className="img">
            <img
              src="https://avatars.githubusercontent.com/u/50751899?v=4"
              alt="Julio Filho"
              title="Julio Filho"
            />
          </div>

          <div className="contacts">
            <div className="contact">
              <a
                href="https://github.com/JulioCesar012"
                target="_blank"
                title="Github"
              >
                <i className="fab fa-github"></i>
              </a>
            </div>

            <div className="contact">
              <a
                href="mailto:rodriguesjuliocesar145@gmail.com"
                target="_blank"
                title="Email"
              >
                <i className="fas fa-envelope"></i>
              </a>
            </div>

            <div className="contact">
              <a
                href="https://twitter.com/Juliofilho012"
                target="_blank"
                title="Twitter"
              >
                <i className="fab fa-twitter"></i>
              </a>
            </div>

            <div className="contact">
              <a href="https://discord.com/users/JulioCesar#9949" target="_blank">
                <i className="fab fa-discord"></i>
              </a>
            </div>

            <div className="contact">
              <a
                href="https://www.linkedin.com/in/julio-cesar-filho-759653171/"
                title="LinkedIn"
                target="_blank"
              >
                <i className="fab fa-linkedin"></i>
              </a>
            </div>

            <div className="contact">
              <a
                href="https://app.rocketseat.com.br/me/julio-cesar-filho-1567392511"
                target="_blank"
                title="Rocketseat"
              >
                <i className="fas fa-rocket"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="about-text">
          <div className="text">
            <i className="fas fa-quote-left"></i> Meu primeiro contato com a
            programação foi aos 12 anos num pc antigo do meu tio de monitor
            branco, o famoso positivo da época. Passei por diversos cursos do{" "}
            <span> Gustavo Guanabara </span>e aprendi diversos conteúdos sobre{" "}
            <span>HTML,CSS e JavaScript</span>. Após eu conhecer a{" "}
            <span> Rocketseat</span> em 2018, eu me dediquei total a stack
            <span> MERN</span> e desde então venho estudando e trabalhando com
            ela.Recentemente iniciei um bacharel em Engenharia
            de software e estou evoluindo rápido.
            <i className="fas fa-quote-right"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
