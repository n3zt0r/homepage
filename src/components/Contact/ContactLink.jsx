function ContactLink({ link, icon, text }) {
  return (
    <a
      href={link}
      rel="noreferrer"
      target="_blank"
      className="flex items-center max-sm:px-8"
    >
      <img src={icon} alt={text} />

      <span className="sm:hidden ml-3 text-gray-800">{text}</span>
    </a>
  );
}

ContactLink.propTypes = String;

export default ContactLink;
