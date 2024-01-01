import React from "react";

const About = () => {
  return (
    <div className="mt-4 mb-6 mx-auto max-w-xl px-4">
      <h2 className="text-lg font-montserrat font-bold o mb-2 text-neutral-800 dark:text-neutral-200">
        Sobre mí
      </h2>
      <div className="font-poppins text-sm text-neutral-700 dark:text-neutral-400">
        <p className="mb-3">
          Escribí mis primeras líneas de código en 2019 con Java mientras
          cursaba mis últimos años de colegio. Disfrutaba aprendiendo y
          resolviendo problemas. Mi interés por la programación me llevó a
          aprender más y así es como me encuentro ahora, desarrollando en la
          web.
        </p>
        <p>
          Me apasiona crear productos integrales, desde su concepción hasta su
          implementación. Mi enfoque está puesto en el desarrollo de
          experiencias intuitivas que se ajustan a las necesidades de cada
          usuario.
        </p>
      </div>
    </div>
  );
};

export default About;
