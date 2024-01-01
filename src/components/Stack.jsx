import React from "react";
import { Icon } from "@iconify/react";

const technologies = [
  { icon: "skill-icons:html", name: "HTML" },
  { icon: "skill-icons:css", name: "CSS" },
  { icon: "skill-icons:tailwindcss-dark", name: "Tailwind" },
  { icon: "vscode-icons:file-type-js-official", name: "JavaScript" },
  { icon: "skill-icons:react-dark", name: "React" },
  { icon: "vscode-icons:file-type-node", name: "Node.js" },
  { icon: "skill-icons:mongodb", name: "MongoDB" },
  { icon: "skill-icons:expressjs-dark", name: "Express.js" },
];

const Stack = () => (
  <div className="mx-auto max-w-xl mt-6 px-4 mb-6">
    <div className="mt-2 flex flex-col items-center sm:flex-row">
      <h3 className="text-lg font-montserrat font-bold mb-2 sm:mb-0 sm:mr-4 text-neutral-800 dark:text-neutral-200">Stack |</h3>
      <ul className="flex flex-wrap justify-center sm:justify-start space-x-2">
        {technologies.map(({ icon, name }, index) => (
          <React.Fragment key={index}>
            <li className="text-center mb-4 sm:mb-0 sm:mr-2">
              <Icon icon={icon} width="40" height="40" />
              <p className="text-xs mt-2 text-neutral-700 dark:text-neutral-300">{name}</p>
            </li>
          </React.Fragment>
        ))}
      </ul>
    </div>
  </div>
);

export default Stack;
