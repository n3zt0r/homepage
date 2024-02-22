import LoadingPanels from "../components/LoadingPanels";
import HorizontalAutoScrollGallery from "../components/Projects/HorizontalAutoScrollGallery";

function Projects() {
  return (
    <div className="grid place-content-center text-center grid-flow-row grid-rows-[1fr_6fr]">
      <h2 className="grid place-content-center text-5xl sm:text-6xl font-bold text-gray-800">
        Mis proyectos
      </h2>
      <HorizontalAutoScrollGallery />

      <LoadingPanels />
    </div>
  );
}

export default Projects;
