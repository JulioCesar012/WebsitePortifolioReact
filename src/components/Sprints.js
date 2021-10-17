const Sprints = () => {
  return (
    <div
      className="overview"
      id="overview"
      data-aos="fade"
      data-aos-duration="900"
    >
      <div className="title anime-opacity">
        <div className="typing" data-aos="fade-up">
          <span className="white">$ </span>
          <span className="magenta">cat </span>
          <span className="yellow">Julio.json</span>
        </div>
      </div>

      <div className="bar anime-opacity"></div>
      <div className="divider-overview anime-opacity"></div>

      <div className="julio anime">
        <span className="chave-0">{"{"}</span>

        <span className="line">
          <span className="tab key">"nome"</span>
          <span className="two-point">:</span>
          <span className="value">"Julio Cesar Filho"</span>
          <span className="comma">,</span>
        </span>

        <span className="line">
          <span className="tab key">"estado"</span>
          <span className="two-point">:</span>
          <span className="value">"São Paulo"</span>
          <span className="comma">,</span>
        </span>

        <span className="line">
          <span className="tab key">"idade"</span>
          <span className="two-point">:</span>
          <span className="number">20</span>
          <span className="comma">,</span>
        </span>

        <span className="line">
          <span className="tab key">"email"</span>
          <span className="two-point">:</span>
          <span className="value">"rodriguesjuliocesar145@gmail.com"</span>
          <span className="comma">,</span>
        </span>

        <span className="line">
          <span className="tab key">"github"</span>
          <span className="two-point">:</span>
          <a className="value tooltip" href="https://github.com/JulioCesar012">
            <span className="value">"https://github.com/JulioCesar012"</span>
          </a>
          <span className="comma">,</span>
        </span>

        <span className="line">
          <span className="tab key">"experiências"</span>
          <span className="two-point">:</span>
          <span className="value">"Frontend Developer at Ambar Tech"</span>
          <span className="comma">,</span>
        </span>

        <span className="line">
          <span className="tab key">"formação"</span>
          <span className="two-point">:</span>
          <span className="value">"Fullstack Developer"</span>
          <span className="comma">,</span>
        </span>

        <span className="line">
          <span className="tab key">"última experiência"</span>
          <span className="two-point">:</span>
          <span className="number">[</span>
          <span className="value tooltip">
            "Ambar"
            <span className="tooltiptext">
              <p>
                Empresa de construção civil alienada a tecnologia.Trabalho como
                Dev. Frontend no desenvolvimento de softwares.
              </p>
              <a href="http://ambar.tech" className="link-empresa">
                Confira
              </a>
            </span>
          </span>
          <span className="comma">,</span>
          <span className="value tooltip">
            "AMcom"
            <span className="tooltiptext">
              <p>
                Empresa de tecnologia da informação. Trabalhei como
                Desenvolvedor backend de aplicativos como freelancer.
              </p>
              <a href="https://www.amcom.com.br" className="link-empresa">
                Connfira
              </a>
            </span>
          </span>
          <span className="comma">,</span>
          <span className="value tooltip">
            "Mazzatech"
            <span className="tooltiptext">
              <p>
                Empresa de soluções digitais multinacional. Também atuei como
                dev freela backend.
              </p>
              <a href="https://www.mazza.tech" className="link-empresa">
                Confira
              </a>
            </span>
          </span>
          <span className="comma">,</span>
          <span className="value tooltip">
            "C&G Tecnologia"
            <span className="tooltiptext">
              <p>
                Empresa de solução em nuvem, consultoria em TI e desenvolvimento de software.
              </p>
              <a href="https://cegtecnologia.com.br/site" className="link-empresa">
                Confira
              </a>
            </span>
          </span>
          <span className="number">]</span>
          <span className="comma">,</span>
        </span>

        <span className="line">
          <span className="tab key">"stack"</span>
          <span className="two-point">:</span>
          <span className="number">[</span>
          <span className="value">"React.js"</span>
          <span className="comma">,</span>
          <span className="value">"MERN"</span>
          <span className="comma">,</span>
          <span className="value">"HTML/CSS"</span>
          <span className="number">]</span>
        </span>

        <span className="chave-1">{"}"}</span>
      </div>
    </div>
  );
};

export default Sprints;
