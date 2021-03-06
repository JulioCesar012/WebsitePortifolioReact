/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable array-callback-return */
/* eslint-disable react/jsx-no-target-blank */
import React, { useEffect, useState } from "react";
import Progress from "./Progress";
import ImageGallery from 'react-image-gallery';

import image1 from "../assets/img/image1.jpg";
import image2 from "../assets/img/inovaar.jpg";
import image3 from "../assets/img/clone_twitter.png";

// json de projetos
import { projects } from "../projects.json";
import ImagesConaz from "../animations/utils/images_conaz";

const Project1 = () => {
  const [projectsList, setProjectsList] = useState(0);

  useEffect(() => {
    if (projects) {
      setProjectsList(projects);
    }
  }, [projectsList]);

  return (
    <>
      {projects.length >= 1 &&
        projects.map((projectInfo) => {
          if (projectInfo.key !== 0) {
            return (
              <>
                <div
                  className={`project ${projectInfo.number_project === 1 ? "project1" : "project2"} anime-opacity`}
                  key={projectInfo.key}
                >
                  <div className="article" data-aos="fade-right">
                    <div className="link">
                      <a href={projectInfo.projeto_view} target="_blank" title="Ir para projeto x">
                        <i className="fas fa-external-link-alt"></i>
                      </a>
                      <a
                        href={
                          projectInfo.projeto_github ? projectInfo.projeto_github : projectInfo.projeto_playstore
                        }
                        target="_blank"
                        title="Ir para o repositório"
                      >
                        {projectInfo.projeto_github ? (
                          <i className="fab fa-github"></i>
                        ) : (
                          <i className="fab fa-google-play"></i>
                        )}
                      </a>

                      {projectInfo.projeto_applestore && (
                        <a href={projectInfo.projeto_applestore} target="_blank" title="Ir para o repositório">
                          <i className="fab fa-app-store-ios"></i>
                        </a>
                      )}
                    </div>
                    <div className="project-name">
                      <span className="number">{projectInfo.number_project}.</span>
                      {projectInfo.title_project}
                    </div>
                    <div className="project-description">
                      <ul>
                        <li>
                          <i className="arrow fas fa-chevron-right"></i> {projectInfo.caracteristica_1}
                        </li>
                        <li>
                          <i className="arrow fas fa-chevron-right"></i> {projectInfo.caracteristica_2}
                        </li>
                        <li>
                          <i className="arrow fas fa-chevron-right"></i> {projectInfo.caracteristica_3}
                        </li>
                        {projectInfo.caracteristica_4 && (
                          <li>
                            <i className="arrow fas fa-chevron-right"></i> {projectInfo.caracteristica_4}
                          </li>
                        )}
                        <br />
                        <li>
                          <div>
                            <Progress
                              count={projectInfo.tecnologia1Count}
                              tecnology={projectInfo.tecnologia1}
                              numberProject={projectInfo.number_project}
                            />
                          </div>
                          <div>
                            <Progress
                              count={projectInfo.tecnologia2Count}
                              tecnology={projectInfo.tecnologia2}
                              numberProject={projectInfo.number_project}
                            />
                          </div>
                          <div>
                            <Progress
                              count={projectInfo.tecnologia3Count}
                              tecnology={projectInfo.tecnologia3}
                              numberProject={projectInfo.number_project}
                            />
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="container">
                    <a href={projectInfo.link_projeto} target="_blank" title="Ir para projeto x">
                      <img
                        src={
                          projectInfo.number_project === 1
                            ? image1
                            : projectInfo.number_project === 2
                            ? image2
                            : projectInfo.number_project === 3
                            ? image3
                            : image1
                        }
                        alt="Site Portifólio"
                      />
                      <img
                        src={
                          projectInfo.number_project === 1
                            ? image1
                            : projectInfo.number_project === 2
                            ? image2
                            : projectInfo.number_project === 3
                            ? image3
                            : image1
                        }
                        alt="Site Portifólio"
                      />
                      <img
                        src={
                          projectInfo.number_project === 1
                            ? image1
                            : projectInfo.number_project === 2
                            ? image2
                            : projectInfo.number_project === 3
                            ? image3
                            : image1
                        }
                        alt="Site Portifólio"
                      />
                    </a>
                  </div>
                </div>

                {projectInfo.key === 1 || projectInfo.key === 2 ? (
                  <div className="divider anime-opacity" data-aos="fade">
                    <span></span>
                    <span>
                      <i className="fas fa-code"></i>
                    </span>

                    <span></span>
                  </div>
                ) : (
                  ""
                )}
              </>
            );
          }
          if (projectInfo.key === 0) {
            return (
              <>
                <div className="project project2 anime-opacity" key={projectInfo.key}>
                  <div className="article-conaz">
                    <a title="Ir para projeto x">
                      <div className="project-name">{projectInfo.title_project}</div>
                      <ImageGallery items={ImagesConaz} showNav={false} showFullscreenButton={false} autoPlay={true} slideInterval={4500} />
                    </a>
                  </div>
                </div>


                {projectInfo.key === 0 ? (
                  <div className="divider anime-opacity" data-aos="fade" style={{ marginTop: "7rem" }}>
                    <span></span>
                    <span>
                      <i className="fas fa-code"></i>
                    </span>

                    <span></span>
                  </div>
                ) : (
                  ""
                )}
              </>
            );
          }
        })}
    </>
  );
};

export default Project1;
