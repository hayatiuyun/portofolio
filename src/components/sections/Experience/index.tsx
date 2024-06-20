import { useTranslation } from "react-i18next";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import ExperienceCard from "./ExperienceCard";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const Experience = () => {
  const { t } = useTranslation();
  const elRef = useRef(null);

  useGSAP(
    () => {
      const cards = gsap.utils.toArray(".card-experience");

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: elRef.current,
          id: "section1",
          scrub: true,
          pin: true,
          start: "top top",
          end: `+=${cards.length * 100}%`,
          //   onUpdate: updateOpacityAndPosition, // Callback on scroll update
        },
      })
      .to(cards, {
        delay: 1,
      })
      // Initial setup
      cards.forEach((card: any, index) => {
        tl.to(card, {
          y: 50,
          opacity: 1,
          stagger: 1,
          duration: 1,
          scale: 1.1,
        }).to(card, {
            y: -130,
          opacity: 0,
          stagger: 1,
          duration: 1,
          scale: 1,
        });

        // updateOpacityAndPosition(); // Update opacity and position initially
      });
    },
    {
      scope: elRef,
    },
  );

  return (
    <section
    ref={elRef} 
      className="min-h-screen w-full overflow-hidden bg-bluish px-3 dark:bg-[rgb(15,22,36)] md:px-8  lg:px-32"
    >
      <div className="relative my-auto mx-auto w-full max-w-[1350px] md:py-12 2xl:py-12">
        <div className="mb-12">
          <h2
            id="experience-title"
            className=" bg-gradient-to-r from-[#16afce] to-[#1011d1] bg-clip-text pb-4 text-left text-3xl !font-black !capitalize text-[transparent] lg:text-5xl "
          >
            {t("experience.title").split(" ")[0]}{" "}
            <span className="!font-black capitalize text-gray-dark dark:text-bluish">
              {t("experience.title").split(" ")[1]}
            </span>
          </h2>
          <p className="text-gray-dark !text-opacity-80 dark:text-bluish">
            {t("experience.subtitle")}
          </p>
        </div>
        <div className="flex w-full gap-5">
          <div className="relative">
            <div className="absolute z-50 aspect-square h-[180%] -translate-x-[40%] translate-y-24 rounded-full bg-[radial-gradient(#6633ccff_0%,_#3399ff56_32%,_#3399ff00_80%)] opacity-75"></div>
            <div className="absolute z-50 aspect-square h-[80%] -translate-y-48 translate-x-[180%]  rounded-full bg-[radial-gradient(#5526bacc_0%,_#5526ba88_30%,_transparent_70%)] opacity-30"></div>
            <img
              src="/images/rocket.png"
              alt="rocket"
              className="hidden -translate-x-12 translate-y-36 scale-[.55] object-contain lg:block lg:dark:hidden"
            />
            <img
              src="/images/rocket-dark.png"
              alt="rocket-dark"
              className="hidden -translate-x-12 translate-y-36 scale-[.55] object-contain lg:dark:block"
            />
          </div>
          <div className="relative w-full mx-auto">
            {t("experience.experiences", { returnObjects: true }).map(
              (experience: any, index: number) => (
                <ExperienceCard key={index} {...experience} />
              ),
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
