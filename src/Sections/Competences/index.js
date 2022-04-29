import styled from "styled-components";
import fusee from "../../assets/fusee.png";
import Pink from "../../assets/blobPink.png";
import Purple from "../../assets/blobPurple.png";
import White from "../../assets/blobWhite.png";
import anneau from "../../assets/3dtube.png";

const Competences = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 1rem 0;
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

const Content = styled.div`
  display:flex;
  position:relative;
  margin-top: 3rem;
  `;

const Texte = styled.div`
  displpay:flex;
  overflow:hidden;
  z-index: 9;
`;
const Image = styled.div`
  displpay:flex;
  justify-content: center;
  align-items:center;
  width: 22rem;
  height: 30rem;
  padding-bottom:5rem;
  overflow:hidden;
  border-radius: 12rem 12rem 0 0;
  justify-content: space-between;
  filter: drop-shadow(2px 4px 6px black);
`;

const Blobs = styled.div`
    width:100%;
    position:absolute;
    left: 0;
`;

const WhiteBlob = styled.div`
    width: camc(20% + 20vw);
    position: absolute;
    right:60%;
    z-index: 6;
`;

const Anneau = styled.div`
  width: camc(15% + 15vw);
  position: absolute;
  right: 10;
  z-index: 6;
`;

const Mot = styled.h1`
color: #0a0b10;
display: inline-block;
font-size: calc(1rem + 1.5vw);
margin-top: 1.5rem;
position: relative;
z-index: 9;
top: calc(3.5rem + 3.45vw);
left: 50%;
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
`;

const PurpleBlob = styled.div`
    width: camc(15% + 15vw);
    position: absolute;
    right: 0;
    z-index: 6;
`;

const CompetenceSection = () => {
  return (<Competences id="competences">
    <Title>Mes Compétences</Title>
    <Content>
      <Texte>
        <strong>Développement Web: </strong>
         HTML5, CSS, Javascript, PHP, Manifest.json<br></br>
        <strong>Framework:</strong> 
        Arduino, Raspberry, Laravel, React.js<br></br>
        <strong>Développement d'application:</strong>
        C, Python, Bash/shell, android studio<br></br>
        <strong>Logiciel: </strong>
        Oracle Vm, MySQL, Figma, Workbench<br></br>
        <strong>Gestion de bases de données: </strong>
        MySQL, MariaDB<br></br>
        <strong>Système d'Exploitation: </strong>
        Windows, Linux
        </Texte>
        <Image>
        <img src={fusee} alt="fusée"/>
      </Image>
    </Content>
    <Blobs>
            <WhiteBlob>
                <img src={White} alt="blob blanc" width="400" height="400"/>  
            </WhiteBlob>
            <Anneau>
              <img src={anneau} alt="anneau" />
            </Anneau>
            <Mot>Et bientôt plus...</Mot>
            <PurpleBlob>
                <img src={Purple} alt="blob violet" width="400" height="400"/>
            </PurpleBlob>
    </Blobs>
      
    
    </Competences>);
};

export default CompetenceSection;
