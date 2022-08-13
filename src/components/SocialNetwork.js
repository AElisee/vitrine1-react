import React from "react";

const SocialNetwork = () => {
  const anim = () => {
    const icons = document.querySelectorAll(".social-network a");
    icons.forEach((icon) => {
      icon.addEventListener("mouseover", (e) => {
        icon.style.transform = `translate(${e.offsetX - 20}px, ${
          e.offsetY - 13
        }px)`;
      });

      icon.addEventListener("mouseleave", () => {
        icon.style.transform = "";
      });
    });
  };

  return (
    <div className="social-network">
      <div className="content">
        <ul>
          <a
            href="https://web.facebook.com/angeelysee.magalyster/"
            target="_blank"
            rel="nooppener noreferrer"
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
            rel="nooppener noreferrer"
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
            rel="nooppener noreferrer"
            className="hover"
            onMouseOver={anim}
          >
            <li>
              <i className="fab fa-instagram"></i>
            </li>
          </a>
        </ul>
      </div>
    </div>
  );
};

export default SocialNetwork;
