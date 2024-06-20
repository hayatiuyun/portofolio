import { useContext, useEffect, useRef } from "react";
import Switch from "react-switch";
import clsx from "clsx";
import { useTranslation } from "react-i18next";
import { Icon } from "@iconify/react";
import { TypeAnimation } from "react-type-animation";
import { ThemeContext, ThemeContextInterface } from "@/contexts";
import Lottie from "react-lottie";
import animationData from "@/lottie/dev.json";

const Header = () => {
  const { darkTheme, toggleTheme } = useContext(
    ThemeContext,
  ) as ThemeContextInterface;

  const { t, i18n } = useTranslation();
  const targetRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const updateMousePosition = (ev: MouseEvent) => {
      if (!targetRef.current) return;
      const { clientX, clientY } = ev;
      targetRef.current.style.setProperty("--x", `${clientX}px`);
      targetRef.current.style.setProperty("--y", `${clientY}px`);
    };

    window.addEventListener("mousemove", updateMousePosition);
``
    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);

  return (
    <header
      ref={targetRef}
      className="min-h-screen w-full snap-center overflow-hidden bg-bluish bg-[radial-gradient(circle_at_var(--x,_40vw)_var(--y,_100vh),_#8dd5ff75_0%,_transparent_50%)] px-5 dark:bg-[rgb(15,22,36)] dark:bg-[radial-gradient(circle_at_var(--x,_40vw)_var(--y,_60vh),_#1f498575_0%,_transparent_50%)] lg:px-32"
    >
      <div className="mx-auto w-full max-w-[1350px]">
        <div className="flex w-full flex-row items-center justify-between">
          <div className="left-0 top-20 z-50 flex flex-row items-center gap-4 py-8 ">
            <a
              href="#projects"
              data-scrollto="projects"
              className="!inline-block rounded-lg px-3 py-2 font-medium text-gray-dark dark:text-white"
            >
              Projects
            </a>
            <a
              href="#experiences"
              data-scrollto="experiences"
              className="!inline-block rounded-lg px-3 py-2 font-medium text-gray-dark dark:text-white"
            >
              Experiences
            </a>
            <a
              href="#contact"
              data-scrollto="experiences"
              className="!inline-block rounded-lg px-3 py-2 font-medium text-gray-dark dark:text-white"
            >
              Contact
            </a>
          </div>

          <div className="flex items-center justify-center gap-5 overflow-hidden pt-8 lg:w-4/12 lg:pt-0">
            <Switch
              checked={darkTheme}
              onChange={toggleTheme}
              offColor="#8096ba"
              onColor="#273c58"
              className="react-switch scale-75"
              width={90}
              height={45}
              handleDiameter={35}
              uncheckedIcon={
                <Icon
                  className="ml-4 h-full text-end text-[25px] text-gray-dark"
                  icon="twemoji:owl"
                />
              }
              checkedIcon={
                <Icon
                  className="ml-2 h-full text-end text-[25px] text-gray-dark"
                  icon="noto-v1:sun-with-face"
                />
              }
            />
            <Icon
              className={clsx(
                "h-full cursor-pointer text-2xl text-gray-dark ",
                i18n.language === "en" && "brightness-50",
              )}
              icon="twemoji-flag-for-flag-united-kingdom"
              onClick={() => i18n.changeLanguage("en")}
            />
            <Icon
              className={clsx(
                "h-full cursor-pointer text-2xl text-gray-dark ",
                i18n.language === "id" && "brightness-50",
              )}
              icon="twemoji-flag-for-flag-indonesia"
              onClick={() => i18n.changeLanguage("id")}
            />
          </div>
        </div>

        <div className="my-auto lg:h-[calc(100vh-200px)]  flex w-full flex-col items-center justify-between gap-5 overflow-hidden lg:flex-row">
          <div className=" my-12 flex w-full flex-col items-center justify-center gap-8 overflow-x-hidden lg:w-7/12 lg:items-start lg:justify-start lg:py-0">
            <h4 className="text-xl font-medium text-[#16afce]">
              Hi There! I am ~{" "}
            </h4>
            <h1 className="bg-gradient-to-r from-[#16afce] to-[#1011d1] bg-clip-text text-center text-5xl font-bold leading-relaxed text-[transparent] lg:text-left lg:text-[64px]">
              {t("basic_info.name")}
            </h1>
            <TypeAnimation
              sequence={t("basic_info.titles", { returnObjects: true }).flatMap(
                (title: string) => [`A ${title}`, 1000],
              )}
              wrapper="span"
              speed={50}
              className="text-regular text-left text-xl font-semibold text-gray-dark dark:text-white"
              repeat={Infinity}
            />
            <span className="font-light text-gray-dark dark:text-[#a1a6af]">
              Turning ideas into engaging digital experiences. Passionate about
              crafting responsive, intuitive solutions. My experiences speak
              louder than words. Let's build something amazing together.
            </span>

            <div className="flex flex-col gap-2">
              <span className="text-[#878b92] dark:text-[#a1a6af]">
                🚀 Currently specializing in Frontend (React / Next.js)
              </span>
              <span className="text-[#878b92] dark:text-[#a1a6af]">
                📧 Email me at {" "}
                <a
                  href="mailto:hayatiqurrotuluyun@gmail.com"
                  className="cursor-pointer text-[#d63538]  dark:text-[#ff6d70] hover:underline"
                >
                  hayatiqurrotuluyun@gmail.com
                </a>
              </span>
              <span className="text-[#878b92] dark:text-[#a1a6af]">
                📱 Contact me at {" "}
                <a
                  href="https://wa.me/6285854792564"
                  className="cursor-pointer text-[#2ea24d] dark:text-[#3acb60] hover:underline"
                >
                  +62 858-5479-2564
                </a>
              </span>
            </div>
            <div className="z-10">
              <button className="btn-border-gradient group mb-2 ml-2">
                <span className="z-50 bg-gradient-to-r from-[#16afce] to-[#5526ba] bg-clip-text font-semibold text-[transparent] transition-all duration-300 group-hover:text-[#156dcf] ">
                  Open Resume
                </span>
              </button>
            </div>
          </div>

          <div className=" hidden h-96 scale-125 overflow-hidden py-8 dark:opacity-80 md:block lg:py-0">
            <Lottie
              options={{
                loop: true,
                autoplay: true,
                animationData,
              }}
              width="100%"
              height="100%"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
