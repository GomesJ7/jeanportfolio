import React, { useState } from "react";
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
  width: 5rem;
  height: auto;
  cursor: pointer;

  img {
    margin-right: 0.3rem;
  }

  h3 {
    font-weight: 600;
    line-height: 1.5;
    color: var(--white);
    margin: 0;
  }
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;

  a {
    font-weight: 600;
    line-height: 1.5;
    color: var(--white);
    padding-left: 1rem;

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

  @media only Screen and (max-width: 40em) {
    flex-direction: column;
    width: 100%;
    position: absolute;
    top: 4rem;
    left: ${({ open }) => (open ? '0' : '-100%')};
    background-color: var(--nav);
    transition: left 0.3s;
  }
`;

const Burger = styled.div`
  display: none;
  cursor: pointer;

  @media only Screen and (max-width: 40em) {
    display: block;
  }

  div {
    width: 25px;
    height: 3px;
    background-color: var(--white);
    margin: 5px;
    transition: all 0.3s ease;
  }
`;

const Button = styled.button`
  background-color: var(--white);
  padding: 0.5rem 1rem;
  border-radius: 20px;
  color: var(--purple);
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    transform: scale(1.1);
  }

  &:focus {
    transform: scale(0.9);
  }

  @media only Screen and (max-width: 40em) {
    font-size: 1rem;

    &:hover {
      transform: none;
    }

    &:focus {
      transform: none;
    }
  }
`;

const Header = () => {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!open);
  };

  return (
    <Headers>
      <Logo href="#home">
        <img src={logo} alt="JeanGomesLogo" />
        <h3>Jean GOMES</h3>
      </Logo>
      <Burger onClick={toggleMenu}>
        <div />
        <div />
        <div />
      </Burger>
      <Nav open={open}>
        <a href="#home" onClick={toggleMenu}>Accueil</a>
        <a href="#about" onClick={toggleMenu}>Moi</a>
        <a href="#experiences" onClick={toggleMenu}>Experiences</a>
        <a href="#competences" onClick={toggleMenu}>Compétences & Projets</a>
        <a href="#veille" onClick={toggleMenu}>Veille Technologique</a>
        <a href="#contact" onClick={toggleMenu}>
          <Button>Contactez moi</Button>
        </a>
      </Nav>
    </Headers>
  );
};

export default Header;
