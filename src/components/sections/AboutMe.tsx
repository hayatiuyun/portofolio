import { Icon } from "@iconify/react";
import { useTranslation } from "react-i18next";
import Draggable from "../Draggable";
import { InView } from "react-intersection-observer";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(ScrollTrigger, useGSAP);

interface DraggableWithInViewProps {
  initialPosition: { x: number | string; y: number | string };
  delay: number;
  childrenKey: string;
  children: React.ReactNode;
}

const DraggableWithInView: React.FC<DraggableWithInViewProps> = ({
  initialPosition,
  delay,
  childrenKey,
  children,
}) => {
  return (
    <div
      className={`draggable-component w-full relative !opacity-0'`}
      // style={{transform: `translateX(-${initialPosition.x})`}}
    >
      <Draggable initialPosition={initialPosition} childrenKey={childrenKey}>
        {children}
      </Draggable>
    </div>
  );
};

const AboutMe: React.FC = () => {
  const { t } = useTranslation();
  const elRef = useRef(null);

  useGSAP(
    () => {
      const cards = gsap.utils.toArray(".draggable-component");

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: elRef.current,
          id: "section-about",
          scrub: true,
          pin: true,
          start: "top top",
          end: `+=${cards.length * 100 - 40}%`,
          // markers: true,
        },
      });

      cards.forEach((card: any, index) => {
        tl.to(card, {
          opacity: 1,
          x: 45,
        });
      });
    },
    {
      scope: elRef,
    },
  );

  return (
    <section
      ref={elRef}
      className="min-h-screen w-full snap-center bg-bluish py-5 dark:bg-[rgb(15,22,36)] md:py-12 lg:min-h-[110vh] lg:px-32"

    >
      <div className="mx-auto w-full max-w-[1350px] my-auto">
        <div className="mb-12">
          <h2 className="bg-gradient-to-r from-[#16afce] to-[#1011d1] bg-clip-text pb-4 text-left text-5xl font-bold !capitalize text-[transparent] ">
            {t("about_me.title").split(" ")[0]}{" "}
            <span className="capitalize text-gray-dark dark:text-bluish">
              {t("about_me.title").split(" ")[1]}
            </span>
          </h2>
          <p className="text-gray-dark !text-opacity-80 dark:text-bluish">
            {t("about_me.subtitle")}
          </p>
        </div>
        <div className=" flex flex-col items-center justify-start gap-10 px-10 pb-10 md:flex-row md:pb-0 lg:h-[calc(100vh-500px)] lg:px-[10vw]">
          <div className="flex w-full flex-col items-center justify-center gap-8 lg:relative lg:items-start lg:justify-start">
            <DraggableWithInView
              initialPosition={{ x: "-18%", y: -140 }}
              delay={100}
              childrenKey="bio-ide"
            >
              <div className="rounded-lg w-full lg:w-[768px] border border-[rgba(0,0,0,.125)] bg-bluish bg-opacity-20 shadow-md backdrop-blur-lg">
                <div className="flex items-center gap-3 border-b border-[rgba(0,0,0,.125)] bg-[rgba(0,0,0,0.03)] px-3 py-2">
                  <Icon icon="emojione:red-circle" width={10} />
                  <Icon icon="twemoji:yellow-circle" width={10} />
                  <Icon icon="twemoji:green-circle" width={10} />
                </div>
                <div
                  className="w-[93%] p-3 text-left"
                  style={{
                    height: "auto",
                    fontSize: "132%",
                    lineHeight: "200%",
                  }}
                >
                  <br />
                  <span className="text-xl font-medium dark:text-white">
                    {t("about_me.greeting")} 👋
                  </span>
                  <br />
                  <br />
                  <p className="text-sm font-medium leading-relaxed dark:text-white">
                    {t("about_me.content")}
                  </p>
                  <br />
                </div>
              </div>
            </DraggableWithInView>
            <DraggableWithInView
              initialPosition={{ x: "50%", y: 150 }}
              delay={500}
              childrenKey="profiles-ide"
            >
              <div className="max-w-[384px] overflow-hidden rounded-lg border border-[rgba(0,0,0,.125)] bg-bluish bg-opacity-20 shadow-md backdrop-blur-lg">
                <div className="flex items-center gap-3 border-b border-[rgba(0,0,0,.125)] bg-[rgba(0,0,0,0.03)] px-3 py-2">
                  <Icon icon="emojione:red-circle" width={10} />
                  <Icon icon="twemoji:yellow-circle" width={10} />
                  <Icon icon="twemoji:green-circle" width={10} />
                </div>
                <div
                  className="aspect-auto w-[284px] overflow-hidden text-left lg:w-[384px]"
                  style={{
                    height: "auto",
                    fontSize: "132%",
                    lineHeight: "200%",
                  }}
                >
                  <img
                    src="/images/photo-2-bw.png"
                    alt="photo-profile"
                    className="object-contain"
                  />
                </div>
              </div>
            </DraggableWithInView>
            <DraggableWithInView
              initialPosition={{ x: "-5%", y: 160 }}
              delay={1000}
              childrenKey="works-ide"
            >
              <div className="rounded-lg border border-[rgba(0,0,0,.125)] bg-bluish bg-opacity-20 shadow-md backdrop-blur-lg">
                <div className="flex items-center gap-3 border-b border-[rgba(0,0,0,.125)] bg-[rgba(0,0,0,0.03)] px-3 py-2">
                  <Icon icon="emojione:red-circle" width={10} />
                  <Icon icon="twemoji:yellow-circle" width={10} />
                  <Icon icon="twemoji:green-circle" width={10} />
                </div>
                <div
                  className="p-3 text-left"
                  style={{
                    height: "auto",
                    fontSize: "132%",
                    lineHeight: "200%",
                  }}
                >
                  <br />
                  <span className="text-lg font-medium dark:text-white">
                    {t("about_me.where_i_work_title")}{" "}
                    <span className="rounded-md bg-[#16afce] px-2 py-1 font-semibold capitalize text-white">
                      {"< "}
                      {t("about_me.work")}
                      {" >"}
                    </span>
                  </span>
                  <br />
                  <br />
                  <ol className="custom-list list-inside list-decimal">
                    {t("about_me.where_i_work", { returnObjects: true }).map(
                      (item: string, index: number) => (
                        <li className="text-sm font-medium" key={index}>
                          {item}
                        </li>
                      ),
                    )}
                  </ol>
                </div>
              </div>
            </DraggableWithInView>
            <DraggableWithInView
              initialPosition={{ x: "65%", y: "-130px" }}
              delay={1500}
              childrenKey="social-ide"
            >
              <div className="max-w-[384px] rounded-lg border border-[rgba(0,0,0,.125)] bg-bluish bg-opacity-20 shadow-md backdrop-blur-lg">
                <div className="flex items-center gap-3 border-b border-[rgba(0,0,0,.125)] bg-[rgba(0,0,0,0.03)] px-3 py-2">
                  <Icon icon="emojione:red-circle" width={10} />
                  <Icon icon="twemoji:yellow-circle" width={10} />
                  <Icon icon="twemoji:green-circle" width={10} />
                </div>
                <div
                  className="p-3 text-left"
                  style={{
                    height: "auto",
                    fontSize: "132%",
                    lineHeight: "200%",
                  }}
                >
                  <span className="text-lg font-medium dark:text-white">
                    My{" "}
                    <span className="rounded-md bg-[#df3079] px-2 py-1 font-semibold text-white">
                      {"< "}
                      {"SocialMedia"}
                      {" >"}
                    </span>
                  </span>
                  <br />
                  <ol className="custom-list mt-4 list-inside list-decimal">
                    {t("about_me.social_media", { returnObjects: true }).map(
                      (item: { url: string; label: string }, index: number) => (
                        <li className="text-sm font-medium" key={index}>
                          <a
                            href={item.url}
                            target="_blank"
                            rel="noreferrer"
                            className="text-blue-500 transition-all duration-500 hover:text-[#16afce] hover:underline"
                          >
                            {item.label}
                          </a>
                        </li>
                      ),
                    )}
                  </ol>
                </div>
              </div>
            </DraggableWithInView>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
