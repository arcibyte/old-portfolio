import React from "react";
import ExperienceItem from "../helpers/ExperienceItem";

const Experience = () => {
  const experiences = [
    {
      year: "jun 2022 - presente",
      title: "Desarrollador Freelance",
      description:
        "He creado aplicaciones para usuarios que desean destacar en línea, generando soluciones exitosas que atraen a más clientes a sus negocios.",
      technologies: "React, Tailwind, Node.js, MongoDB, Express.js"
    },
  ];

  return (
    <>
      <div
        name="experience"
        className="px-4 sm:px-8 md:px-16 lg:px-32 py-2 mt-4 mb-4 font-poppins text-sm"
      >
        <h2 className="text-lg font-montserrat font-bold text-neutral-800 dark:text-neutral-200">
          Experiencia
        </h2>
        {experiences.map((experience, index) => (
          <ExperienceItem key={index} experience={experience} />
        ))}
      </div>
    </>
  );
};

export default Experience;
