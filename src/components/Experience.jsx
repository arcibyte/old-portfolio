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
        className="mx-auto max-w-xl px-4 mt-6 mb-6 font-poppins text-sm"
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
