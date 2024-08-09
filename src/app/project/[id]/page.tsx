import ImagesPreview from '@/components/ProjectDetails/ImagesPreview';
import StackPreview from '@/components/ProjectDetails/StackPreview';
import GoBack from '@/components/shared/GoBack';
import { MyProjectsData } from '@/data/myProjects';
import Image from 'next/image';
import Link from 'next/link';
import { FaEye } from 'react-icons/fa';
import { IoLockClosedSharp } from 'react-icons/io5';

function ProjectDetails({ params }: { params: { id: string } }) {
  const { id } = params;

  const targetProject = MyProjectsData.find(
    (item) => item.title.trim().replace(/ /g, '-') == id
  );
  return (
    <div className=" flex flex-col gap-2">
      <div className=" flex items-center gap-2">
        <GoBack />
        <h3 className=" text-4 font-bold my-3">{targetProject?.title}</h3>
      </div>
      <div className=" h-[1px] w-full bg-white/10"></div>

      <ImagesPreview targetProject={targetProject} />
      <div className=" flex flex-col gap-3">
        <div className=" flex items-center gap-2 flex-wrap">
          <div className=" bg-secondary font-bold p-3 rounded-xl">
            <p className=" text-[13px]">{targetProject?.type}</p>
          </div>
          {targetProject?.live ? (
            <a
              className="   main-button font-bold w-fit px-6 flex items-center gap-2"
              href={targetProject.live}
            >
              <FaEye size={25} />
              Live Preview
            </a>
          ) : (
            <span className="main-button font-bold w-fit px-6 flex items-center gap-2">
              <IoLockClosedSharp size={25} />
              Private project
            </span>
          )}
        </div>
        <div>{targetProject?.description}</div>
        <div className=" flex items-center gap-1 flex-wrap">
          <StackPreview targetProject={targetProject} />
        </div>
      </div>
    </div>
  );
}

export default ProjectDetails;
