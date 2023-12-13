import React from "react";
import projectImage from "../assets/project.webp";
import { FaGithub, FaLink } from "react-icons/fa";

const ProjectCard = ({
  title, description, repoLink, projectLink, technologies,
}) => {
  return (
    <div className="mx-auto mb-2 p-2 overflow-hidden">
      <div className="flex space-x-4 mt-2 justify-between">
        <a
          href={repoLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center mb-2 hover:text-blue-500"
          style={{ cursor: "pointer" }}
        >
          <FaGithub className="mr-1" />
          <span className="text-sm" >Repositorio</span>
        </a>
        <a
          href={projectLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center mb-2 hover:text-blue-500"
          style={{ cursor: "pointer" }}
        >
          <FaLink className="mr-1" />
          <span className="text-sm">Ver</span>
        </a>
      </div>
      <div className="h-40 rounded overflow-hidden flex items-center justify-center">
        <img
          src={projectImage}
          alt={title}
          className="w-full h-full object-cover rounded"
        />
      </div>
      <div className="mt-2 text-center font-poppins">
        <h2 className="text-sm">{title}</h2>
        <p  className="text-sm text-[#AAB7B8]">{description}</p>

        <div className="mt-2">
          <p className="text-xs" >{technologies}</p>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <div
      name="projects"
      className="px-4 sm:px-8 md:px-16 lg:px-32 mt-2 max-w-screen-lg mx-auto mb-2"
    >
      <h2 className="text-lg mb-4 font-montserrat">Proyectos</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <ProjectCard
          title="Proyecto 1"
          description="Descripción del Proyecto 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          repoLink="enlace-a-repositorio-proyecto1"
          projectLink="enlace-a-proyecto1"
          technologies="React, Tailwind, Vercel"
        />
        <ProjectCard
          title="Proyecto 2"
          description="Descripción del Proyecto 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          repoLink="enlace-a-repositorio-proyecto2"
          projectLink="enlace-a-proyecto2"
          technologies="React, Tailwind, Vercel"
        />
        <ProjectCard
          title="Proyecto 3"
          description="Descripción del Proyecto 3. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          repoLink="enlace-a-repositorio-proyecto3"
          projectLink="enlace-a-proyecto3"
          technologies="React, Tailwind, Vercel"
        />
        <ProjectCard
          title="Proyecto 4"
          description="Descripción del Proyecto 4. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          repoLink="enlace-a-repositorio-proyecto4"
          projectLink="enlace-a-proyecto4"
          technologies="React, Tailwind, Vercel"
        />
        <ProjectCard
          title="Proyecto 3"
          description="Descripción del Proyecto 3. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          repoLink="enlace-a-repositorio-proyecto3"
          projectLink="enlace-a-proyecto3"
          technologies="React, Tailwind, Vercel"
        />
        <ProjectCard
          title="Proyecto 4"
          description="Descripción del Proyecto 4. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          repoLink="enlace-a-repositorio-proyecto4"
          projectLink="enlace-a-proyecto4"
          technologies="React, Tailwind, Vercel"
        />
      </div>
        </div>
  );
};

export default Projects;
