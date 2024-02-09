import { useState } from "react";
import ContactLink from "./ContactLink";

function ContactBar() {
  const [isHidden, setHidden] = useState(true);

  const toggleHidden = () => {
    setHidden(!isHidden);
  };

  return (
    <div className="bg-gray-100 text-gray-800 grid sm:place-content-center h-14 sm:h-full sm:w-14 overflow-hidden">
      <h2
        className="text-gray-100 bg-gray-800 w-full pt-3 pb-4 text-center text-xl sm:hidden max-sm:col-span-2 cursor-pointer"
        onClick={toggleHidden}
      >
        Contactame
      </h2>

      <div
        className={`${
          isHidden ? "max-sm:hidden" : "max-sm:absolute"
        } max-sm:bg-gray-800 max-sm:bg-opacity-90 max-sm:w-screen max-sm:h-screen max-sm:top-0 max-sm:left-0 grid place-content-center`}
      >
        <div className="relative sm:p-3 px-4 py-10 flex flex-col justify-center items-center gap-10 bg-gray-100 sm:h-80">
          <img
            src="./buttons/menu_x.svg"
            className="absolute top-2 left-2 sm:hidden cursor-pointer"
            onClick={toggleHidden}
          />

          <ContactLink
            link="mailto:n3zt0r77@gmail.com"
            icon="./contact/gmail.svg"
            text="Correo"
          />

          <ContactLink
            link="https://wa.me/528333854677"
            icon="./contact/whatsapp.svg"
            text="Whatsapp"
          />

          <ContactLink
            link="https://t.me/NestorJLP"
            icon="./contact/telegram.svg"
            text="Telegram"
          />

          <ContactLink
            link="https://www.linkedin.com/in/nestor-jesús-lópez-pérez-83026514b/"
            icon="./contact/linkedin.svg"
            text="LinkedIn"
          />

          <ContactLink
            link="https://github.com/n3zt0r"
            icon="./contact/github.svg"
            text="GitHub"
          />

          <ContactLink
            link="https://twitter.com/n3zt0r77"
            icon="./contact/twitterx.svg"
            text="Twitter (X)"
          />
        </div>
      </div>
    </div>
  );
}

export default ContactBar;
