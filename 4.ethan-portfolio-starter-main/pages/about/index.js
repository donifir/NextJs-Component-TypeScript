import React, { Component, useState } from 'react';

// icons
import { FaHtml5, FaCss3, FaJs, FaReact, FaWordpress, FaFigma,FaLaravel } from 'react-icons/fa';
import {  SiNextdotjs, SiFramer } from 'react-icons/si';

//  data
const aboutData = [
  {
    title: 'skills',
    info: [
      {
        title: 'Web Development',
        icons: [
          <FaHtml5 />,
          <FaCss3 />,
          <FaJs />,
          <FaReact />,
          <SiNextdotjs />,
          <FaLaravel />,
          <FaWordpress />,
        ],
      },
      {
        title: 'UI/UX Design',
        icons: [<FaFigma />],
      },
    ],
  },
  {
    title: 'awards',
    info: [
      {
        title: 'Webby Awards - Honoree',
        stage: '2011 - 2012',
      },
      // {
      //   title: 'Adobe Design Achievement Awards - Finalist',
      //   stage: '2009 - 2010',
      // },
    ],
  },
  {
    title: 'experience',
    info: [
      {
        title: 'Web Developer - Hotel Desa',
        stage: '2018 - 2019',
      },
      {
        title: 'Staff Consulting - PT. EMAS',
        stage: '2019 - 2021',
      },
      {
        title: 'Freelance',
        stage: '2021 - 2023',
      },
    ],
  },
  {
    title: 'education',
    info: [
      {
        title: 'Akuntansi - Universitas Kanjuruhan',
        stage: '2014 - 2016',
      },
      {
        title: 'Sistem Informasi - Universitas Gajayana',
        stage: '2017 - 2021',
      },
      // {
      //   title: 'Certified Graphic Designer - ABC Institute, Los Angeles, CA',
      //   stage: '2006',
      // },
    ],
  },
];

// Component
import Circles from '../../components/Circles'
import Avatar from '../../components/Avatar'

// framerMotion
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants'


// counter
// import CountUp from 'react-countup/build/CountUp';
import CountUp from 'react-countup';

const About = () => {
  const [index, setIndex] = useState(0)
  return (
    <div className='h-screen bg-primary/30 py-32 text-center xl:text-left'>
      <Circles />
      {/* avatar image */}
      <motion.div
        variants={fadeIn('right', 0.2)}
        initial='hidden'
        animate='show'
        exit='hidden'
        className='hidden xl:flex absolute bottom-0 -left-[310px] '>
        <Avatar />
      </motion.div>

      <div className='container mx-auto h-full flex flex-col items-center justify-center xl:flex-row gap-x-6 '>
        {/* TEXT */}
        <div className='flex-1 flex flex-col justify-center xl:max-w-[45%] '>
          <motion.h2
            variants={fadeIn('right', 0.2)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='h2 lg:text-4xl text-2xl mt-10 md:mt-0'>Sedikit <span className='text-accent'>latar belakang</span> tentang diri saya.</motion.h2>
          <motion.p
            variants={fadeIn('right', 0.4)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='max-w[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0'>Saya memulai pekerjaan sebagai pengembang lepas 5 tahun yang lalu. Selama waktu itu, saya telah bekerja dari jarak jauh untuk berbagai agensi, memberikan saran kepada startup, dan berkolaborasi dalam pembuatan produk digital untuk bisnis dan konsumen.</motion.p>
          {/* counters */}
          <motion.div
            variants={fadeIn('right', 0.6)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8'>
            <div className='flex flex-1 xl:gap-x-6'>
              {/* experience */}
              <div className='relative flex-1 after:w-(1px] after:h-full
              after:bg-white/10 after:absolute after:top-0 after:right-O'>
                <div className='text-2xl xl:text-4xl font-extrabold text-accent mb-2'>
                  <CountUp start={0} end={5} duration={5} /> +
                </div>
                <div className='text-xs uppercase tracking-(1px] leading-[1.4] max-w-[100px]'>
                  Years of experience
                </div>
              </div>

              {/* Client */}
              <div className='relative flex-1 after:w-(1px] after:h-full
              after:bg-white/10 after:absolute after:top-0 after:right-O'>
                <div className='text-2xl xl:text-4xl font-extrabold text-accent mb-2'>
                  <CountUp start={0} end={250} duration={5} /> +
                </div>
                <div className='text-xs uppercase tracking-(1px] leading-[1.4] max-w-[100px]'>
                  Satisfied clients
                </div>
              </div>

              {/* Client */}
              <div className='relative flex-1 after:w-(1px] after:h-full
              after:bg-white/10 after:absolute after:top-0 after:right-O'>
                <div className='text-2xl xl:text-4xl font-extrabold text-accent mb-2'>
                  <CountUp start={0} end={650} duration={5} /> +
                </div>
                <div className='text-xs uppercase tracking-(1px] leading-[1.4] max-w-[100px]'>
                  Finish Project
                </div>
              </div>

              {/* award */}
              <div className='relative flex-1 after:w-(1px] after:h-full
              after:bg-white/10 after:absolute after:top-0 after:right-O'>
                <div className='text-2xl xl:text-4xl font-extrabold text-accent mb-2'>
                  <CountUp start={0} end={8} duration={5} /> +
                </div>
                <div className='text-xs uppercase tracking-(1px] leading-[1.4] max-w-[100px]'>
                  Winning Awards
                </div>
              </div>

            </div>
          </motion.div>

        </div>
        {/* INFO */}
        <motion.div
          variants={fadeIn('right', 0.4)}
          initial='hidden'
          animate='show'
          exit='hidden'
          className='flex flex-col w-full xl:max-w-[35%] h-[480] '>
          <div className='flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4'>
            {
              aboutData.map((item, itemIndex) => {
                return (
                  <div
                    key={itemIndex}
                    className={`${index === itemIndex &&
                      'text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300'
                      } cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
                    onClick={() => setIndex(itemIndex)}>
                    {item.title}
                  </div>
                )
              })
            }
          </div>
          <div className='py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start'>
            {aboutData[index].info.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className='flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60'
                >
                  {/* title */}
                  <div className='font-light mb-2 md:mb-0'>{item.title}</div>
                  <div className='hidden md:flex'>-</div>
                  <div>{item.stage}</div>
                  <div className='flex gap-x-4'>
                    {/* {JSON.stringify(item.icons)} */}
                    {/* icons */}
                    {item.icons?.map((iconex, itemIndex) => {
                      return <div key={itemIndex} className='text-2xl text-white'>{iconex}</div>;
                    })}

                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
