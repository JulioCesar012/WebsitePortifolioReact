/* eslint-disable react/jsx-no-target-blank */
const Study = () => {
  return (
    <div className="study" id="study">
      <div className="divider anime-opacity" data-aos="fade">
        <span></span>
        <span>
          <div className="title">
            <div className="typing">
              $<div className="cd magenta">cd</div>
              <div className="yellow">Estudos</div>
            </div>
          </div>
        </span>
        <span></span>
      </div>

      <div className="study-article anime" data-aos="fade-right">
        <div className="projetos-one">
          <div className="tech react tech-border">
            <div className="tech-title">React.js</div>
            <div className="tech-description">
              Já conhecia desde 2017 o <span>framework</span> porém iniciei os estudos avançados em
              <span> 2018</span> através da rocketseat, desde então vim
              evoluindo e criando
              <span> projetos</span> práticos. O React é principal biblioteca
              que uso no meu <span>trabalho</span>.
            </div>
            <div className="tech-logo">
              <i className="fab fa-react"></i>
            </div>
          </div>
          <div className="tech node tech-border">
            <div className="tech-title">NodeJS</div>
            <div className="tech-description">
              No momento meu <span>foco extremo</span> é React.js, porém como
              sou um Dev.
              <span>FullStack</span>, atuo com o maravilhoso NodeJS em projetos
              pessoais e reais.
              <span>
                <a
                  href="https://medium.com/@juliofilho12"
                  target="_blank"
                  title="Projetos NodeJS"
                >
                  Meus posts sobre Node.js
                </a>
              </span>
              .
            </div>
            <div className="tech-logo">
              <i className="fab fa-node"></i>
            </div>
          </div>
        </div>
        <div className="projetos-two">
          <div className="tech angular tech-border">
            <div className="tech-title">Laravel</div>
            <div className="tech-description">
              Iniciei os estudos do <span>Laravel</span> esse ano por questões pessoais, 
              desde então venho trabalhando em projetos pessoais utilizando a tecnologia.
            </div>
            <div className="tech-logo">
              <i className="fab fa-laravel"></i>
            </div>
          </div>
          <div className="tech aws tech-border">
            <div className="tech-title">AWS</div>
            <div className="tech-description">
              Estudo maneiras eficientes de realizar uploads para a plataforma
              de cloud <span>AMAZON S3</span>
              Utilizo metologias para manter a eficiência e não ter desperdício
              financeiro com Cloud.
            </div>
            <div className="tech-logo">
              <i className="fab fa-aws"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Study;
