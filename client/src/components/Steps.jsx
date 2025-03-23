import React from 'react'
import { stepsData } from '../assets/assets'
import {motion} from 'framer-motion'
const Steps = () => {
  return (
    <motion.div 
    initial={{opacity:0.2,y:100}}
    transition={{duration:1}}
    whileInView={{opacity:1,y:0}}
    viewport={{once:true}}
    className='flex flex-column items-center justify-center my-32'>
    <h1 className='text-3xl sm:text-4xl font-semibold mb-2'>How it Works??</h1>
    <p className='text-lg text-gray-60 mb-8'>Transform Words Into Stunning Images</p>
    <div className='space-y-4 w-100 max-w-3xl text-sm '>
        {stepsData.map((item,index)=>(
            <div key={index} className='flex items-center gap-4 p-3 px-5 bg-white/20 rounded-lg !rounded-lg
            shadow-md border cursor-pointer hover:scale-[1.02] transition-all duration-300'>
                <img width={30} src={item.icon} alt=""/>
                <div>
                    <h3 className='text-lg font-medium'>{item.title}</h3>
                    <p className='text-grey-500'>{item.description}</p>
                </div>

                </div>
        ))}
    </div>
        </motion.div>
  )
}

export default Steps