import { useEffect } from "react";

const AnimatedText = ({ text }) => {
  useEffect(() => {
    animateLetter();
  }, []);

  const letters = text.split("");

  const animateLetter = () => {
    letters.forEach((_, index) => {
      const letterElement = document.getElementById(`letter-${index}`);
      if (letterElement) {
        setTimeout(() => {
          letterElement.classList.remove("invisible"); // Remove the class "hidden"
        }, index * 300); // Animation duration
      }
    });
  };

  return (
    <div>
      {letters.map((letter, index) => (
        <span
          key={index}
          id={`letter-${index}`}
          className="text-4xl ease-in-out duration-300 invisible text-gray-500"
        >
          {letter === " " ? "\u00A0" /* Non-breaking space. */ : letter}
        </span>
      ))}
    </div>
  );
};

AnimatedText.propTypes = String;

export default AnimatedText;
