'use client';
import { MyProjectsData } from '@/data/myProjects';
import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';

function StackPreview({ targetProject }: { targetProject: any }) {
  return (
    <>
      {targetProject?.stack.map(
        (item: typeof MyProjectsData, index: number) => {
          return (
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1, rotate: 360 }}
              transition={{
                type: 'spring',
                stiffness: 260,
                damping: 20,
                delay: index * 0.03,
                duration: 2,
              }}
              className=" tech-container"
              key={index}
            >
              <Image
                src={`/stack/${item}.png`}
                height={350}
                width={350}
                alt={item.toString()}
                className=" w-[50px] h-[50px]"
              />
            </motion.div>
          );
        }
      )}
    </>
  );
}

export default StackPreview;
