import { card, cardData } from "../constants"
import { motion } from "framer-motion"
import { useWindowSize } from "@uidotdev/usehooks"
import { useEffect, useState } from 'react'

const Card = ({ title, subtitle, icon, color}: card) => {
  return (
    <div 
      className={`border-t-[4px] lg:w-[19rem] w-[15rem] lg:h-[13rem] h-[12rem] shadow-xl bg-white rounded-md p-[1.5rem] text-dark-blue flex flex-col gap-[1rem] my-[0]`}
      style={{ borderColor: color }}  
    >
      <div className="h-[80%]">
        <h1 className="font-semibold mb-[0.25rem]">{title}</h1>
        <p className="leading-4 text-[.7rem] lg:text-[.75rem] font-extralight ">{subtitle}</p>
      </div>
      <div className="flex justify-end w-full items-end">
        <img src={icon} alt={`${title} icon`} className="lg:h-[3rem] h-[2.5rem] lg:w-[3rem] w-[2.5rem]" />
      </div>
    </div>
  )
}

const CardBody = () => {

  const size = useWindowSize();
  const width = size?.width;
  const mobile = width < 900;
  console.log(mobile);

  return (
    <section className="flex lg:flex-row flex-col justify-center gap-[1rem] lg:gap-[2rem] h-[67%] items-center mt-[4rem] ">
      <motion.div
        animate={{ x: 0 }}
        initial={{ x: -200 }}
        transition={{ ease: "easeOut", duration: 1.5 }}
      >
        <Card {...cardData[0]}/>
      </motion.div>
      
      <motion.div 
        className="flex flex-col lg:gap-[2rem] gap-[1rem]"
        animate={ !mobile ? { x: 0 } : { y: 0 } }
        initial={ !mobile ? { x: 200 } : { y: 200 } }
        transition={{ ease: "easeOut", duration: 1.5 }}
      >
        <Card {...cardData[1]}/>
        <Card {...cardData[2]}/>
      </motion.div>
      <motion.div
        animate={{ x: 0 }}
        initial={ !mobile ? { x: -200 } : { x: 200 } }
        transition={{ ease: "easeOut", duration: 1.5}}
      >
        <Card {...cardData[3]}/>
      </motion.div>
    </section>
  )
}

export default CardBody