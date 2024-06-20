import { Icon } from "@iconify/react";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className=" w-full bg-bluish px-3 dark:bg-[rgb(15,22,36)] md:px-8  lg:px-32">
      <div className="my-auto mx-auto w-full max-w-[1350px] md:pt-12 2xl:pt-12 pb-4 flex flex-col items-center justify-center">
        <div>
          <img src="/images/striking.png" alt="logo" className="w-20 h-20" />
        </div>
        <p className="text-center">
          Crafted with React and TailwindCSS. Hosted on Vercel. <br />Developed by Hayati Qurrotul Uyun
          <p className="pb-2">{2024} &copy; hayatiuyun-vercel.com</p>

        </p>
      <div className="flex justify-center gap-5">
        {t("basic_info.socials", { returnObjects: true }).map((social) => (
          <a key={social.icon} href={social.url}>
            <Icon icon={social.icon} width="22px" />
          </a>
        ))}
      </div>
      <div className="pt-12">
        <button>
        <Icon icon="pajamas:scroll-up" className="text-3xl" />
        </button>
      </div>
      </div>
    </footer>
  );
};

export default Footer;
