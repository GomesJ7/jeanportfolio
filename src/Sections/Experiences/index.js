import React from "react";
import styled from "styled-components";


const Experience = styled.div`
    margin-top: 5rem;
    width: 100vw;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const Content = styled.div`
    z-index: 9;
    display: flex;
    justify-content: space-between;
    font-size: 1rem;
    color: var(--black);
    line-height: 1.6;
    margin-bottom: 20px;
    padding: 10px;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Formations = styled.div`
    flex: 1;
    font-size: calc(0.5rem + 1vw);
    line-height: 1.5;
    color: var(--black);
    padding-left: 1rem;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    background-color: #fff;
    margin: 15px;
`;

const Exp = styled.div`
    flex: 1;
    font-size: calc(0.5rem + 1vw);
    line-height: 1.5;
    color: var(--black);
    padding-left: 1rem;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    background-color: #fff;
    margin: 15px;
`;

const Title = styled.h1`
    text-align: center;
    color: var(--black);
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
    color: var(--black);
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
    }
`;

const Experiences = () => {
    return (
        <Experience id="experiences">
            <Title>Experiences</Title>
            <Content>
                <Formations>
                    <Titre>Formations/Diplômes</Titre>
                    <br /><br />
                    <strong>2023 - 2024</strong> <br />
                    GEFOR - Paris 1er BTS Services Informatiques aux Organisations - Option SLAM<br /><br />
                    <strong>2021 - 2023</strong> <br />
                    Etna - Ivry-sur-Seine - Chargé de projet informatique Titre RNCP Niveau 5 EU (Bac +2)<br /><br />
                    <strong>2020 - 2021</strong> <br />
                    Université Gustave Eiffel - Champs-sur-Marne -L1 Physique-Chimie/ Sciences de l'ingénieur<br /><br />
                    <strong>2019 - 2020</strong> <br />
                    Lycée Martin Luther King - Bussy-Saint-Georges - Bac STI2D option SIN<br /><br />
                </Formations>
                <Exp>
                    <Titre>Experiences Professionnelles</Titre>
                    <br /><br />
                    <strong>Novembre 2023 & Février 2024</strong><br />
                    Fedhubs GOTHAM Développeur Backend (Stage)<br /><br />
                    <strong>Août 2022 - Avril 2023</strong><br />
                    DOOH IT Développeur Full Stack (Contrat d’alternance)<br /><br />
                    <strong>Mars 2017 -</strong><br />
                    ATOS (BULL) Stage Ingénieur système embarqué Découverte et apprentissage théorique des bases du métier<br />
                </Exp>
            </Content>
        </Experience>
    );
};

export default Experiences;
