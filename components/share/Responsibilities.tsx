import A11yIcon from "/public/images/responsibilities/a11y.svg";
import TechShareIcon from "/public/images/responsibilities/demo.svg";
import DesignIcon from "/public/images/responsibilities/design.svg";
import WorketupIcon from "/public/images/responsibilities/file-system.svg";
import LanguageIcon from "/public/images/responsibilities/language.svg";
import LibraryIcon from "/public/images/responsibilities/library.svg";
import ManagementIcon from "/public/images/responsibilities/management.svg";
import PaperIcon from "/public/images/responsibilities/paper.svg";
import SystemIcon from "/public/images/responsibilities/system.svg";
import TestIcon from "/public/images/responsibilities/test.svg";

const responsibilities = [
  {
    name: "Research",
    icon: <SystemIcon className="w-6" aria-label="System Design" />,
  },
  {
    name: "Python",
    icon: <SystemIcon className="w-6" aria-label="Python" />,
  },
  {
    name: "Linux",
    icon: <SystemIcon className="w-6" aria-label="Linux" />,
  },
  {
    name: "Paper Work",
    icon: (
      <PaperIcon
        className="w-6 text-gray-500 dark:text-gray-300"
        aria-label="Paper Work"
      />
    ),
  },
];

export default function Responsibilities() {
  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:gap-8">
      {responsibilities.map((r) => (
        <span
          key={r.name}
          className="inline-flex flex-col items-center justify-center gap-1 text-sm"
        >
          {r.icon}
          <span>{r.name}</span>
        </span>
      ))}
    </div>
  );
}
