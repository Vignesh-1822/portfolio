/* eslint-disable react/no-unknown-property */
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { Suspense, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { Center, OrbitControls } from '@react-three/drei';
import { styles } from '../styles'

import { myProjects } from '../constants';
import CanvasLoader from '../components/Loader.jsx';
import DemoComputer from './canvas/DemoComputer.jsx';

/* Logos */

import arrowIcon from '../assets/arrow-up.png';
import leftArrowIcon from '../assets/left-arrow.png';
import rightArrowIcon from '../assets/right-arrow.png';

const projectCount = myProjects.length;

const Works = () => {
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);

  const handleNavigation = (direction) => {
    setSelectedProjectIndex((prevIndex) => {
      if (direction === 'previous') {
        return prevIndex === 0 ? projectCount - 1 : prevIndex - 1;
      } else {
        return prevIndex === projectCount - 1 ? 0 : prevIndex + 1;
      }
    });
  };

  useGSAP(() => {
    gsap.fromTo(`.animatedText`, { opacity: 0 }, { opacity: 1, duration: 1, stagger: 0.2, ease: 'power2.inOut' });
  }, [selectedProjectIndex]);

  const currentProject = myProjects[selectedProjectIndex];

  return (
    <section className={`${styles.paddingX} ${styles.paddingY}`}>
      <p className="head-text">
            My Selected Work
      </p>
      <div className="grid lg:grid-cols-2 grid-cols-1 mt-12 gap-5 w-full">
        <div className="flex flex-col justify-between min-h-[500px] relative sm:p-10 py-10 px-5 shadow-2xl shadow-black-200">
          <div className="absolute top-0 right-0">
            <img src={currentProject.spotlight} alt="spotlight" className="w-full h-96 object-cover rounded-xl" />
          </div>

          <div>
            <div className="p-3 backdrop-filter backdrop-blur-3xl w-fit rounded-lg" style={currentProject.logoStyle}>
              <img className="w-10 h-10 shadow-sm" src={currentProject.logo} alt="logo" />
            </div>

            <div className="flex flex-col gap-5 text-white-600 my-5">
              <p className="text-white text-2xl font-semibold animatedText">{currentProject.title}</p>
              <p className="animatedText line-clamp-3">{currentProject.desc}</p>
              <p className="animatedText line-clamp-2">{currentProject.subdesc}</p>
            </div>
          </div>

          <div className="flex items-center justify-between flex-wrap gap-5">
            <div className="flex items-center gap-3">
              {currentProject.tags.map((tag, index) => (
                <div key={index} className="tech-logo relative group/tag">
                  <img src={tag.path} alt={tag.name} />
                  <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-black-300 text-white text-xs px-2 py-1 rounded whitespace-nowrap opacity-0 group-hover/tag:opacity-100 transition-opacity duration-200 pointer-events-none z-10">
                    {tag.name}
                  </span>
                </div>
              ))}
            </div>

            <a
              className="flex items-center gap-2 cursor-pointer text-white-600"
              href={currentProject.href}
              target="_blank"
              rel="noreferrer">
              {currentProject.isLive ? <p>Check Live Site</p> : <p>Github link</p>}
              <img src={arrowIcon} alt="arrow" className="w-3 h-3" />
            </a>
          </div>

          <div className="flex justify-between items-center mt-7">
            <button className="arrow-btn" onClick={() => handleNavigation('previous')}>
              <img src={leftArrowIcon} alt="left arrow" />
            </button>

            <button className="arrow-btn" onClick={() => handleNavigation('next')}>
              <img src={rightArrowIcon} alt="right arrow" className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="border border-black-300 bg-black-200 rounded-lg h-96 md:h-full">
          <Canvas>
            <ambientLight intensity={Math.PI} />
            <directionalLight position={[10, 10, 5]} />
            <Center>
              <Suspense fallback={<CanvasLoader />}>
                <group scale={2} position={[0, -3, 0]} rotation={[0, -0.1, 0]}>
                  <DemoComputer texture={currentProject.texture} />
                </group>
              </Suspense>
            </Center>
            <OrbitControls maxPolarAngle={Math.PI / 2} enableZoom={false} />
          </Canvas>
        </div>
      </div>
    </section>
  );
};

export default Works;