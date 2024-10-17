import React from "react";
import Hr from "../../Atoms/Hr";
import styles  from "./index.module.scss";

const NossaHist = () =>{
    return(
        <div className={styles.container}>
            <h2>Nossa história</h2>
            <Hr color='dark'/>
            <p>A história da Gran Prisma começou no coração de dois amigos: Lucas e Mateus. Desde cedo, Lucas aprendeu tudo sobre o universo do vidro trabalhando ao lado de seu pai por mais de 15 anos. A cada instalação e cada projeto, ele se dedicava com paixão e comprometimento, sempre buscando aperfeiçoar suas habilidades e entregar o melhor.
            <br />
            <br />
            Enquanto Lucas mergulhava profundamente no ofício, Mateus, seu grande amigo, observava de perto. Ele via a dedicação de Lucas, a forma como transformava o vidro em peças de arte funcionais e como sua paixão pelo trabalho crescia a cada novo desafio. Certo dia, inspirado por essa trajetória, Mateus sugeriu algo que mudaria suas vidas para sempre: “Por que não abrimos nossa própria empresa?”.
            <br /><br />
            A ideia fez o coração de Lucas acelerar. Era o momento perfeito. Com a experiência de Lucas e o espírito empreendedor de Mateus, eles decidiram dar o grande passo. Assim nasceu a "Gran Prisma", uma empresa criada com o compromisso de oferecer mais do que apenas serviços – oferecer uma experiência única, onde o atendimento, a qualidade e o respeito ao cliente são os pilares fundamentais.
            <br /><br />
            A Gran Prisma não é apenas uma vidraçaria; é o resultado da união de dois amigos que compartilham a mesma visão. Cada projeto que realizam reflete seu comprometimento em entregar excelência. Se você está procurando inovação, atendimento próximo e resultados de alta qualidade, a Gran Prisma é a escolha certa.
            </p>
        </div>
    )
}

export default NossaHist;