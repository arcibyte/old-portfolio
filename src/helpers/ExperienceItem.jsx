import React from "react";

const ExperienceItem = ({ experience }) => (
  <div className="flex flex-col sm:flex-row mt-4">
    <div className="flex-shrink-0 sm:w-24 md:w-28 lg:w-32 mb-2 sm:mb-0 mr-2 text-xs text-neutral-800 dark:text-neutral-400">
      {experience.year}
    </div>
    <div className="text-neutral-800 dark:text-neutral-100">
      <p className="mb-2 text-neutral-900 dark:text-neutral-100">{experience.title}</p>
      <p className="text-neutral-700 dark:text-neutral-400">{experience.description}</p>
      <p className="text-xs mt-2 text-neutral-900 dark:text-neutral-400">{experience.technologies}</p>
    </div>
  </div>
);

export default ExperienceItem;
