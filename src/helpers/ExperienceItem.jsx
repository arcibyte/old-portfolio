import React from "react";

const ExperienceItem = ({ experience }) => (
  <div className="flex flex-col sm:flex-row mt-4">
    <div className="flex-shrink-0 sm:w-24 md:w-28 lg:w-32 mb-2 sm:mb-0 dark:text-white">
      {experience.year}
    </div>
    <div className="dark:text-white">
      <p className="mb-2">{experience.title}</p>
      <p className="dark:text-blue-200">{experience.description}</p>
      <p className="text-xs mt-2">{experience.technologies}</p>
    </div>
  </div>
);

export default ExperienceItem;
