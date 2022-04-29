// MainContent website
import styled from "styled-components";
import Pink from "../../assets/blobPink.png";
import Purple from "../../assets/blobPurple.png";
import White from "../../assets/blobWhite.png";
import Page from "../../assets/pageWeb.svg";

const Herosection = styled.div`
    width: 100vw;
    height: 45vw;
    background-color: var(--black);
    dsiplay: flex;
    justify-content: center;
    position:relative;
`;

const Blobs = styled.div`
    width:100%;
    position:absolute;
    right: 0;
`;

const PinkBlob = styled.div`
    width: camc(15% + 15vw);
    position: absolute;
    right: 0;
    top: calc(5rem + 5vw);
    z-index: 5;
`;

const WhiteBlob = styled.div`
    width: camc(20% + 20vw);
    position: absolute;
    right: 0;
    top: calc(3.5rem + 3.45vw);
    z-index: 6;
`;

const PurpleBlob = styled.div`
    width: camc(15% + 15vw);
    position: absolute;
    right: 0;
    top: calc(5rem + 5vw);
    z-index: 6;
`;

const MainContent = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    width: 70vw;
`;

const LeftBlock = styled.div`
    dsiplay:felx;
    flex-direction: column;
    aliign-items: flex-start;
    width: 50%;
    line-height: 1.5;
    color: var(--white);
  position: relative;
  z-index: 15;
  @media only Screen and (max-width: 48em) {
    width: 80%;
    text-align: center;
    align-items: center;
    justify-content: space-around;
    margin-top: calc(2.5rem + 2.5vw);
    filter: drop-shadow(2px 4px 6px black);
  }
  @media only Screen and (max-width: 40em) {
    filter: none;
  }
`;

const PageWeb = styled.img`
    max-width: 90%;
    width: calc(30% + 20vw);
    height: auto;
    z-index: 7;
    @media only Screen and (max-width: 48em) {
        align-self: flex-start;
        position: absolute;
        bottom: 0;
        width: calc(30% + 20vw);
        opacity: 0.5;
      }
      @media only Screen and (max-width: 45em) {
        display: none;`;

const Topi = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    background-color: var(--white);
    color: var(--black);
    font-weight: 700;
    font-size: calc(0.4rem + 0.4vw);
    padding: 0.3rem 0.2vw;
    border-radius: 20px;`;

const Circle = styled.span`
    display: inline-block;
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    background-color: var(--purple);;
    margin-right: 0.5rem;`;

const Title = styled.h1`
    color: var(--white);`;

const SubText = styled.h5`
    color: var(--white);`;

const HeroSection = () => {
    return <Herosection id="home">
        <Blobs>
            <PinkBlob>
                <img src={Pink} alt="blob rose" width="400" height="400"/>
            </PinkBlob>
            <WhiteBlob>
                <img src={White} alt="blob blanc" width="400" height="400"/>  
            </WhiteBlob>
            <PurpleBlob>
                <img src={Purple} alt="blob violet" width="400" height="400"/>
            </PurpleBlob>
        </Blobs>
            <MainContent>
                <LeftBlock>
                    <Topi>
                        <Circle/> <span>Portfolio</span>
                    </Topi>
                        <Title>Bienvenue sur mon Portofolio en ligne!</Title>
                        <SubText>Réaliser par Jean Gomes</SubText>
                </LeftBlock>
                <PageWeb src={Page} alt="icon page web" width="400" height="400" />
            </MainContent>
        </Herosection>;
  };
  
  export default HeroSection;