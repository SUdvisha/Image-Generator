import React from 'react'
import { assets, testimonialsData } from '../assets/assets'
import {motion} from 'framer-motion'
const Testmonials = () => {
  return (
    <motion.div
    initial={{opacity:0.2,y:100}}
    transition={{duration:1}}
    whileInView={{opacity:1,y:0}}
    viewport={{once:true}}
    className='flex flex-col items-center justify-center my-20 py-12 '>
                <h1 className='text-3xl sm:text-4xl font-semibold mb-2'>Customer Testmonials</h1>
                <p className='text-gray-500 mb-12'>What Our Users Are Saying</p>
                <div className='flex flex-wrap gap-6 justify-center '>
                    {testimonialsData.map((testimonial,index)=>(
                        <div key={index} className='bg-white/20 p-8 rounded-lg !rounded-lg shadow-md
                        border w-80 m-auto cursor-pointer hover:scale-[1.02] transition-all min-h-[350px] flex flex-col h-full justify-center'>
                            <div className='flex flex-col item-center text-center justify-between'> 
                                <div className='flex justify-center '>
                                <img src={testimonial.image} alt="" className='rounded-full !rounded-full w-14 '/>
                                </div>
                                <h2 className='text-xl font-semibold mt-3'>{testimonial.name}</h2>
                                <p className='text-gray-500 mb-4'>{testimonial.role}</p>
                                <div className='flex mb-4 justify-center'>
                                    {Array(testimonial.stars).fill().map((item,index)=>
                                    (
                                        <img key={index} src={assets.rating_star} alt=""/>
                                    ))}

                                </div>
                                <p className='text-center text-sm text-gray-600 flex-grow flex items-center'>{testimonial.text}</p>
                            </div>
                            </div>
                    ))}

                </div>


    </motion.div>
  )
}

export default Testmonials