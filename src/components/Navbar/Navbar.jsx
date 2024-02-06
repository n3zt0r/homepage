import { useState } from "react";
import NavbarLink from "./NavbarLink";
import NavbarMenuButton from "./NavbarMenuButton";
import HomeIcon from "./icons/HomeIcon";
import AboutIcon from "./icons/AboutIcon";
import ProjectsIcon from "./icons/ProjectsIcon";
import SkillsIcon from "./icons/SkillsIcon";

function Navbar() {
  const [expanded, setExpanded] = useState(false);
  const iconSize = "25";

  const toggleNavbarWidth = () => {
    setExpanded(!expanded);
  };

  return (
    <nav
      className={`bg-gray-800 p-4 flex flex-col justify-between h-screen ${
        expanded ? "w-44" : "w-14"
      } transition-all overflow-hidden z-50`}
    >
      <ul className="mb-4">
        <NavbarMenuButton onClick={toggleNavbarWidth} expanded={expanded} />
        <NavbarLink
          to={"/"}
          text={"Home"}
          icon={<HomeIcon size={iconSize} />}
          expanded={expanded}
          setExpanded={setExpanded}
        />
      </ul>

      <ul className="space-y-2">
        <NavbarLink
          to={"about"}
          text={"About"}
          icon={<AboutIcon size={iconSize} />}
          expanded={expanded}
          setExpanded={setExpanded}
        />
        <NavbarLink
          to={"skill"}
          text={"Skills"}
          icon={<SkillsIcon size={iconSize} />}
          expanded={expanded}
          setExpanded={setExpanded}
        />
        <NavbarLink
          to={"projects"}
          text={"My projects"}
          icon={<ProjectsIcon size={iconSize} />}
          expanded={expanded}
          setExpanded={setExpanded}
        />
      </ul>
    </nav>
  );
}

export default Navbar;
