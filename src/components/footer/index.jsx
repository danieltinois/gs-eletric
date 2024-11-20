import { LogoGsEletric } from "../logo/logoGsEletric";
import "./style.css";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo-and-links">
          <div className="footer-logo">
            <LogoGsEletric />
            <span>Gs-Electric</span>
          </div>

          <nav className="footer-nav">
            <a href="#home">Home</a>
            <a href="#saiba-mais">Saiba Mais</a>
            <a href="#historico">Histórico</a>
            <a href="#contato">Contate Nós</a>
          </nav>
        </div>

        <div className="footer-separator"></div>

        <div className="footer-terms-and-social">
          <div className="footer-terms">
            <p>
              Todos os direitos reservados. Veja nossa{" "}
              <a href="#politica">Política de Privacidade</a> e{" "}
              <a href="#termos">Termos de Uso</a>.
            </p>
          </div>

          <div className="footer-social">
            <span>Siga-nos →</span>

            <a href="#twitter" aria-label="Twitter">
              <FaTwitter />
            </a>
            <a href="#instagram" aria-label="Instagram">
              <FaInstagram />
            </a>
            <a href="#facebook" aria-label="Facebook">
              <FaFacebook />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
