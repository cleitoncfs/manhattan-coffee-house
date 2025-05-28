const InfoSection = ({ id, title, content }) => {
    return (
        <section id={id} className="container-texto">
            <h2>{title}</h2>
            <p>{content}</p>
        </section>
    );
};

export default InfoSection;
