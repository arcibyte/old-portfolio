import React from "react";

const ExperienceItem = ({ experience }) => (
  <div className="flex flex-col sm:flex-row mt-4">
    <div className="text-[#f4f6ff] flex-shrink-0 sm:w-24 md:w-28 lg:w-32 mb-2 sm:mb-0">
      {experience.year}
    </div>
    <div>
      <h6 className="text-[#f4f6ff] mb-2">{experience.title}</h6>
      <p className="text-[#bdc8f1]">{experience.description}</p>
      <p className="text-xs mt-2 text-[#f4f6ff]">{experience.technologies}</p>
    </div>
  </div>
);

export default ExperienceItem;
