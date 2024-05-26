import logo from "../../assets/logo.png";
import styled from "styled-components";

const Headers = styled.header`
display: flex;
justify-content: space-between;
align-items: center;
padding: 1rem 5rem;
background-color: var(--nav);
color: var(--white);
position: relative;
z-index: 500;
@media only Screen and (max-width: 64em) {
  padding: 0.5rem 3rem;
}
@media only Screen and (max-width: 40em) {
  padding: 0.5rem 1.5rem;
}
`;

const Logo = styled.a`
      display: flex;
      align-items: center;
      width:5rem;
      height:auto;
      cursor: pointer;
    img {
      margin-right: 0.3rem;
    }
    a {
      font-weight: 600;
      line-height: 1.5;
      color: var(--white);
    &::after {
        content: "";
        display: block;
        height: auto;
        width: auto;
        background: transparent;
        transition: width 0.5s;

    &:hover {
      width: 100%;
      background: var(--purple);
    }
  }
`;

const Nav = styled.nav`
    width: 25rem;
    max-width: 40rem;
    display: flex;
    align-items: center;
    justify-content: space-between ;
    transition: all 0.3s;
    
    
    a {
      font-weight: 600;
      line-height: 1.5;
      color: var(--white);
      padding-left: 3%;
      
      &::after {
        content: "";
        display: block;
        height: 3px;
        width: 0;
        background: transparent;
        transition: width 0.5s;
      }

      &:hover::after {
        width: 100%;
        background: var(--purple);
      }
    }
`;

const Button = styled.button`
    background-color: var(--);
    padding: 0.5rem 1rem;
    border-radius: 20px;
    color: var(--purple);
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s;

    &:hover{
      transform: scale(1.1);
    }
    &:focus{
      transform: scale(0.9);
    }
    @media only Screen and (max-width: 40em) {
      font-size: 1.2rem;
      &:hover {
        transform: none;
      }
      &:focus {
        transform: none;
      }
    }
`;


const Header = () => {
  return( 
  <Headers>
    <Logo>
      <img src={logo} alt="JeanGomesLogo"/>
      <h3>Jean GOMES</h3>
    </Logo>
      <Nav>
          <a href="#home">Accueil</a>
          <a href="#about">Moi</a>
          <a href="#experiences">Experiences</a>
          <a href="#competences">Compétences & Projets</a>
          <a href="#contact">
              <Button>Contactez moi</Button>
          </a>
      </Nav>

  </Headers>
  );
};

export default Header;
