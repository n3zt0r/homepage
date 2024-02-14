function ContactLink({ link, icon, text }) {
  return (
    <a
      href={link}
      rel="noreferrer"
      target="_blank"
      className="flex items-center max-sm:mx-8"
    >
      <img
        src={icon}
        alt={text}
        className="relative hover:scale-125 ease-out duration-200"
      />

      <span className="sm:hidden ml-3 text-gray-200">{text}</span>
    </a>
  );
}

ContactLink.propTypes = String;

export default ContactLink;
