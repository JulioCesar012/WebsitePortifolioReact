import React, { useRef } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { useDetectOutsideClick } from "./DetectClick";

const Menu = () => {
  const dropdownRef = useRef(null);
  const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, false);
  const onClick = () => setIsActive(!isActive);

  return (
    <div className="menu" onClick={onClick}>
      <ul>
        <li id="li-menu">
          <i className="fas fa-bars menu-icon"></i>
          <ul
            ref={dropdownRef}
            className={`dropdown ${isActive ? "active" : "inactive"}`}
            aria-label="submenu"
            id="dropdown"
          >
            <li>
              <AnchorLink href="#home">
                Início<i className="fas fa-rocket"></i>
              </AnchorLink>
            </li>
            <li>
              <AnchorLink href="#overview">
                Julio<i className="fas fa-user-circle"></i>
              </AnchorLink>
            </li>
            <li>
              <AnchorLink href="#projects">
                Projetos<i className="fas fa-code"></i>
              </AnchorLink>
            </li>
            <li>
              <AnchorLink href="#study">
                Estudos<i className="fas fa-user-graduate"></i>
              </AnchorLink>
            </li>
            <li>
              <AnchorLink href="#about">
                Sobre<i className="fas fa-address-card"></i>
              </AnchorLink>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
