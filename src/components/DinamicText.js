import React, { useEffect } from "react";

const DinamicText = () => {
  useEffect(() => {
    const target = document.getElementById("text-target");
    let array = ["Devéloppement", "Infographafie", "Formation"];
    let wordIndex = 0;
    let letterIndex = 0;

    const createLetter = () => {
      const letter = document.createElement("span");
      target.appendChild(letter);

      letter.classList.add("letter");
      letter.style.opacity = 0;
      letter.style.animation = "anim 5s ease forwards";
      letter.textContent = array[wordIndex][letterIndex];

      setTimeout(() => {
        letter.remove();
      }, 2000);
    };

    const loop = () => {
      if (wordIndex >= array.length) {
        wordIndex = 0;
        letterIndex = 0;
        loop();
      } else if (letterIndex < array[wordIndex].length) {
        setTimeout(() => {
          //+1
          createLetter();
          letterIndex++;
          loop();
        }, 80);
      } else {
        letterIndex = 0;
        wordIndex++;
        setTimeout(loop, 2000);
      }
    };
    loop();
  }, []);
  return (
    <span className="dynamic-text">
      <span>Services</span>
      <span id="text-target"></span>
    </span>
  );
};

export default DinamicText;
