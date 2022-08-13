import React, { useEffect } from "react";

const DinamicText = () => {
  useEffect(() => {
    const target = document.getElementById("text-target");
    let dynamicWord = ["simple", "clear", "smart", "strong"];
    let wordIndex = 0;
    let letterIndex = 0;

    const createLetter = () => {
      const letter = document.createElement("span");
      target.appendChild(letter);

      letter.classList.add("letter");
      letter.style.opacity = 0;
      letter.style.animation = "anim 5s ease forwards";
      letter.textContent = dynamicWord[wordIndex][letterIndex];

      setTimeout(() => {
        letter.remove();
      }, 2000);
    };

    const loop = () => {
      if (wordIndex >= dynamicWord.length) {
        wordIndex = 0;
        letterIndex = 0;
        loop();
      } else if (letterIndex < dynamicWord[wordIndex].length) {
        setTimeout(() => {
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
      <span>simply</span>
      <span id="text-target"></span>
    </span>
  );
};

export default DinamicText;
