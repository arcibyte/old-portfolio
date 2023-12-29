import React from 'react';
import { Icon } from '@iconify/react';

const tools = [
  { icon: 'vscode-icons:file-type-vscode', name: 'VSCode' },
  { icon: 'skill-icons:git', name: 'Git' },
  { icon: 'devicon:linux', name: 'Linux' },
  { icon: 'octicon:terminal', name: 'Terminal' },
  { icon: 'logos:eslint', name: 'ESLint' },
  { icon: 'logos:npm', name: 'npm' },
  { icon: 'logos:prettier', name: 'Prettier' },
];

const Tools = () => (
  <div className="px-4 sm:px-8 md:px-16 lg:px-32 text-neutral-700 dark:text-neutral-300 mb-8">
    <div className="mt-2 flex flex-col items-center sm:flex-row">
      <h3 className="text-lg font-montserrat font-bold mb-2 sm:mb-0 sm:mr-4 text-neutral-800 dark:text-neutral-200">Herramientas |</h3>
      <ul className="flex flex-wrap justify-center sm:justify-start space-x-2">
        {tools.map(({ icon, name }, index) => (
          <React.Fragment key={index}>
            <li className="text-center mb-4 sm:mb-0 sm:mr-2">
              <Icon icon={icon} width="40" height="40" />
              <p className="text-xs mt-2 sm:text-center">{name}</p>
            </li>
          </React.Fragment>
        ))}
      </ul>
    </div>
  </div>
);

export default Tools;
