import React from 'react';
import TypeWriter from './TypeWriter';

function Intro() {
  return (
    <div className="  font-semibold text-center lg:text-start min-h-[78px]  -leading-4 flex flex-col gap-2">
      <p className="text-2xl lg:text-[2.5rem]">Hi ! , I'm Mohannad Alassar</p>
      <div className=" text-[19px]">
        <TypeWriter
          text={'Telecommunication & Electronics Engineer , Web Developer'}
        />
      </div>
    </div>
  );
}

export default Intro;
