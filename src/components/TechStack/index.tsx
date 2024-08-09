'use client';
import React from 'react';
import MainSection from '../shared/MainSection';
import Image from 'next/image';
import { motion } from 'framer-motion';

const FrameWorks = [
  'HTML5',
  'CSS3',
  'JavaScript',
  'TypeScript',
  'React',
  'Next',
  'Vue3',
];
const Librares = [
  'Bootstrap',
  'Tailwindcss',
  'Sass',
  'Framer Motion',
  'Mui',
  'Redux',
  'Pinia',
  'Tanstack Query',
  'Formik',
  'Git',
];
const Fimilar = ['Express Js', 'Nest Js', 'Figma', 'Photoshop'];

function TechStack() {
  return (
    <MainSection title="Tech Stack">
      <div className=" flex flex-col gap-7" id="tech">
        <div>
          <p className=" font-medium  text-start lg:text-center  p-2  rounded-xl text-[19px] mb-2">
            Front-End Librares & FrameWorks
          </p>
          <div className=" grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-1 lg:gap-3">
            {FrameWorks.map((item, index) => {
              return (
                <motion.div
                  className=" tech-container flex flex-col gap-1 items-center justify-center  group"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1, rotate: 360 }}
                  transition={{
                    type: 'spring',
                    stiffness: 260,
                    damping: 20,
                    delay: index * 0.03,
                    duration: 2,
                  }}
                >
                  <Image
                    src={`/frameworks/${item}.png`}
                    width={200}
                    height={200}
                    alt={item}
                    className="lg:h-[120px] object-contain"
                  />
                  <p className=" group-hover:text-secondary text-center text-[14px]">
                    {item}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
        <div className=" h-[1px]  bg-white/10 w-3/4 mx-auto"></div>

        <div>
          <p className=" font-medium  text-start lg:text-center  p-2  rounded-xl text-[19px] mb-2">
            Frequently Used Tools & Libraries
          </p>
          <div className=" grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-1 lg:gap-3">
            {Librares.map((item, index) => {
              return (
                <motion.div
                  className=" tech-container flex flex-col gap-1 items-center justify-center  group"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1, rotate: 360 }}
                  transition={{
                    type: 'spring',
                    stiffness: 260,
                    damping: 20,
                    delay: index * 0.03,
                    duration: 2,
                  }}
                >
                  <Image
                    src={`/librares/${item}.png`}
                    width={200}
                    height={200}
                    alt={item}
                    className="lg:h-[120px] object-contain"
                  />
                  <p className=" group-hover:text-secondary text-center text-[14px]">
                    {item}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
        <div className=" h-[1px]  bg-white/10 w-3/4 mx-auto"></div>

        <div>
          <p className=" font-medium  text-start lg:text-center p-2  rounded-xl text-[19px] mb-2">
            Familiar FrameWorks & Tools
          </p>
          <div className=" grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-1 lg:gap-3">
            {Fimilar.map((item, index) => {
              return (
                <motion.div
                  className=" tech-container flex flex-col gap-1 items-center justify-center  group"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1, rotate: 360 }}
                  transition={{
                    type: 'spring',
                    stiffness: 260,
                    damping: 20,
                    delay: index * 0.03,
                    duration: 2,
                  }}
                >
                  <Image
                    src={`/fimilar/${item}.png`}
                    width={200}
                    height={200}
                    alt={item}
                    className="lg:h-[120px] object-contain"
                  />
                  <p className=" group-hover:text-secondary text-center text-[14px]">
                    {item}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </MainSection>
  );
}

export default TechStack;
