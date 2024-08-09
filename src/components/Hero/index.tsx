import Image from 'next/image';
import React from 'react';
import TypeWriter from './TypeWriter';
import Intro from './Intro';

function Hero() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2" id="#intro">
      <div className=" h-full flex items-center justify-center  md:order-1 order-2">
        <Intro />
      </div>
      <div className=" md:order-2 order-1">
        <Image
          width={1000}
          height={1000}
          src={'/main/me.png'}
          alt="my-photo"
          priority
        />
      </div>
    </section>
  );
}

export default Hero;
