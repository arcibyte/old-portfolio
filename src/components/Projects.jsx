import React from 'react';
import ProjectCard from '../helpers/ProjectCard'; 
import project1Image from '../assets/1.webp';
import project2Image from '../assets/2.webp';

const Projects = () => {
  return (
    <div
      className="mx-auto max-w-xl px-4 mb-6 text-neutral-700 dark:text-neutral-300"
    >
      <h2 className="text-xl font-montserrat font-bold mb-4">Proyectos</h2>
      <div className="flex-1 sm:text-left text-center">
        <ProjectCard
          title="Proyecto 1"
          description="Descripción del Proyecto 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          repoLink="enlace-a-repositorio-proyecto1"
          projectLink="enlace-a-proyecto1"
          technologies="React, Tailwind, Vercel"
          imageUrl={project1Image}
        />
        <ProjectCard
          title="Proyecto 2"
          description="Descripción del Proyecto 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          repoLink="enlace-a-repositorio-proyecto2"
          projectLink="enlace-a-proyecto2"
          technologies="React, Tailwind, Vercel"
          imageUrl={project2Image}
        />
      </div>
    </div>
  );
};

export default Projects;
