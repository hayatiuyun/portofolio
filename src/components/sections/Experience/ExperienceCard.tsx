import React from 'react';

interface ExperienceItem {
  title: string;
  company: string;
  location: string;
  position: string;
  duration: string;
  technologyStack: string[];
  description: string[];
  image: string;
}

const ExperienceCard: React.FC<ExperienceItem> = ({
  title,
  company,
  location,
  position,
  duration,
  technologyStack,
  description,
  image,
}) => {
  return (
    <div className=" bg-bluish dark:bg-[rgb(15,22,36)] bg-opacity-20 z-50 ring-2 ring-[#1c9cf7] dark:ring-[#520de6] backdrop-blur-sm w-11/12 lg:w-3/4 shadow-2xl shadow-[#1c9cf7]/50 dark:shadow-[#5526ba]/75 card-experience rounded-3xl p-6 flex flex-col justify-between">
    <div>
      <div className="flex items-start mb-4 gap-8">
        <img src={image} alt={title} className="w-16 h-16 aspect-square rounded-xl border border-gray-dark/30 dark:border-gray-light/30 bg-white " />
        <div className='w-full flex-1'>
          <h3 className="text-lg font-bold">{title}</h3>
          <p className="text-gray-500 font-medium inline-flex gap-1">{company} · {position}</p>

      <p className="text-gray-500 text-sm">{duration}</p>
      <p className="text-gray-500 text-sm mb-4">{location}</p>
      <div className="mb-4">
        <div className="flex flex-wrap">
          {technologyStack.map((tech, index) => (
            <span
              key={index}
              className="bg-gray-200 border border-black/50 dark:border-gray-light/30  text-gray-600 px-2 py-1 rounded-full mr-2 mb-2 text-xs"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
      <div>
        <h4 className="text-gray-700 font-medium mb-2">Description:</h4>
        <ul className="list-disc pl-6 text-gray-600 text-sm">
          {description.map((desc, index) => (
            <li key={index}>{desc}</li>
          ))}
        </ul>
      </div>
        </div>
      </div>
    </div>
  </div>
  );
};
  
  export default ExperienceCard;