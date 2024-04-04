import Linkedin from "../../assets/icons-linkedin.svg";
import Github from "../../assets/icons-github.svg";
import Mail from "../../assets/icons-gmail.svg";
import styled from "styled-components";
import emailjs from 'emailjs-com';

const ContactSection = styled.div`
  width: 100vw;
  padding: calc(2.5rem + 2.5vw) 0;
  background-color: var(--black);
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content: center;
`;

const Icons = styled.div`
  display: inline;
  margin-bottom: 3rem;
  margin-top: 1rem;
  a {
    &:not(:last-child) {
      margin-right: 2rem;
    }
    &:hover {
      img {
        filter: invert(20%) sepia(100%) saturate(500%) hue-rotate(580deg)
          brightness(100%) contrast(97%);
      }
    }
    img {
      width: 3rem;
      height: 3rem;
    }
  }
`;

const Title = styled.h1`
  color: var(--white);
  display: inline-block;
  font-size: 2rem;
  margin-bottom: 2rem;
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

const Form = styled.form`
  display:flex;
  flex-direction: column;
  justify-content: center;
  input {
    padding: 1rem calc(0.5rem + 1vw);
    margin-bottom: 1rem;
    background-color: var(--nav2);
    border: none;
    border-radius: 4px;
    color: #eff7f8;
    &:active,
    &:focus {
      border: none;
      outline: none;
      background-color: var(--nav);
    }
    &::placeholder {
      color: #eff7f8;
      opacity: 0.6;
    }
    &[name="name"] {
      margin-right: 2rem;
    }
  }
  textarea {
    padding: 1rem calc(0.5rem + 1vw);
    margin-bottom: 1rem;
    background-color: var(--nav2);
    border: none;
    border-radius: 4px;
    color: #eff7f8;
    margin-bottom: 2rem;
    &:focus,
    &:active {
      background-color: var(--nav);
    }
    &::placeholder {
      color: #eff7f8;
      opacity: 0.6;
    }
  }
  button {
    padding: 0.8rem 2rem;
    background-color: var(--white);
    border-radius: 20px;
    font-size: 1.2rem;
    color: #0a0b10;
    cursor: pointer;
    transition: transform 0.3s;
    &:hover {
      transform: scale(1.1);
    }
    &:active {
      transform: scale(0.9);
    }
  }
`;

const Row = styled.div`
  @media only Screen and (max-width: 40em) {
    display: flex;
    flex-direction: column;
    input {
      &[name="name"] {
        margin-right: 0;
      }
    }
  }
`;

const Contact = () => {
  function sendEmail(e) {
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;
    const message = e.target.message.value;

    if (name && email && message) {
      emailjs.sendForm(
        "service_prawfyt",
        "template_nyz4vbu",
        e.target,
        "yo0atwo9odr6JB0b_"
      ).then(res=>{
        console.log(res);
        alert('Votre message a bien été envoyé !')
      }).catch(err=> console.log(err));
    } else {
      alert("Veuillez remplir tous les champs du formulaire avant de l'envoyer.");
    }
  }

  return (
    <ContactSection id="contact">
      <Title>Contactez moi</Title>
      <Icons>
        <a href="https://www.linkedin.com/in/gomesjean/">
          <img src={Linkedin} alt="linkedin" />
        </a>
        <a href="https://github.com/GomesJ7">
          <img src={Github} alt="github" />
        </a>
        <a href='mailto:jean.patraogomes@gmail.com'>
          <img src={Mail} alt="email" />
        </a>
      </Icons>
      <Form
        netlify
        onSubmit={sendEmail}
      >
        <Row>
          <input name="name" type="text" placeholder="Nom et prénom" />
          <input name="email" type="email" placeholder="Entrez votre mail" />
        </Row>
        <textarea name="message" cols="30" rows="2" placeholder="Message"></textarea>
        <div>
          <button type="submit" onClick={sendEmail}>Envoyer</button>
        </div>
      </Form>
    </ContactSection>
  );
};

export default Contact;
