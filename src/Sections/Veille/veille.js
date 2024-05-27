import React from 'react';
import styled from 'styled-components';
import timeline from '../../assets/timelineIOT.png';

const VeilleT = styled.div`
  margin: 20px;
  padding: 20px;

`;

const Title = styled.h1`
color: #0a0b10;
display: inline-block;
font-size: calc(1rem + 1.5vw);
margin-top: 1.5rem;
position: relative;
justify-content: center;
&::before {
  content: "";
  height: 1px;
  width: 50%;
  position: absolute;
  left: 50%;
  bottom: 0;
  transform: translate(-50%, 0.5rem);
  border-bottom: 2px solid var(--purple);
}
`;

const Titre = styled.h2`
  font-size: 2rem;
  color: #333;
  text-align: center;
  margin-bottom: 20px;
`;

const Intro = styled.div`
  margin-top: 3rem;
  font-size: 1rem;
  color: var(--black);
  line-height: 1.6;
  margin-bottom: 20px;
  padding: 10px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Histoire = styled.div`
  font-size: 1rem;
  color: var(--black);
  line-height: 1.6;
  margin-bottom: 20px;
  padding: 10px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Domaines = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 1rem;
  color: var(--black);
  line-height: 1.6;
  margin-bottom: 20px;
  padding: 10px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Section = styled.div`
  flex: 1;
  margin: 10px;
`;

const Paragraph = styled.p`
  font-size: 1rem;
  color: var(--black);
  line-height: 1.6;
`;

const Timeline = styled.div`
  display: flex;
  justify-content: center;
  width: calc(30% + 20vw);
  height: auto;
  margin-left: 20vw;
  overflow: hidden;
  filter: drop-shadow(2px 4px 6px black);
`;

const Info = styled.div`
  font-size: 1rem;
  color: var(--black);
  line-height: 1.6;
  margin-top: 20px;
  padding: 10px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

function Veille() {
  return (
    <VeilleT id='veille'>
      <Title>Veille Technologique</Title>
      <Intro>
        <Paragraph>
          L'Internet des objets (IoT) représente un réseau de dispositifs physiques interconnectés, 
          capables de collecter et d'échanger des données grâce à des capteurs, des logiciels et d'autres 
          technologies. Ces dispositifs incluent tout, des appareils ménagers aux machines industrielles, 
          et leur interconnexion permet de créer des systèmes intelligents et autonomes.
          <br />
          <br />
          La technologie de l’IOT fonctionne en quatre étapes : 
          <br />
          1. La collecte des données. Les terminaux présents dans les appareils connectés réceptionnent les données, dont la nature varie selon l’objet concerné et son mode de programmation. Elles peuvent prendre, par exemple, la forme d’une vidéo ou d’une indication chiffrée, renvoyant à un paramètre comme une quantité ou une température.
          <br />
          2. La transmission. Les terminaux communiquent ensuite les informations vers un autre terminal, un cloud public ou privé, ou bien ils les stockent en interne.
          <br />
          3. Le traitement. Le logiciel intégré dans l’appareil connecté lance l’exécution d’une action en fonction de la donnée collectée.
          <br />
          4. L’exploitation. L’ensemble des informations sont analysées avec précision. Cet examen permet d’optimiser des processus existants ou de prendre des mesures spécifiques. Grâce au déploiement de l’IA, les résultats fournis deviennent de plus en plus sophistiqués. 
        </Paragraph>
      </Intro>
      <br />
      <Histoire>
        <Paragraph>
          L'Internet des objets (IoT) trouve ses origines dans les années 1980, bien que ses concepts fondamentaux soient encore plus anciens. 
          Voici les étapes clés de son développement :
        </Paragraph>
        <Timeline>
          <img src={timeline} alt="timeline" />
        </Timeline>
      </Histoire>
      <br />
      <Titre>Les domaines où agit l'IoT:</Titre>
      <Domaines>
        <Section>
          <h3>Santé</h3>
          <Paragraph>
            L'Internet des objets (IoT) a révolutionné le secteur de la santé en introduisant des dispositifs connectés qui permettent une surveillance continue des patients et une gestion efficace des soins. 
            En 2023, les objets connectés sont de plus en plus utilisés pour le suivi des paramètres vitaux, l'administration de médicaments et la gestion des maladies chroniques. Par exemple, 
            des dispositifs comme les pacemakers connectés, les moniteurs de glucose en continu et les appareils de suivi de la pression artérielle permettent une surveillance à distance, 
            réduisant ainsi les visites à l'hôpital et améliorant la qualité des soins.
          </Paragraph>
          Sources:
          <a href='https://www.itforbusiness.fr/les-tendances-fortes-de-l-iot-d-ici-2023-18685'>IT For Business</a>,
          <a href='https://blog-french-iot.laposte.fr/'>Blog French IoT</a>
        </Section>
        <Section>
          <h3>IA</h3>
          <Paragraph>
            Le développement de l'IA (Intelligence Artificielle) continue de croître et de s'intégrer avec l'IoT pour offrir des solutions plus intelligentes et autonomes. 
            En 2023, l'IA est utilisée pour analyser les données collectées par les dispositifs IoT, permettant des prédictions et des actions en temps réel, améliorant ainsi l'efficacité 
            et la réactivité des systèmes connectés.
          </Paragraph>
          Sources:
          <a href='https://blog.synarionit.com/iot-trends-in-2024/'>synarionit</a>
        </Section>
        <Section>
          <h3>5G</h3>
          <Paragraph>
            La 5G joue un rôle crucial dans l'IoT en fournissant une connectivité rapide et fiable. 
            Elle permet une transmission de données à haute vitesse et une faible latence, essentielle pour les applications IoT critiques. 
            En 2024, l'intégration de la 5G dans les dispositifs IoT continue de croître, offrant des possibilités de communication en temps réel et d'innovation dans divers secteurs, 
            notamment l'automobile, la santé et les villes intelligentes.
          </Paragraph>
                    Sources:
          <a href='https://blog.synarionit.com/iot-trends-in-2024/'>synarionit</a>
        </Section>
      </Domaines>
      <Info>
        <h3>Plateformes pour rester informé</h3>
        <Paragraph>
          <a href='https://www.lemondeinformatique.fr/'>Le Monde Informatique</a>
          <br />
          <a href='https://twitter.com/grafikart_fr'>Grafikart_fr</a>
          <br />
          Google Actualités
          <br />
          <a href='https://www.01net.com/'>01net</a>
          <br />
          <a href='https://www.lemagit.fr/'>LeMagIT</a>
        </Paragraph>
      </Info>
    </VeilleT>
  );
}

export default Veille;
