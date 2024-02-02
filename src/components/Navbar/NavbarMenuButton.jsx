const NavbarMenuButton = ({ onClick, expanded }) => {
  return (
    <div className="border-b-2 border-gray-500 pb-3">
      <svg
        onClick={onClick}
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="cursor-pointer text-white hover:text-gray-400"
      >
        {expanded ? (
          <>
            <line
              x1="4"
              y1="6"
              x2="20"
              y2="18"
              stroke="currentColor"
              strokeWidth="2"
            />
            <line
              x1="4"
              y1="18"
              x2="20"
              y2="6"
              stroke="currentColor"
              strokeWidth="2"
            />
          </>
        ) : (
          <>
            <line
              x1="4"
              y1="6"
              x2="20"
              y2="6"
              stroke="currentColor"
              strokeWidth="2"
            />
            <line
              x1="4"
              y1="12"
              x2="20"
              y2="12"
              stroke="currentColor"
              strokeWidth="2"
            />
            <line
              x1="4"
              y1="18"
              x2="20"
              y2="18"
              stroke="currentColor"
              strokeWidth="2"
            />
          </>
        )}
      </svg>
    </div>
  );
};

NavbarMenuButton.propTypes = String;

export default NavbarMenuButton;
