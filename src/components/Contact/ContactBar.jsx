function ContactBar() {
  return (
    <div
      className="bg-gray-100 text-gray-400 p-4 flex flex-col justify-center items-center gap-10 h-screen w-14
    overflow-hidden z-50"
    >
      <a href="mailto:n3zt0r77@gmail.com" rel="noreferrer" target="_blank">
        <img src="./contact/gmail.svg" alt="Correo" />
      </a>
      <a href="https://wa.me/528333854677" rel="noreferrer" target="_blank">
        <img src="./contact/whatsapp.svg" alt="Whatsapp" />
      </a>
      <a href="https://t.me/NestorJLP" rel="noreferrer" target="_blank">
        <img src="./contact/telegram.svg" alt="Telegram" />
      </a>
      <a
        href="https://www.linkedin.com/in/nestor-jesús-lópez-pérez-83026514b/"
        rel="noreferrer"
        target="_blank"
      >
        <img src="./contact/linkedin.svg" rel="noreferrer" alt="LinkedIn" />
      </a>
      <a href="https://github.com/n3zt0r" rel="noreferrer" target="_blank">
        <img src="./contact/github.svg" alt="GitHub" />
      </a>
      <a href="https://twitter.com/n3zt0r77" rel="noreferrer" target="_blank">
        <img src="./contact/twitterx.svg" alt="Twitter (X)" />
      </a>
    </div>
  );
}

export default ContactBar;
