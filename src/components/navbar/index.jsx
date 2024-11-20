import { useEffect, useState } from "react";
import { LogoGsEletric } from "../logo/logoGsEletric";

import "./style.css";

export const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true); // Quando rolar mais de 50px
      } else {
        setScrolled(false); // Quando rolar para o topo
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <header className={`navbar-wrapper ${scrolled ? "scrolled" : ""}`}>
        <nav className="navbar">
          <div className="logo">
            <LogoGsEletric />
            <a href="/">Gs-Eletric</a>
          </div>

          <ul className="nav-links">
            <li>
              <a href="#about">Saiba Mais</a>
            </li>
            <li>
              <a href="#benefits">Beneficios</a>
            </li>
            <li>
              <a href="#historic">Historico</a>
            </li>
            <li>
              <a href="#rewards">Recompensas</a>
            </li>
          </ul>
        </nav>
      </header>

      {scrolled && (
        <button
          id="scroll-up"
          className={`scroll-up ${scrolled ? "_show-scroll" : ""}`}
          onClick={scrollTop}
        >
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 0h24v24H0z" fill="none"></path>
            <path
              fill="rgba(255,255,255,1)"
              d="M11.9997 10.8284L7.04996 15.7782L5.63574 14.364L11.9997 8L18.3637 14.364L16.9495 15.7782L11.9997 10.8284Z"
            ></path>
          </svg>
        </button>
      )}
    </>
  );
};
