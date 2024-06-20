import { useBoolean } from "@/hooks";
import ProjectDialog from "@/components/dialog/ProjectDialog";
import { useTranslation } from "react-i18next";
import { useEffect, useRef, useState } from "react";
import { ProjectType } from "@/i18n/config";
import { Icon } from "@iconify/react";
import FilterProjects from "./FilterProjects";

const Projects = () => {
  const [isOpen, setIsOpen] = useBoolean();
  const [selectedProject, setSelectedProject] = useState<
    ProjectType | undefined
  >();
  const { t } = useTranslation();
  const [projectList, setProjectList] = useState(
    t("projects.projects", { returnObjects: true }) as ProjectType[],
  );
  const targetRef = useRef<HTMLDivElement | null>(null);

  const handleProjectDetails = (project: ProjectType) => {
    setSelectedProject(project);
    setIsOpen.on();
  };

  useEffect(() => {
    const updateMousePosition = (ev: MouseEvent) => {
      if (!targetRef.current) return;
      const { clientX, clientY } = ev;
      targetRef.current.style.setProperty("--x", `${clientX}px`);
      targetRef.current.style.setProperty("--y", `${clientY}px`);
    };

    window.addEventListener("mousemove", updateMousePosition);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);

  return (
    <section
      ref={targetRef}
      className="min-h-screen w-full !snap-start bg-bluish bg-opacity-5 bg-[radial-gradient(circle_at_var(--x,_100vw)_var(--y,_100vh),_#5526ba25_0%,_transparent_50%)]  px-5 py-5 dark:bg-[rgb(15,22,36)] dark:bg-[radial-gradient(circle_at_var(--x,_20vw)_var(--y,_20vh),_#5526ba45_0%,_transparent_30%)] md:py-32 lg:px-32 2xl:py-12"
    >
      <div className="mx-auto w-full max-w-[1350px]">
        <div className="mb-12">
          <h2 className="pb-4 text-left text-5xl font-bold capitalize text-gray-dark dark:text-bluish ">
            {t("projects.title").split(" ")[0]}{" "}
            <span className=" bg-gradient-to-l from-[#16afce] to-[#156dcf] bg-clip-text !capitalize text-[transparent]">
              {t("projects.title").split(" ")[1]}
            </span>{" "}
            <span className=" bg-gradient-to-l from-[#16afce] to-[#156dcf] bg-clip-text !capitalize text-[transparent]">
              {t("projects.title").split(" ")[2]}
            </span>
          </h2>
          <p className="text-gray-dark !text-opacity-80 dark:text-bluish">
            {t("projects.subtitle")}
          </p>
        </div>
        <FilterProjects
          arrayProject={t("projects.projects", { returnObjects: true })}
          setProjectList={setProjectList}
        />
        <div className="flex flex-wrap justify-center gap-10 lg:justify-start">
          {projectList.map((item) => (
            <div
              className="group mb-[30px] w-[364px] flex flex-col items-start gap-4 justify-between rounded-xl border border-[#02367D]/10 bg-white bg-opacity-30 p-3 text-center backdrop-blur-md transition duration-[0.2] ease-linear hover:scale-[1.01] hover:!opacity-100 hover:shadow-md hover:backdrop-blur-none dark:border-[#02367D]/20 dark:bg-[#02367D]/20 dark:bg-opacity-20"
              key={item.title}
            >
              <div className=" flex flex-col items-start gap-4 ">
              <div className="inline-flex w-full items-center justify-between">
                <div className="inline-flex items-center gap-4">
                  <span className=" rounded-xl border  border-[#02367D]/10 p-1 group-hover:bg-[#1011d1]/60 group-hover:text-white dark:border-[#02367D]/80 dark:group-hover:bg-[#1011d1]">
                    <Icon icon="ic:round-code" width={18} />
                  </span>
                  <p className="font-xl font-semibold tracking-wide dark:text-white">
                    {item.title}
                  </p>
                </div>

                <span className="text-md rounded-lg px-2 py-1 text-center">
                  {item.startDate}
                </span>
              </div>

              <div className="overflow-hidden w-full bg-white/75  rounded-xl aspect-[4/3] flex p-4 items-center justify-center">
              <img
                className="object-scale-down h-[200px] object-center rounded-xl"
                src={item.images[0]}
                alt="Profile"
              />
              </div>

              <small className="inline-flex !items-center gap-2 text-xs opacity-80">
                <Icon icon="ic:round-code" width={14} />
                {item.language}
              </small>

              <div className="flex flex-wrap gap-2">
                {item.technologies.slice(0, 3).map(({name}, index) => (
                  <span
                    key={`${item.title}-tech-${index}`}
                    className="rounded-lg border border-[#02367D]/10 px-2 py-1 text-center text-sm font-semibold text-gray-dark/80 transition-all hover:ring-2 hover:ring-[#1011d1]/60 dark:bg-[#1011d1]/20 dark:text-white "
                  >
                    {name}
                  </span>
                ))}
                {item.technologies.length > 3 && (
                  <span
                    key={`${item.title}-more`}
                    className="rounded-lg border border-[#02367D]/10 px-2 py-1 text-center text-sm font-semibold text-gray-dark/80 transition-all hover:ring-2 hover:ring-[#1011d1]/60 dark:bg-[#1011d1]/20 dark:text-white "
                  >
                    +{item.technologies.length - 3} more
                  </span>
                )}
              </div>
              </div>
              

              <button
                onClick={() => handleProjectDetails(item)}
                className="w-full self-end cursor-pointer rounded-xl border border-[#02367D]/10 py-3 text-sm font-semibold transition-all group-hover:bg-[#1011d1]/60 group-hover:text-white dark:bg-[#1011d1]/20 dark:group-hover:bg-[#1011d1]"
              >
                Open Details Project
              </button>
            </div>
          ))}
        </div>
        <ProjectDialog
          open={isOpen}
          onClose={setIsOpen.off}
          project={selectedProject}
        />
      </div>
    </section>
  );
};

export default Projects;
