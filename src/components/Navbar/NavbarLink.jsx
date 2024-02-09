import { useState } from "react";
import { Link } from "react-router-dom";

function NavbarLink({ to, text, icon, expanded, setExpanded }) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };
  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <li>
      {!expanded && isHovered && (
        <div className="absolute left-12 bg-gray-200 px-2 py-1 shadow-md">
          {text}
        </div>
      )}

      <Link
        to={to}
        className="text-white hover:text-gray-400 whitespace-nowrap flex mt-5"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={() => setExpanded(false)}
      >
        <span className="mr-5 select-none">{icon}</span>
        {text}
      </Link>
    </li>
  );
}

NavbarLink.propTypes = String;

export default NavbarLink;
