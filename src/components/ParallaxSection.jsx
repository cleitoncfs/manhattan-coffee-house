const ParallaxSection = ({ image, text, isDarkMode }) => {
    const getClassName = () => {
        switch (image) {
            case "parallax-imagem2.jpg":
                return "container-parallax2";
            case "parallax-imagem3.jpg":
                return "container-parallax3";
            case "parallax-imagem4.png":
                return "container-parallax4";
            case "cafeteria.jpg":
                return "container-parallax5";
            default:
                return "container-parallax1";
        }
    };

    return (
        <section
            className={`${getClassName()} ${isDarkMode ? "dark-mode" : ""}`}
        >
            {text && <h3>{text}</h3>}
        </section>
    );
};

export default ParallaxSection;
