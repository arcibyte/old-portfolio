import React from "react";

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
    <div name='experience' className="px-4 sm:px-8 md:px-16 lg:px-32 py-2 mb-6 font-poppins text-sm">
      <h2 className="text-lg font-montserrat">Experiencia</h2>
      
      {experiences.map((experience, index) => (
        <div key={index} className="flex flex-col sm:flex-row mt-4">
          <div className="text-[#AAB7B8] flex-shrink-0 sm:w-24 md:w-28 lg:w-32 mb-2 sm:mb-0">
            {experience.year}
          </div>
          <div>
            <h6 className="text-[#ffffff] mb-2">{experience.title}</h6>
            <p className="text-[#AAB7B8]">{experience.description}</p>
            <p className="text-xs mt-2">{experience.technologies}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Experience;
