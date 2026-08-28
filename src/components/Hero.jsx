import { useCallback, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import RotateHint from "./RotateHint";

const Hero = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const [sceneReady, setSceneReady] = useState(false);
  const [hasRotated, setHasRotated] = useState(false);
  const handleSceneReady = useCallback(() => setSceneReady(true), []);
  const handleInteract = useCallback(() => setHasRotated(true), []);
  const toRotate = [ "Software Engineer", "Full Stack Developer", "AI Developer" ];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
      <div className="w-full mx-auto flex flex-col mt-3 c-space gap-3">
        <p className="sm:text-3xl text-xl font-medium text-white text-center font-generalsans">
          Hi, I am <span className='text-[#915EFF]'>Vignesh Gopal Rajendran</span> <span className="waving-hand">👋</span>
        </p>
        <span className="txt-rotate hero_tag text-center text-xl text-gray_gradient" dataPeriod="1000" data-rotate='[ "Software Engineer", "Full Stack Developer", "AI Developer" ]'><span className="wrap">{text}</span></span>
        {/* <p className="hero_tag text-center text-xl text-gray_gradient">Building Products & Brands</p> */}
      </div>
      </div>

      <ComputersCanvas onInteract={handleInteract} onReady={handleSceneReady} />

      <RotateHint visible={sceneReady && !hasRotated} />

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;