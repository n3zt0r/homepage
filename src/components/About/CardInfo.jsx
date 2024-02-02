const CardInfo = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-200">
      <div className="text-center md:text-left w-3/4 md:max-w-xl h-[450px] md:h-64 flex flex-col md:flex-row items-center bg-gray-100 shadow-gray-800 shadow-md">
        <img
          className="shadow-gray-800 shadow-md mt-[-2rem] md:mt-0 ml-0 md:ml-[-2rem] size-[170px]"
          src="./foto.jpg"
          alt="Profile picture"
        />
        <div className="ml-6">
          <h2 className="text-3xl font-bold mb-2 mt-5 md:mt-0">Acerca de...</h2>
          <p className="text-gray-700 h-1/3 pr-9">
            Soy un ingeniero industrial con habilidades en diseño gráfico y
            experiencia como operador de bombero hidráulico. Mi pasión por la
            tecnología y habilidad para resolver problemas me permiten crear
            soluciones web innovadoras y efectivas como desarrollador web.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CardInfo;
