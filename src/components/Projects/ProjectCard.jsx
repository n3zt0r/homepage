function ProjectCard({ page }) {
  const { name, img, url, dev, techs, tools } = page;
  console.log(techs);

  return (
    <div className="max-sm:w-[90%]">
      <a
        href={url}
        rel="noreferrer"
        target="_blank"
        className="max-sm:px-6 group mx-6 mt-9 max-sm:min-w-full max-w-[480px] h-auto bg-gray-100 shadow-md grid place-content-center hover:scale-105 ease-out duration-200"
      >
        {/********************* Image *********************/}
        <img
          src={img}
          className="relative left-1/2 -translate-x-1/2 w-[400px] max-sm:max-w-[90%] shadow-gray-800 shadow-md translate-y-[-20px] group-hover:scale-105 ease-out duration-200"
        />

        {/****************** Development ******************/}
        <div>
          <p className="*:lg:text-sm *:text-[10px] *:border-[3px] *:font-bold *:rounded-md *:px-2 *:py-1 *:my-3 *:mx-1">
            <span
              className={`${
                dev === "FS"
                  ? "text-gray-500 border-gray-500"
                  : "text-gray-300 border-gray-300"
              }`}
            >
              Full-Stack
            </span>
            <span
              className={`${
                dev === "FE"
                  ? "text-gray-500 border-gray-500"
                  : "text-gray-300 border-gray-300"
              }`}
            >
              Front-End
            </span>
            <span
              className={`${
                dev === "BE"
                  ? "text-gray-500 border-gray-500"
                  : "text-gray-300 border-gray-300"
              }`}
            >
              Back-End
            </span>
          </p>
        </div>

        {/********************** Title **********************/}
        <h2 className="max-sm:p-3 text-3xl font-bold mt-3">{name}</h2>

        <div className="bg-gray-200 text-start flex gap-6 mt-2 mb-6 text-gray-800 px-6 py-3">
          {/******************* Technologies *******************/}

          <div>
            <h3 className="text-base font-bold">Tecnologías usadas:</h3>
            <ul className="mt-2">
              {techs.map((tech) => (
                <li className="text-sm font-semibold">
                  <span className="text-gray-500">• </span>
                  {tech.name}{" "}
                  <span className="text-gray-500 text-[10px]">{tech.ver}</span>
                </li>
              ))}
            </ul>
          </div>

          {/********************** Tools **********************/}
          <div>
            <h3 className="text-base font-bold">Herramientas usadas:</h3>
            <ul className="mt-2">
              {tools.map((tool) => (
                <li className="text-sm font-semibold">
                  <span className="text-gray-500">• </span>
                  {tool}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </a>
    </div>
  );
}

ProjectCard.propTypes = String;

export default ProjectCard;
