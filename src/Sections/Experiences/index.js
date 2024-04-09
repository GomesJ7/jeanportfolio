import React from "react";
import styled from "styled-components";
import wave from "../../assets/waves2.svg";

const Experience = styled.div`
  width: 100vw;
  position: relative;
  display: flex; /* Utiliser flexbox */
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: black;
`;

const Formations = styled.div`
  flex: 1;
  font-size: calc(0.5rem + 1vw);
  line-height: 1.5;
  color: var(--white);
  padding-right: 1rem;
  border-right: 5px solid var(--black);
  background-color: var(--purple);
  border-radius: 15px; /* Ajout de border-radius */
  margin: 15px; /* Ajout de marges pour décoller des limites de la page */
`;

const Exp = styled.div`
  flex: 1;
  font-size: calc(0.5rem + 1vw);
  line-height: 1.5;
  color: var(--white);
  padding-left: 1rem;
  background-color: var(--purple);
  border-radius: 15px; /* Ajout de border-radius */
  margin: 15px; /* Ajout de marges pour décoller des limites de la page */
`;
const Waves = styled.img`
  width: 100%;
  height: auto;
`;

const Title = styled.h1`
text-align: center;
color: whitesmoke;
font-size: calc(1rem + 1.5vw);
margin-bottom: 1rem;
position: relative;
display: inline-block;
&:after {
  content: "";
  position: absolute;
  width: 50%;
  height: 2px;
  background-color: var(--purple);
  bottom: -0.5rem;
  left: 50%;
  transform: translateX(-50%);
}
`;

const Titre = styled.h3`
text-align: center;
color: whitesmoke;
font-size: calc(1rem + 1.5vw);
margin-bottom: 1rem;
position: relative;
display: inline-block;
&:after {
  content: "";
  position: absolute;
  width: 50%;
  height: 2px;
  background-color: black;
  bottom: -0.5rem;
  left: 50%;
  transform: translateX(-50%);
}`;

const Eperiences = () => {
  return (
    <Experience id="experiences">
      <Waves src={wave} alt="waves" />
      <Title>Experiences</Title>
      <br></br><br></br><br></br><br></br>
      <div style={{ display: "flex", width: "100%" }}>
        <Formations>
          <Titre>Formations/Diplômes</Titre><br></br><br></br>
          2023 - 2024 GEFOR - Paris 1er BTS Services Informatiques aux Organisations - Option SLAM<br></br><br></br>
          2021 - 2023 ETNA - Ivry-sur-Seine - Chargé de projet informatique Titre RNCP Niveau 5 EU (Bac +2)<br></br><br></br>
          2020 - 2021 Université Gustave Eiffel - Champs-sur-Marne -L1 Physique-Chimie/ Sciences de l'ingénieur<br></br><br></br>
          2017 - 2020 Lycée Martin Luther King - Bussy-Saint-Georges - Bac STI2D option SIN<br></br>
        </Formations>
        <br></br>
        
        <Exp>
          <Titre>Experiences Professionnelles</Titre><br></br><br></br>
          Fedhubs GOTHAM - Novembre 2023 & Février 2024 - Développeur Backend (Stage)<br></br><br></br>
          DOOH IT - Août 2022 - Avril 2023 Développeur Full Stack (Contrat d’alternance)<br></br><br></br>
          ATOS (BULL) - Mars 2017 - Stage Ingénieur système embarqué Découverte et apprentissage théorique des bases du métier<br></br>
        </Exp>
      </div>
    </Experience>
  );
};

export default Eperiences;
