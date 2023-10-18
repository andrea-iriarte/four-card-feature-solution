import { card, cardData } from "../constants"
import { animate, motion } from "framer-motion"

const Card = ({ title, subtitle, icon, color}: card) => {
  return (
    <div className={`border-${color} border-t-[4px] w-[15rem] h-[10rem] shadow-xl bg-white rounded-md p-[1.5rem] text-dark-blue flex`}>
      <div>
        <h1 className="font-semibold mb-[0.25rem]">{title}</h1>
        <p className="leading-4 text-[.5rem] font-extralight">{subtitle}</p>
      </div>
      <div className="flex flex-col justify-end w-[20%]">
        <img src={icon} alt={`${title} icon`} className="h-[2rem] w-[2rem]" />
      </div>
    </div>
  )
}

const CardBody = () => {
  return (
    <section className="flex justify-center gap-[2rem] h-[67%] items-center">
      <Card {...cardData[0]}/>
      <div className="flex flex-col gap-[2rem]">
        <Card {...cardData[1]}/>
        <Card {...cardData[2]}/>
      </div>
      <Card {...cardData[3]}/>
    </section>
  )
}

export default CardBody