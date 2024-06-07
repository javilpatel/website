import { RiJavaLine } from "react-icons/ri";
import { FaPython } from "react-icons/fa";
import { RiReactjsLine } from "react-icons/ri";
import { RiNodejsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { BiLogoPostgresql } from "react-icons/bi";
import { motion } from "framer-motion";
import { GiDuration } from "react-icons/gi";

const iconVariants = (duration) => ({
    initial: {y: -10},
    animate: {
        y: [10,-10],
        transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",
        },
    },
});

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <motion.h2 
      whileInView={{opacity: 1, y: 0}}
      initial={{opacity: 0, y: -100}}
      transition={{duration: 1.5}}
      className="my-20 text-center text-4xl">Technologies</motion.h2>
      <motion.div 
      whileInView={{opacity:1, x:0}}
      initial={{opacity: 0, x:-100}}
      transition={{duration: 1.5}}
      className="flex flex-wrap items-center justify-center gap-4">
        <motion.div 
        variants={iconVariants(2.5)}
        initial="initial"
        animate="animate"
        className="rounded-3xl border-4 border-neutral-800 p-4">
            <RiJavaLine className="text-7xl" style={{ color: '#007396' }} />
        </motion.div>
        <motion.div 
        variants={iconVariants(3)}
        initial="initial"
        animate="animate"
        className="rounded-3xl border-4 border-neutral-800 p-4">
            <FaPython className="text-7xl" style={{ color: '#3776AB' }} />
        </motion.div>
        <motion.div 
        variants={iconVariants(5)}
        initial="initial"
        animate="animate"
        className="rounded-3xl border-4 border-neutral-800 p-4">
            <RiReactjsLine className="text-7xl" style={{ color: '#61DAFB' }} />
        </motion.div>
        <motion.div 
        variants={iconVariants(2)}
        initial="initial"
        animate="animate"
        className="rounded-3xl border-4 border-neutral-800 p-4">
            <RiNodejsLine className="text-7xl" style={{ color: '#68A063' }} />
        </motion.div>
        <motion.div 
        variants={iconVariants(6)}
        initial="initial"
        animate="animate"
        className="rounded-3xl border-4 border-neutral-800 p-4">
            <TbBrandNextjs className="text-7xl" />
        </motion.div>
        <motion.div 
        variants={iconVariants(4)}
        initial="initial"
        animate="animate"
        className="rounded-3xl border-4 border-neutral-800 p-4">
            <BiLogoPostgresql className="text-7xl" style={{ color: '#336791' }} />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Technologies;
