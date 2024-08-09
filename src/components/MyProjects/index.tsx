import React from 'react';
import MainSection from '../shared/MainSection';
import { MyProjectsData } from '@/data/myProjects';
import Image from 'next/image';
import Link from 'next/link';

function MyProjects() {
  return (
    <MainSection title="My Projects">
      <p id="projects" className="mb-4">
        Throughout my career, I’ve had the opportunity to work on a variety of
        projects as both a front-end and back-end developer. Each project has
        allowed me to refine my skills and deliver exceptional results. Here are
        some of the best projects I’ve worked on
      </p>
      <div className=" grid grid-cols-1 md:grid-cols-2 gap-3">
        {MyProjectsData.map((item, index) => {
          return (
            <Link
              href={`/project/${item.title.trim().replace(/ /g, '-')}`}
              key={index}
              className=" relative p-3 bg-white/10 rounded-xl tech-container shadow-lg group flex flex-col gap-2 cursor-pointer"
            >
              <span className=" absolute left-2 top-2 z-[2] bg-secondary p-2 rounded-md shadow-lg hidden group-hover:block">
                <p className=" drop-shadow-md text-[11px]">{item.type}</p>
              </span>
              <Image
                src={`/projects/${item.title}/1.jpg`}
                width={500}
                height={500}
                alt={item.title}
                className=" w-full object-contain rounded-md max-h-[250px] "
              />
              <p className=" text-5 font-semibold group-hover:text-secondary text-center drop-shadow-lg">
                {item.title}
              </p>
            </Link>
          );
        })}
      </div>
    </MainSection>
  );
}

export default MyProjects;
