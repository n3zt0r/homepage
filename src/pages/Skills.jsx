import LoadingPanels from "../components/LoadingPanels";

function Skills() {
  const icons = [
    { icon: "react", name: "react" },
    { icon: "tailwind", name: "tailwindcss" },
    { icon: "node", name: "node.js" },
    { icon: "js", name: "javascript" },
    { icon: "html", name: "html5" },
    { icon: "css", name: "css3" },
    { icon: "ejs", name: "embedded javascript" },
    { icon: "express", name: "expressjs" },
    { icon: "api", name: "api" },
    { icon: "github", name: "github" },
    { icon: "jquery", name: "jquery" },
    { icon: "mongodb", name: "mongodb" },
    { icon: "postgresql", name: "postgresql" },
    { icon: "python", name: "python" },
    { icon: "bootstrap", name: "bootstrap" },
    { icon: "corel-draw", name: "corel draw" },
  ];

  return (
    <div className="h-full grid grid-rows-[1fr_3fr] place-content-center">
      <div className="grid place-content-center">
        <h2 className="text-gray-800 text-5xl sm:text-6xl font-bold">
          Habilidades
        </h2>
      </div>
      <div>
        <div className="grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-8 bg-gray-100 shadow-md max-sm:mb-10 sm:m-10">
          {icons.map(({ icon, name }, index) => (
            <div
              key={index}
              className="group relative p-6 hover:scale-110 duration-300 ease-out"
            >
              <img
                src={`skills/icons/${icon}.svg`}
                alt={`Background ${index}`}
                className="w-[60px] xl:w-[80px]"
              />

              <span className="group-hover:opacity-100 opacity-0 duration-300 ease-out grid place-content-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gray-800 text-gray-200 shadow-md px-3 py-1 w-full h-full font-semibold text-lg sm:text-xl text-center select-none">
                {name}
              </span>
            </div>
          ))}
        </div>
      </div>
      <LoadingPanels />
    </div>
  );
}

export default Skills;
