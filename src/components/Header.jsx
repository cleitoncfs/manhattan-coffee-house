import { useState } from "react";
import logo from "../../public/img/logo.png";
import ThemeToggle from "./ThemeToggle";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="topo">
            <img src={logo} alt="Logomarca Manhattan Coffee House" />
            <ThemeToggle />
            <div
                className={`menu-toggle ${isMenuOpen ? "active" : ""}`}
                onClick={toggleMenu}
            >
                <div className="menu-bar"></div>
                <div className="menu-bar"></div>
                <div className="menu-bar"></div>
            </div>
            <nav className="nav-desktop">
                <a href="#informacoes">INFORMAÇÕES</a>
                <a href="#contatos">CONTATOS</a>
                <a href="#horarios">HORÁRIOS</a>
            </nav>
            <nav className={`nav-mobile ${isMenuOpen ? "active" : ""}`}>
                <a href="#informacoes" onClick={toggleMenu}>
                    INFORMAÇÕES
                </a>
                <a href="#contatos" onClick={toggleMenu}>
                    CONTATOS
                </a>
                <a href="#horarios" onClick={toggleMenu}>
                    HORÁRIOS
                </a>
            </nav>
        </header>
    );
};

export default Header;
