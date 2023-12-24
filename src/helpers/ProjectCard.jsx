import React from 'react';
import { FaGithub, FaLink } from 'react-icons/fa';

const ProjectCard = ({
  title,
  description,
  repoLink,
  projectLink,
  technologies,
  imageUrl,
}) => {
  return (
    <div className="mx-auto mb-2 p-2 overflow-hidden">
      <div className="flex flex-col sm:flex-row">
        <div className="h-40  sm:w-3/6 rounded overflow-hidden mb-4 lg:mb-0 flex items-center justify-center">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover rounded"
          />
        </div>
        <div className="sm:ml-4 flex-1">
          <div className="font-poppins">
            <h2 className="text-base">{title}</h2>
            <p className="text-sm dark:text-blue-200">{description}</p>
            <div className="mt-2">
              <p className="text-xs mb-2">{technologies}</p>
            </div>
          </div>
          <div className="mt-2 lg:mt-0 flex space-x-4 sm:justify-start justify-center">
            <a
              href={repoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center mb-2 hover:text-blue-500"
              style={{ cursor: 'pointer' }}
            >
              <FaGithub className="mr-1" />
              <span className="text-sm">Repositorio</span>
            </a>
            <a
              href={projectLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center mb-2 hover:text-blue-500"
              style={{ cursor: 'pointer' }}
            >
              <FaLink className="mr-1" />
              <span className="text-sm">Ver</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
