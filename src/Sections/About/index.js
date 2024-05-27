import wave from "../../assets/waves.svg";
import photo from "../../assets/photo.png";
import planete from "../../assets/planete.png";
import styled from "styled-components";

const AboutSection = styled.section`
  width: 100vw;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Waves = styled.img`
  width: 100%;
  height: auto;
`;

const Main = styled.div`
  margin: 0 15rem;
  margin-top: 5rem;
  display: flex;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
`;

const Title = styled.h1`
  color: #0a0b10;
  display: inline-block;
  font-size: calc(1rem + 1.5vw);
  margin-top: 1rem;
  position: relative;
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

const CurvedLine = styled.div`
  width: 7rem;
  height: 2rem;
`;

const Photo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 22rem;
  height: 30rem;
  padding-bottom: 5rem;
  overflow: hidden;
  border-radius: 12rem 12rem 0 0;
  filter: drop-shadow(2px 4px 6px black);
`;

const Planete = styled.div`
  width: 50%;
  right: 0;
  bottom: 100%;
`;

const Content = styled.div`
  display:flex;
  justify-content:space-between;
  align-items:center;`;

const Text = styled.h4`
  font-size: calc(0.5rem + 1vw);
  line-height: 1.5;
  color: var(--black);
`;

const AboutText = styled.div`
  position: relative;
  width: 50%;
`;

const About = () => {
  return (
    <AboutSection id="about">
      <Waves src={wave} alt="waves" />
      <Main>
        <div>
          <Title>A propos de moi</Title>
          <CurvedLine />
        </div>
        <Content>
          <Photo>
            <img src={photo} alt="photo" />
          </Photo>
          <AboutText>
            <Planete>
              <img src={planete} alt="planete" />
            </Planete>
            <Text>
              Actuellement étudiant en BTS SIO option SLAM, je suis passionné par l'informatique. 
              À travers ce portfolio développé en React (v.18), vous trouverez mes différents projets réalisés, 
              ainsi que mes expériences et mes compétences.
            </Text>
          </AboutText>
        </Content>
      </Main>
    </AboutSection>
  );
};

export default About;
