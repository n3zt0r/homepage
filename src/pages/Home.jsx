import AnimatedText from "../components/Home/AnimatedText";

function Home() {
  return (
    <div className="select-none text-center sm:text-left max-sm:h-[420px] max-sm:grid max-sm:place-content-center">
      <h1 className="font-bold text-6xl sm:text-7xl md:text-8xl text-gray-800 mb-3 sm:mb-0">
        Nestor López
      </h1>
      <AnimatedText text="Web Developer" />
    </div>
  );
}

export default Home;
