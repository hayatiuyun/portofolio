import { Icon } from "@iconify/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { useTranslation } from "react-i18next";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const Contact = () => {
  const elRef = useRef(null);
  const { t } = useTranslation();

  useGSAP(
    () => {
      const words = gsap.utils.toArray(".word");

      const tl = gsap.timeline({
        delay: 1,
        smoothChildTiming: true,
        scrollTrigger: {
          trigger: elRef.current,
          id: "section-contact",
          scrub: 1,
          start: "top top",
          end: "max",
          pin: true,
        },
      });

      words.forEach((word: any) => {
        tl.to(word, {
          opacity: 1,
          duration: 0.5,
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
      className="flex min-h-[75vh] w-full snap-center items-center bg-bluish py-5 dark:bg-[rgb(15,22,36)] md:py-48 lg:px-32"
    >
      <div className="mx-auto my-auto flex h-full w-full max-w-[1350px] flex-wrap gap-8 lg:justify-between">
        <div className="flex h-full w-full flex-col gap-8">
          <div className="flex h-full w-full flex-col items-center justify-center gap-8 lg:flex-row lg:items-start">
            <div className="relative w-[20rem] overflow-hidden !rounded-full">
              <div className="absolute z-0 aspect-square h-56 w-56 translate-x-8 translate-y-5 rounded-full bg-opacity-60 bg-[radial-gradient(#79d7ffff_0%,_transparent_100%)] backdrop-blur-sm dark:bg-[radial-gradient(#5526baff_0%,_transparent_100%)]"></div>
              <img
                src={t("about_me.image")}
                alt="Contact"
                className="relative z-10 aspect-square h-64 w-64 rounded-full object-cover object-right-top"
              />
            </div>
            <div className="flex flex-col items-center gap-8 lg:items-start">
              <h1 className="max-w-[95%] !text-center text-6xl font-black lg:max-w-screen-lg lg:!text-left ">
                {`Let's talk about your project or idea and find out how I can help your business grow.`
                  .split(" ")
                  .map((word) => (
                    <span className="word leading-[1.25] opacity-30">
                      {word}{" "}
                    </span>
                  ))}
              </h1>
              <hr className="mt-8 w-full max-w-[95%] border-gray/50 lg:max-w-screen-lg" />
              <div className="flex w-full flex-wrap justify-between">
                <div>
                  <a
                    href="mailto:hayatiqurrotuluyun@gmail.com"
                    className="inline-flex items-center gap-4 rounded-lg border-2 border-[#16afce] px-5 py-4 !text-center text-lg font-semibold !text-gray-dark hover:text-[#16afce] dark:!text-white lg:!text-left"
                  >
                    <span>Send me an email </span>
                    <Icon
                      icon="streamline:mail-send-email-message-solid"
                      className="text-2xl"
                    />
                  </a>
                </div>
                <div className="flex flex-wrap gap-4">
                  <a
                    href="https://linkedin.com/hayati-uyun"
                    className="inline-flex items-center gap-x-1.5"
                  >
                    <Icon
                      icon="mage:linkedin"
                      className="text-2xl text-[#0077b5] dark:text-[#79d7ff]"
                    />
                    hayati-uyun
                  </a>
                  <a
                    href="https://linkedin.com/hayati-uyun"
                    className="inline-flex items-center gap-x-1.5"
                  >
                    <Icon
                      icon="mage:github"
                      className="text-2xl text-[#0077b5] dark:text-[#79d7ff]"
                    />
                    hayatiuyun
                  </a>
                  <a
                    href="https://wa.me/6285854792564"
                    className="inline-flex items-center gap-x-1.5"
                  >
                    <Icon
                      icon="mingcute:whatsapp-fill"
                      className="text-2xl text-[#0077b5] dark:text-[#79d7ff]"
                    />
                    +62 858-5479-2564
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
