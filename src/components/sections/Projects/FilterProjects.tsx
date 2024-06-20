import { ProjectType } from "@/i18n/config";
import { useState } from "react";

interface Props {
  arrayProject: [];
  setProjectList: (projects: ProjectType[]) => void;
}

const FilterProjects = ({ arrayProject, setProjectList }: Props) => {

 const [tech, setTech] = useState("All")

  const uniqueTechnologies: string[] = Array.from(
    new Set(
      arrayProject.flatMap((project: ProjectType) =>
        project.technologies.map((technology) => technology.name),
      ),
    ),
  );

  const handleFilterProjects = (tech: string) => {
    if (tech === "All") {
        setTech("All")
      setProjectList(arrayProject);
    } else {
      const filteredProjects = arrayProject.filter((project: ProjectType) =>
        project.technologies.some((t) => t.name === tech),
      );
      setTech(tech)
      setProjectList(filteredProjects);
    }
  };

  return (
    <div className="mb-12 flex w-full flex-wrap gap-3 border-b border-[#02367D]/10 py-5">
        <button
          onClick={() => handleFilterProjects("All")}
          className={`cursor-pointer rounded-lg border border-[#02367D]/10 px-2 py-1 text-center text-sm font-semibold text-gray-dark/80 transition-all hover:bg-[#1011d1]/60 hover:text-white dark:bg-[#1011d1]/20 dark:text-white dark:hover:bg-[#1011d1] ${tech === "All" ? "bg-[#1011d1]/60 text-white" : ""}`}
        >
          All
        </button>
      {uniqueTechnologies.map((name, index) => (
        <button
          key={index}
          onClick={() => handleFilterProjects(name)}
          className={`cursor-pointer rounded-lg border border-[#02367D]/10 px-2 py-1 text-center text-sm font-semibold text-gray-dark/80 transition-all hover:bg-[#1011d1]/60 hover:text-white dark:bg-[#1011d1]/20 dark:text-white dark:hover:bg-[#1011d1] ${tech === name ? "bg-[#1011d1]/60 text-white" : ""}`}
        >
          {name}
        </button>
      ))}
    </div>
  );
};

export default FilterProjects;
