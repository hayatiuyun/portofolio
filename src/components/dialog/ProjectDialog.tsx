import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Icon } from "@iconify/react";
import AwesomeSlider from "react-awesome-slider";
import { ProjectType } from "@/i18n/config";

interface Props {
  open: boolean;
  onClose: () => void;
  project?: ProjectType;
}

const ProjectDialog = ({ open, onClose, project }: Props) => {
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-[rgb(15,22,36)] bg-opacity-30 backdrop-blur-sm transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-xl border border-[#02367D]/10 bg-white/75 text-left shadow-xl backdrop-blur-lg  transition-all dark:border-[#02367D]/20 dark:bg-[#474b4f] dark:text-white sm:my-8 md:w-[800px]">
                <div className="flex justify-end">
                  <div className="bg-red-100 mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full sm:mx-0 sm:h-16 sm:w-16">
                    <Icon
                      icon="material-symbols:close"
                      className="cursor-pointer text-2xl"
                      onClick={onClose}
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-4 px-10 pb-10">
                  <div className="aspect-video w-full rounded-lg border border-[rgba(0,0,0,.125)] bg-bluish/75 dark:bg-[rgb(15,22,36)]">
                    <div className="flex items-center gap-3 border-b border-[rgba(0,0,0,.125)] bg-[rgba(0,0,0,0.03)] px-3 py-2">
                      <Icon icon="emojione:red-circle" width={10} />
                      <Icon icon="twemoji:yellow-circle" width={10} />
                      <Icon icon="twemoji:green-circle" width={10} />
                    </div>
                    <div
                      className="p-3 text-justify"
                      style={{
                        height: "auto",
                        fontSize: "132%",
                        lineHeight: "200%",
                      }}
                    >
                      <AwesomeSlider
                        className="w-full rounded-lg"
                        organicArrows={false}
                      >
                        {project?.images?.map((image) => (
                          <div
                            data-src={image}
                            key={image}
                            className="!rounded-xl !w-full"
                          />
                        ))}
                      </AwesomeSlider>
                    </div>
                  </div>

                  <div className="mt-8 flex flex-col justify-between pl-4 lg:flex-row">
                    <div className="pr-4">
                      <h2 className="text-lg font-bold">{project?.title}</h2>
                      <p className="mt-4 text-sm leading-relaxed opacity-60">
                        {project?.description}
                      </p>

                      <h3 className="mt-3 text-lg font-bold">Technologies</h3>
                      <div className="mt-3 flex flex-wrap justify-start gap-4">
                        {project?.technologies?.map((tech) => (
                          <div className=" inline-flex items-center gap-2 rounded-xl border border-[#02367D]/10 px-3 py-2 text-black dark:border-bluish/10 dark:text-white">
                            <Icon icon={tech.class} fontSize="18px" />
                            <p className="text-center text-xs font-medium">
                              {tech.name}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="mt-4 w-full lg:mt-0 lg:max-w-[25%]">
                      <div className="flex flex-col">
                        <h3 className="mb-2 text-lg font-bold">Details</h3>
                        <div className="mt-2 flex flex-col gap-2 opacity-50 ">
                          <p className="inline-flex !items-center gap-2 text-sm font-medium ">
                            <Icon icon="octicon:calendar-16" width={15} />{" "}
                            {project?.startDate}
                          </p>
                          <span className="inline-flex !items-center gap-2 text-sm font-medium ">
                            <Icon icon="octicon:code-16" width={15} />{" "}
                            {project?.language}
                          </span>
                        </div>
                        {project?.url && (
                          <div className="mt-4 flex-col justify-start gap-4">
                            <h3 className="mb-2 text-lg font-bold">
                              Source Code
                            </h3>
                            <button className="inline-flex items-center gap-2 rounded-xl border border-[#02367D]/10 bg-white/50 px-4 py-2 text-black transition-all duration-300 hover:bg-[#1011d1]/60 hover:text-white dark:border-bluish/10 dark:bg-bluish/25 dark:text-white dark:hover:bg-[#1011d1]/60">
                              <Icon icon="la:github-alt" fontSize="18px" />
                              <p className="text-center text-xs font-semibold tracking-wider">
                                Github
                              </p>
                            </button>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="sm:flex sm:items-start">
                  <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left"></div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default ProjectDialog;
