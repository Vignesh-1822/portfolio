import { AnimatePresence, motion } from "framer-motion";

/* Tells the visitor the desk is a 3D model they can spin. Hides once they do. */
const RotateHint = ({ visible }) => {
  const isTouch =
    typeof window !== "undefined" && window.matchMedia("(hover: none)").matches;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10, transition: { duration: 0.35 } }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.4 }}
          className='absolute left-1/2 -translate-x-1/2 bottom-[210px] xs:bottom-[120px] z-10 pointer-events-none'>
          <div className='rotate-hint'>
            <span className='rotate-hint__arrow'>‹</span>

            <svg className='rotate-hint__orbit' viewBox='0 0 26 26' aria-hidden='true'>
              <ellipse
                cx='13'
                cy='13'
                rx='11'
                ry='5'
                transform='rotate(-20 13 13)'
                className='rotate-hint__ring'
              />
              <circle cx='13' cy='13' r='3.6' className='rotate-hint__core' />
            </svg>

            <span>{isTouch ? "Swipe to rotate" : "Drag to rotate"}</span>

            <span className='rotate-hint__arrow rotate-hint__arrow--right'>›</span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default RotateHint;
