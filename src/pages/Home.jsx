import AnimatedText from "../components/AnimatedText";

function Home() {
  return (
    <div className="bg-gray-200 h-screen grid place-content-center">
      <div className="select-none text-center sm:text-left">
        <h1 className="font-bold text-6xl sm:text-7xl md:text-8xl text-gray-800 mb-3 sm:mb-0">
          Nestor López
        </h1>
        <AnimatedText text="Web Developer" />
      </div>
    </div>
  );
}

export default Home;
