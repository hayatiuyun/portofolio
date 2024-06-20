
import { Icon } from "@iconify/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);


const Contact = () => {
  const elRef = useRef(null);

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
            markers: true,
            pin: true,
            },
      });

      words.forEach((word: any, ) => {
        tl.to(word, {
          opacity: 1,
          duration: .5
        });
      }
        );
    },
    {
      scope: elRef,
    },
  );


  return (
    <section ref={elRef}  className="w-full snap-center bg-bluish py-5 flex items-center dark:bg-[rgb(15,22,36)] md:py-48 min-h-[75vh] lg:px-32">
      <div className="mx-auto my-auto h-full flex w-full max-w-[1350px] flex-wrap gap-8 lg:justify-between">
        <div className="flex flex-col w-full h-full gap-8">
        <div className="flex flex-col justify-center h-full items-center lg:items-start lg:flex-row w-full gap-8">
          <div className="relative w-[20rem] !rounded-full overflow-hidden">
            <div className="absolute z-0 aspect-square h-56 w-56 bg-opacity-60 backdrop-blur-sm translate-x-8 translate-y-5 rounded-full bg-[radial-gradient(#79d7ffff_0%,_transparent_100%)] dark:bg-[radial-gradient(#5526baff_0%,_transparent_100%)]"></div>
            <img
              src="/images/photo-2-bw.png"
              alt="Contact"
              className="relative z-10 aspect-square h-64 w-64 rounded-full object-cover object-right-top"
            />
          </div>
          <div className="flex flex-col items-center lg:items-start gap-8">
            <h1 className="text-6xl font-black max-w-[95%] lg:max-w-screen-lg !text-center lg:!text-left ">
              {`Let's talk about your project or idea and find out how I can help your business grow.`.split(" ").map((word) => <span className="opacity-30 word leading-[1.25]">{word} {" "}</span>)}
            </h1>
            <hr className="border-gray/50 w-full mt-8 max-w-[95%] lg:max-w-screen-lg" />
            <div className="flex flex-wrap justify-between w-full">
            <div>
                <a
                href="mailto:hayatiqurrotuluyun@gmail.com"
                className="text-lg inline-flex items-center !text-center lg:!text-left gap-4 font-semibold !text-gray-dark dark:!text-white border-2 border-[#16afce] hover:text-[#16afce] rounded-lg px-5 py-4"
                > 
                <span>Send me an email </span>
                <Icon icon="streamline:mail-send-email-message-solid" className="text-2xl" />
                </a>
            </div>
            <div className="flex flex-wrap gap-4">
                <a href="https://linkedin.com/hayati-uyun" className="inline-flex gap-x-1.5 items-center" >
                <Icon icon="mage:linkedin" className="text-2xl text-[#0077b5] dark:text-[#79d7ff]" />
                hayati-uyun
                </a>
                <a href="https://linkedin.com/hayati-uyun" className="inline-flex gap-x-1.5 items-center" >
                <Icon icon="mage:github" className="text-2xl text-[#0077b5] dark:text-[#79d7ff]" />
                hayatiuyun
                </a>
                <a href="https://wa.me/6285854792564" className="inline-flex gap-x-1.5 items-center" >
                <Icon icon="mingcute:whatsapp-fill" className="text-2xl text-[#0077b5] dark:text-[#79d7ff]" />
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
