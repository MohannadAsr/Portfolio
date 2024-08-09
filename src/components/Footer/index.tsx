import React from 'react';
import { links } from '../Links';

function Footer() {
  return (
    <div className=" text-center p-6 font-semibold w-full md:w-3/4 mx-auto  flex flex-col gap-2   ">
      <div className=" flex items-center justify-center gap-2 lg:hidden ">
        {links.map((item, index) => {
          return (
            <a
              target="_blank"
              href={item.link}
              className="main-button group p-3 "
              key={index}
            >
              {item.name}
            </a>
          );
        })}
      </div>
      <div className=" h-[1px] w-full bg-white/10"></div>
      <p className="mt-2">© M.ASR Portfolio 2024 </p>
    </div>
  );
}

export default Footer;
