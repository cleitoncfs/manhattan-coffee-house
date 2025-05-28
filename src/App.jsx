// import { useState } from "react";
import Header from "./components/Header";
import Banner from "./components/Banner";
import InfoSection from "./components/InfoSection";
import ParallaxSection from "./components/ParallaxSection";
import Contacts from "./components/Contacts";
import Hours from "./components/Hours";
import Footer from "./components/Footer";
import useScrollToTop from "./hooks/useScrollToTop";
import "./App.css";

const App = () => {
    const { isVisible, scrollToTop } = useScrollToTop();

    const infoSections = [
        {
            id: "informacoes",
            title: "EXPERIMENTE O MELHOR CAFÉ DA CIDADE!",
            content:
                'O café não é uma simples bebida que foi preparada por alguém. O café é momento e nós mostraremos isso. Frases como "Que tal tomarmos um café?" ou até então "Vamos fazer um café?" são demonstrações de que um dos momentos que mais reforçam os laços para com o próximo está finalmente por acontecer. Fraco ou forte? Com ou sem açúcar? Você deseja açúcar ou adoçante? Estas são frases que ouvimos em vários lugares. Em quase todos os locais onde há pessoas há também café. Parecemos intrínsecos ao café. Aqui na Manhattan serviremos para você com muito carinho o nosso querido e amado Amaro\'s Coffee diretamente do nosso cafezal em Minas Gerais. Para todos nós, café é coisa séria e merece todo o cuidado.',
        },
        {
            title: "O QUE É O CAFÉ MANHATTAN?",
            content:
                "Segundo a Metodologia de Avaliação Sensorial da SCA (Specialty Coffee Association), usada no mundo todo, um café especial é todo aquele que atinge, no mínimo, 80 pontos na escala de pontuação da metodologia (que vai até 100). O Café Manhattan destaca-se nos atributos fragrância, corpo, harmonia, doçura e sabor, nesse caso, possuindo sabores e aromas que podem ser frutados, herbais, doces como caramelo e chocolate. Podemos fazer uma analogia com o vinho, pois o café Manhattan também pode ser apreciado por suas características sensoriais e não apenas pela cafeína. Através do excelente padrão de cultivo, cuidado pós-colheita e da torra, você poderá experimentar diferentes e deliciosos tipos de café.",
        },
        {
            title: "CONHEÇA O CAFÉ GOURMET MANHATTAN?",
            content:
                'As características desse tipo do café gourmet da Manhattan são muito marcantes. O seu corpo vai depender da variedade do blend: quanto mais "pesado" ele for na boca, maior o corpo. Quanto menor a sua pesagem, menor o corpo. O nosso café gourmet é o mais bem avaliado no processo de produção, para que ele não venha com nenhum tipo de defeito. O aroma é bem perceptível e o consumidor consegue sentir nitidamente, sendo que ele pode variar entre 4 aromas: florado, cítrico, achocolatado, frutado. Essas variações são consequências dos grãos do tipo Arábica. Tudo isso vai depender da torra, quanto mais clara ela for, maior será a acidez.',
        },
    ];

    return (
        <>
            <Header />
            <Banner />
            <main>
                <InfoSection
                    id={infoSections[0].id}
                    title={infoSections[0].title}
                    content={infoSections[0].content}
                />
                <ParallaxSection
                    image="parallax-imagem2.jpg"
                    text="Um bom café é motivo de alegria!"
                />
                <InfoSection
                    title={infoSections[1].title}
                    content={infoSections[1].content}
                />
                <ParallaxSection
                    image="parallax-imagem3.jpg"
                    text="A vida só começa depois do café!"
                />
                <InfoSection
                    title={infoSections[2].title}
                    content={infoSections[2].content}
                />
                <Contacts />
                <Hours />
            </main>
            <Footer />
            <a
                href="#top"
                className={`back-to-top ${isVisible ? "visible" : ""}`}
                title="Voltar ao topo"
                onClick={(e) => {
                    e.preventDefault();
                    scrollToTop();
                }}
            ></a>
        </>
    );
};

export default App;
