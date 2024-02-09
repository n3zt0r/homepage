const CardInfo = () => {
  return (
    <div className="max-sm:mt-[2rem] ml-0 md:ml-[1rem] text-center md:text-left flex flex-col md:flex-row items-center bg-gray-100 shadow-gray-800 shadow-md">
      <img
        className="shadow-gray-800 shadow-md mt-[-2rem] md:mt-0 ml-0 md:ml-[-2rem] size-[170px]"
        src="./foto.jpg"
        alt="Profile picture"
      />
      <div className="text-gray-800 px-10 py-7">
        <h2 className="text-3xl font-bold mb-3">Acerca de...</h2>
        <p>
          Soy un ingeniero industrial con habilidades en diseño gráfico y
          experiencia como operador de bombero hidráulico. Mi pasión por la
          tecnología y habilidad para resolver problemas me permiten crear
          soluciones web innovadoras y efectivas como desarrollador web.
        </p>
      </div>
    </div>
  );
};

export default CardInfo;
