import React from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import Buttons from "../components/Buttons";
import ContactForm from "../components/ContactForm";
import Logo from "../components/Logo";
import Navigation from "../components/Navigation";
import SocialNetwork from "../components/SocialNetwork";
import { motion } from "framer-motion";

const Contact = () => {
  const pageAnimate = {
    in: {
      opacity: 1,
      x: 0,
    },
    out: {
      opacity: 0,
      x: 200,
      ease: [0.54, 0.64, 0.46, 0.78],
    },
  };
  return (
    <main>
      <motion.div
        className="contact"
        initial="out"
        animate="in"
        exit="out"
        variants={pageAnimate}
        transition={{ duration: 0.5 }}
      >
        <Navigation />
        <Logo />
        <ContactForm />
        <div className="contact-infos">
          <div className="address">
            <div className="content">
              <h1>address</h1>
              <p>Avenue A58 Dr. Crozet</p>
              <p>Plateau Abidjan</p>
            </div>
          </div>
          <div className="phone">
            <div className="content">
              <h4>Telephone</h4>
              <CopyToClipboard text="05 017 014 71">
                <p
                  style={{ cursor: "copy" }}
                  className="clipboard"
                  onClick={() => alert("Téléphone copié")}
                >
                  05 017 014 71
                </p>
              </CopyToClipboard>
            </div>
          </div>
          <div className="email">
            <div className="content">
              <h4>Email</h4>
              <CopyToClipboard text="Elishaagency@gmail.com">
                <p
                  style={{ cursor: "copy" }}
                  className="clipboard"
                  onClick={() => alert("Email copié")}
                >
                  Elishaagency@gmail.com
                </p>
              </CopyToClipboard>
            </div>
          </div>
          <SocialNetwork />
          <div className="credits">
            <p>Elisha - 2022</p>
          </div>
        </div>
        <Buttons left={"/projet-4"} />
      </motion.div>
    </main>
  );
};

export default Contact;
