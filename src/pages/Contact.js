import React from "react";
import Buttons from "../components/Buttons";
import ContactForm from "../components/ContactForm";
import Logo from "../components/Logo";
import Navigation from "../components/Navigation";
import CopyToClipboard from "react-copy-to-clipboard";
import SocialNetWork from "../components/SocialNetWork";

const Contact = () => {
  return (
    <main>
      <div className="contact">
        <Navigation />
        <Logo />
        <ContactForm />
        <Buttons left={"/projet-4"} />

        <div className="contact-infos">
          <div className="address">
            <div className="content">
              <h4>Adresse</h4>
              <p>Cocody Rivera Bonoumin</p>
              <p>Plateau Immeuble la Pyramide</p>
            </div>
          </div>

          <div className="phone">
            <div className="content">
              <h4>Téléphone</h4>
              <CopyToClipboard text="05 84 84 09 30" className="hover">
                <p
                  style={{ cursor: "pointer" }}
                  className="clipboard"
                  onClick={() => alert("Téléphone copié")}
                >
                  05 8484 0930
                </p>
              </CopyToClipboard>
            </div>
          </div>

          <div className="email">
            <div className="content">
              <h4>Email</h4>
              <CopyToClipboard text="2kange.eli@gmail.com" className="hover">
                <p
                  style={{ cursor: "pointer" }}
                  className="clipboard"
                  onClick={() => alert("Email copié")}
                >
                  2kange.eli@gmail.com
                </p>
              </CopyToClipboard>
            </div>
          </div>
          <SocialNetWork />
          <div className="credits">
            <p>Ange Elisée - 2022</p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Contact;
