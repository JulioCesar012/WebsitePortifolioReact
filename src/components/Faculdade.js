import logoFaculdade from '../assets/img/logo_faculdade.png';

const Faculdade = () => {
    return (
      <div className="faculdade" id="faculdade">
        <div className="divider anime-opacity" data-aos="fade">
          <span></span>
          <span>
            <div className="title">
              <div className="typing">
                $<div className="cd magenta">cd</div>
                <div className="yellow">Facul</div>
              </div>
            </div>
          </span>
          <span></span>
        </div>
  
        <div className="faculdade-article anime" data-aos="zoom-in-up">
          <div className="faculdade-contact">
            <div className="img">
              <img
                src={logoFaculdade}
                alt="Anhanguera"
                title="Faculdade Anhanguera"
              />
            </div>
  
          </div>
          <div className="faculdade-text">
            <div className="text">
              Em 2021 iniciei um Bacharel em <span>Engenharia de Software </span> pela universidade
              {" "} <a href="https://www.anhanguera.com"> Anhanguera </a> do estado de São Paulo.{" "}
              Um curso voltado para <span> projetar, estruturar e desenvolver</span> um <span>Software</span>. 
              Esse tipo de profissional pode ajudar a empresa a alvancar seus negócios digitais trazendo melhorias
              e <span>idéias inovadoras</span>. Por isso escolhi essa faculdade. Visando o momento profissional, essa é
              a área que pretendo atuar em breve dentro da <span>TI</span>.
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Faculdade;
  