import React from "react";
import { FaGithub, FaLink } from "react-icons/fa";
import { Link } from "react-router-dom";

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
      <div className="flex flex-col sm:flex-row bg-neutral-200 dark:bg-neutral-900">
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
            <p className="text-sm text-neutral-700 dark:text-neutral-400">
              {description}
            </p>
            <div className="mt-2">
              <p className="text-xs mb-2 text-neutral-700 dark:text-neutral-400">
                {technologies}
              </p>
            </div>
          </div>
          <div className="mt-2 lg:mt-0 flex space-x-4 sm:justify-start justify-center ">
            <Link
              to={repoLink}
              className="flex items-center mb-2 hover:bg-emerald-600 py-2 px-2 text-neutral-800 dark:text-neutral-200 bg-neutral-300 dark:bg-neutral-800 font-poppins rounded-full"
            >
              <FaGithub className="mr-1" />
              <span className="text-xs">Repositorio</span>
            </Link>
            <Link
              to={projectLink}
              className="flex items-center mb-2 hover:bg-emerald-600 py-2 px-3 text-neutral-800 dark:text-neutral-200 bg-neutral-300 dark:bg-neutral-800 rounded-full"
            >
              <FaLink className="mr-1" />
              <span className="text-xs">Ver</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
