function ProjectCard({ name, img, url }) {
  return (
    <div>
      <a
        href={url}
        rel="noreferrer"
        target="_blank"
        className="group mx-6 my-9 max-w-[480px] max-h-[220px] bg-gray-100 shadow-md grid place-content-center hover:scale-105 ease-out duration-200"
      >
        <img
          src={img}
          className="w-[400px] shadow-gray-800 shadow-md translate-y-[-20px] group-hover:scale-105 ease-out duration-200"
        />
        <h2 className="text-3xl font-semibold mt-3 translate-y-[-20px]">
          {name}
        </h2>
      </a>
    </div>
  );
}

ProjectCard.propTypes = String;

export default ProjectCard;
