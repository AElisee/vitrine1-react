import React from "react";

const anim = () => {
  const icons = document.querySelectorAll(".social-network a");
  icons.forEach((link) => {
    link.addEventListener("mouseover", (e) => {
      console.log("ok");
      link.style.transform = `translate(${e.offsetX - 20}px, ${
        e.offsetY - 13
      }px)`;
    });

    link.addEventListener("mouseleave", () => {
      link.style.transform = "";
    });
  });
};

const SocialNetWork = () => {
  return (
    <div className="social-network">
      <ul className="content">
        <a
          href="https://web.facebook.com/angeelysee.magalyster/"
          target="_blank"
          rel=" noreferrer noopener"
          className="hover"
          onMouseOver={anim}
        >
          <li>
            <i className="fab fa-facebook-f"></i>
          </li>
        </a>

        <a
          href="https://www.twitter.com"
          target="_blank"
          rel=" noreferrer noopener"
          className="hover"
          onMouseOver={anim}
        >
          <li>
            <i className="fab fa-twitter"></i>
          </li>
        </a>
        <a
          href="https://www.instagram.com"
          target="_blank"
          rel=" noreferrer noopener"
          className="hover"
          onMouseOver={anim}
        >
          <li>
            <i className="fab fa-instagram"></i>
          </li>
        </a>
      </ul>
    </div>
  );
};

export default SocialNetWork;
