//C’est la page d’accueil, Il contient toutes les sections requises dans cette page.
import Hero from "../Sections/Hero";
import About from "../Sections/About";
import Contact from "../Sections/Contact";
import Competences from "../Sections/Competences";
import Projets from "../Sections/Projets";
import styled from "styled-components";

const Container = styled.div`
      dsiplay: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
`;

const Home = () => {
  return( 
    <Container>
      <Hero />
      <About />
      <Projets />
      <Competences />
      <Contact />
      
    </Container>
  );
};

export default Home;
