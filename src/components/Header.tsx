import { motion } from 'framer-motion'
import { useWindowSize } from '@uidotdev/usehooks'

const Header = () => {

  const size = useWindowSize();
  const width = size.width;

  return (
    <header className="flex flex-col items-center w-[full] h-[25%] mb-0">

      
        <motion.h2 
          className="font-extralight lg:text-[2rem] text-[1.5rem] text-dark-blue"
          animate={{ y: 0 }}
          initial={{ y: -100 }}
          transition={{ ease: 'easeOut', duration: 1.5}}
        >
          Reliable, efficient delivery
        </motion.h2>
        <motion.h1 
          className="font-semibold lg:text-[2rem] text-[1.5rem] text-dark-blue"
          animate={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{ ease: 'easeOut', duration: 1.5}}
        >
          Powered by Technology
        </motion.h1>
        <motion.p 
          className="text-center font-extralight pt-[.75rem]  text-gray-blue lg:text-[1rem] text-[.75rem] lg:px-0 px-[33%]"
          animate={{ y: 0 }}
          initial={{ y: 100 }}
          transition={{ ease: 'easeOut', duration: 1.5}}
        >
          Our artificial Intelligence powered tools use millions of project data {(width >= 900) &&<br/>}points to ensure that your project is successful
        </motion.p>
    </header>
   
  )
}

export default Header