import React, { ReactNode } from 'react';

function MainSection({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <section className=" flex flex-col gap-6 my-2">
      <div className="   w-fit   flex items-center gap-2">
        <h4 className=" text-3 font-[900] main-heading  ">{title}</h4>
      </div>
      <div className=" h-[1px] w-full bg-white/10"></div>
      <div className=" px-4">{children}</div>
    </section>
  );
}

export default MainSection;
