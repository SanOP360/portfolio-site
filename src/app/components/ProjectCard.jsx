
import React from 'react';
import Image from 'next/image';
import { CodeBracketIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

const ProjectCard = ({ imgUrl, title, description, githubLink }) => {
  return (
    <Link href={githubLink} passHref>
      <div className="project-card group relative rounded-xl overflow-hidden shadow-lg transform transition-transform hover:scale-105 cursor-pointer">
        <div className="relative h-52 md:h-72">
          <Image
            src={imgUrl}
            alt={title}
            layout="fill"
            objectFit="cover"
            className="rounded-t-xl"
          />
          <div className="overlay flex justify-center items-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500">
            <div className="h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white">
              <CodeBracketIcon className="h-10 w-10 text-[#ADB7BE] m-2 cursor-pointer hover:text-white"></CodeBracketIcon>
            </div>
          </div>
        </div>
        <div className="text-white rounded-b-xl bg-[#181818] py-6 px-4">
          <h5 className="text-xl font-semibold mb-2">{title}</h5>
          <p className="text-[#ADB7BE]">{description}</p>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
