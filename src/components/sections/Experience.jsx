import React from "react";
import ExperienceItem from "../../helpers/ExperienceItem";

const Experience = () => {
  const experiences = [
    {
      year: "2022-presente",
      title: "Desarrollador Freelance",
      description: "He diseñado y desarrollado aplicaciones dirigidas a usuarios que buscan establecer presencia en internet, ofreciendo soluciones que han atraído con éxito a una mayor cantidad de clientes para sus negocios.",
      technologies: "Figma, React, Tailwind, Node.js, Express.js MongoDB"
    },
  ];

  return (
    <>
      <div name='experience' className="px-4 sm:px-8 md:px-16 lg:px-32 py-2 mb-6 font-poppins text-sm">
        <h2 className="text-lg font-montserrat font-bold dark:text-cyan-50">Experiencia</h2>
        {experiences.map((experience, index) => (
          <ExperienceItem key={index} experience={experience} />
        ))}
      </div>
    </>
  );
};

export default Experience;
