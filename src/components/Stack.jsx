import React from "react";
import { Icon } from "@iconify/react";

const technologies = [
  { icon: "skill-icons:html", name: "HTML" },
  { icon: "skill-icons:css", name: "CSS" },
  { icon: "vscode-icons:file-type-js-official", name: "JavaScript" },
  { icon: "skill-icons:react-dark", name: "React" },
  { icon: "skill-icons:tailwindcss-dark", name: "Tailwind" },
  { icon: "vscode-icons:file-type-node", name: "Node.js" },
  { icon: "skill-icons:mongodb", name: "MongoDB" },
  { icon: "skill-icons:expressjs-dark", name: "Express.js" },
];

const Stack = () => (
  <div className="px-4 sm:px-8 md:px-16 lg:px-32">
    <div className="mt-2 flex flex-col items-center sm:flex-row">
      <h4 className="text-lg font-montserrat mb-2 sm:mb-0 sm:mr-4 font-bold text-[#f4f6ff]">Stack |</h4>
      <ul className="flex flex-wrap justify-center sm:justify-start space-x-2">
        {technologies.map(({ icon, name }, index) => (
          <React.Fragment key={index}>
            <li className="text-center mb-4 sm:mb-0 sm:mr-2 transition-transform transform hover:scale-110">
              <Icon icon={icon} width="40" height="40" />
              <p className="text-xs mt-2">{name}</p>
            </li>
          </React.Fragment>
        ))}
      </ul>
    </div>
  </div>
);

export default Stack;
