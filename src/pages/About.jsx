import CardInfo from "../components/About/CardInfo";
import LoadingPanels from "../components/LoadingPanels";

function About() {
  return (
    <div className="h-full">
      <div className="w-full">
        <CardInfo />
      </div>
      <LoadingPanels />
    </div>
  );
}

export default About;