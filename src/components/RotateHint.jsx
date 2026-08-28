import { AnimatePresence, motion } from "framer-motion";

/* Tells the visitor the desk is a 3D model they can spin. Hides once they do. */
const RotateHint = ({ visible }) => {
  const isTouch =
    typeof window !== "undefined" && window.matchMedia("(hover: none)").matches;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.4 } }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
          className='absolute z-[100] pointer-events-none left-1/2 -translate-x-1/2 top-[28%] xs:left-auto xs:translate-x-0 xs:top-[70%] xs:right-[6%]'>
          <motion.div
            animate={{ x: [0, 7, -5, 0], y: [0, -11, 5, 0] }}
            transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
            className='rotate-hint'>
            <svg viewBox='0 0 48 48' className='rotate-hint__glyph' aria-hidden='true'>
              {/* the desk pc, sitting on a turntable */}
              <rect x='14' y='11' width='20' height='14' rx='2.5' className='rotate-hint__pc' />
              <path d='M24 25v5M19.5 30h9' className='rotate-hint__pc' />
              <path
                d='M8 34a16 6.5 0 1 0 32 0a16 6.5 0 1 0 -32 0'
                className='rotate-hint__platter'
              />
              <path d='M37.5 30.5l3.4 3.2l-4.4 1.6' className='rotate-hint__tip' />
            </svg>

            <span className='rotate-hint__label'>
              {isTouch ? "swipe the pc" : "rotate the pc"}
            </span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default RotateHint;
