import LoadingPanels from "../components/LoadingPanels";
import HorizontalAutoScrollGallery from "../components/Projects/HorizontalAutoScrollGallery";

function Projects() {
  return (
    <div className="grid place-content-center text-center">
      <h2 className="text-5xl sm:text-6xl font-bold text-gray-800 mb-20 sm:mb-30">
        Mis proyectos
      </h2>
      <HorizontalAutoScrollGallery />

      <LoadingPanels />
    </div>
  );
}

export default Projects;
