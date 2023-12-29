import React from "react";

const About = () => {
  return (
    <div className="mt-4 mb-6 px-4 sm:px-8 md:px-16 lg:px-32">
      <h2 className="text-lg font-montserrat font-bold o mb-2 text-neutral-800 dark:text-neutral-200">
        Sobre mí
      </h2>
      <div className="font-poppins text-sm text-neutral-700 dark:text-neutral-300">
        <p className="mb-3">
          Escribí mis primeras líneas de código en 2019 con Java mientras
          cursaba mis últimos años de colegio. Disfrutaba aprendiendo y
          resolviendo problemas. Mi interés por la programación me llevó a
          aprender más y así es como me encuentro ahora, desarrollando en la
          web.
        </p>
        <p>
          Me apasiona la creación integral de productos, desde su concepción
          hasta su implementación. Mi enfoque se centra en el desarrollo de
          experiencias intuitivas que se ajustan a las necesidades de cada
          usuario.
        </p>
      </div>
    </div>
  );
};

export default About;
