import { Icon } from "@iconify/react";
import { useTranslation } from "react-i18next";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const Skills = () => {
  const { t } = useTranslation();
  const elRef = useRef(null);

  useGSAP(
    () => {
      const skills = gsap.utils.toArray(".skill-item");
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: elRef.current,
          id: "section-skills",
          scrub: 1,
          pin: true,
          pinSpacing: false,
          start: "top top",
          end: `bottom+=${skills.length * 2}%`,
        },
      });
      skills.forEach((skill: any, index) => {
        tl.to(".skills-set", {
          xPercent: - (index + 1) * 10,
          duration: 1,
          ease: "power1.inOut",
        })
      }
      );
    },
    {
      scope: elRef,
    },
  )
  

  return (
    <section ref={elRef}  className="relative w-full !min-h-screen overflow-x-hidden bg-bluish px-3 dark:bg-[rgb(15,22,36)] md:px-8 md:py-12 lg:px-32 2xl:py-12">
      <div className="absolute -left-[15%] !-z-[5] -top-[15%] aspect-square h-[110%] bg-[radial-gradient(#5526ba35_0%,_transparent_70%)] dark:bg-[radial-gradient(#5526ba35_0%,_transparent_70%)]"></div>
      <div className="absolute -right-[15%]  !-z-[5] -top-[15%] aspect-square h-[110%] bg-[radial-gradient(#156dcf45_0%,_transparent_70%)] dark:bg-[radial-gradient(#156dcf35_0%,_transparent_70%)]"></div>
      <div  className="relative !z-10 mx-auto max-w-[1350px] bg-bluish !bg-opacity-5 py-12  backdrop-blur-xl dark:bg-[rgb(15,22,36)] overflow-hidden ">
        <div className="mb-8">
          <h2 className="z-10 mb-6 text-left text-5xl font-bold capitalize text-[transparent] ">
            <span className="bg-gradient-to-r from-[#16afce] to-[#5526ba] bg-clip-text">
              {t("skills.title").split(" ")[0]}{" "}
            </span>
            <span className=" !capitalize !text-[#274f94] dark:!text-white ">
              {t("skills.title").replace(t("skills.title").split(" ")[0], "")}
            </span>
          </h2>
          <p className="text-gray-dark !text-opacity-80 dark:text-bluish lg:w-8/12">
            {t("skills.subtitle")}
          </p>
        </div>

        <ul className="z-10 skills-set relative !inline-flex lg:flex-nowrap py-12 justify-start overflow-hidden gap-8 lg:gap-12 px-2">
          {t("skills.icons", { returnObjects: true }).map((skill) => (
            <li
              key={skill.name}
              className="hover:bg-[#b8e0fb] z-10 skill-item group flex aspect-square  h-full !w-[150px] !cursor-pointer flex-col items-center justify-center rounded-[8px] border border-gray-dark/10 bg-white/30 !p-2 font-bold  text-[#274f94] transition-all duration-500 md:hover:-translate-y-4 hover:scale-105 hover:border-2 hover:border-[#1c9cf7] dark:hover:border-[#9666ff] hover:shadow-lg hover:drop-shadow-[0_25px_25px_#1c9cf777] dark:bg-bluish/5 dark:text-bluish dark:hover:bg-[#3c306b] dark:hover:drop-shadow-[0_25px_15px_#9666ff45]"
            >
              <Icon
                icon={skill.class}
                className="mx-auto text-[#0060ce] dark:text-[#79d7ff] group-hover:text-[#274f94] group-hover:dark:text-bluish transition-colors duration-500"
                width="39.6px"
                height="39.5px"
              />
              <p className="mt-4 text-center text-base transition-colors duration-500 bg-gradient-to-r from-[#16afce] to-[#9666ff] bg-clip-text !text-[transparent] group-hover:dark:!text-bluish group-hover:!text-[#274f94]">
                {skill.name}
              </p>
            </li>
          ))}
        </ul>

        <div style={{height: `${t("skills.icons", {returnObjects: true}).length * 54}px`}}></div>
      </div>
    </section>
  );
};

export default Skills;
