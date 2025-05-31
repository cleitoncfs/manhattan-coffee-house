// src/components/Footer.jsx
import { FaExternalLinkAlt } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="footer">
            <p className="footer-copyright">
                © {new Date().getFullYear()} Manhattan - Coffee House - Todos os
                direitos reservados
            </p>
            <p className="footer-credits">
                Desenvolvido por{" "}
                <a
                    href="https://portfolio-cleiton.netlify.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer-link"
                    aria-label="Portfólio do desenvolvedor (abre em nova aba)"
                >
                    <span>Cleiton Santos</span>
                    <FaExternalLinkAlt className="link-icon" />
                </a>
            </p>
        </footer>
    );
};

export default Footer;
