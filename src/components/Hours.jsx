const Hours = () => {
    const hoursData = [
        { day: "SEGUNDA", time: "FECHADO", isClosed: true },
        { day: "TERÇA", time: "09:00 - 22:00" },
        { day: "QUARTA", time: "09:00 - 22:00" },
        { day: "QUINTA", time: "09:00 - 22:00" },
        { day: "SEXTA", time: "09:00 - 22:00" },
        { day: "SÁBADO", time: "12:00 - 22:00" },
        { day: "DOMINGO", time: "12:00 - 22:00" },
    ];

    return (
        <section id="horarios" className="container-parallax5">
            <h2>HORÁRIOS DE FUNCIONAMENTO</h2>
            <ul className="lista-horarios">
                {hoursData.map((item, index) => (
                    <li key={index}>
                        <h3>{item.day}</h3>
                        <div></div>
                        {item.isClosed ? (
                            <span className="texto-marrom">{item.time}</span>
                        ) : (
                            <p>{item.time}</p>
                        )}
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default Hours;
