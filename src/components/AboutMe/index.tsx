'use client';
import React from 'react';
import MainSection from '../shared/MainSection';
import { motion } from 'framer-motion';

const personalInfo = [
  { title: 'Full Name', value: 'Mohannad Adnan Alassar' },
  { title: 'Birthday', value: '4 Sept 1997' },
  { title: 'Nationality', value: 'Syrian' },
  { title: 'Current Address', value: 'Syria / Aleppo' },
  { title: 'Phone Number', value: '+963964539647' },
  { title: 'Experience', value: '3 Years' },
  {
    title: 'Qualification',
    value: 'B.Sc. Telecom & Electronics ',
  },
];

function AboutMe() {
  return (
    <MainSection title="My Personal Info">
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {personalInfo.map((item, index) => {
          return (
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{
                type: 'spring',
                duration: 1,
              }}
              className=" flex items-start  gap-2  bg-white/5  p-3 rounded-2xl tech-container shadow-sm"
            >
              <p className=" font-semibold text-7   text-[#18c4fe]  ">
                {item.title}:
              </p>
              <p className="  text-[16px]  ">{item.value}</p>
            </motion.div>
          );
        })}
      </div>
    </MainSection>
  );
}

export default AboutMe;
