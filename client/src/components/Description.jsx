import React from 'react'
import { assets } from '../assets/assets'
import {motion} from 'framer-motion'
const Description = () => {
  return (
    <motion.div
    initial={{opacity:0.2,y:100}}
    transition={{duration:1}}
    whileInView={{opacity:1,y:0}}
    viewport={{once:true}}
     className='flex flex-col items-center justify-center my-24 p-6 md:px-28'>
        <h1 className='text-3xl sm:text-4xl font-semibold mb-2'>Create AI Images</h1>
        <p className='text-gray-500 mb-8 '>Turn your imagination into visuals</p>


    <div className='flex flex-col gap-5 md:gap-14 md:flex-row items-center'>
        <img src={assets.sample_img_1} alt="" className='w-80 xl:w-96 rounded-lg !rounded-lg
        '/>
        <div>
            <h2 className='text-3xl font-medium max-w-lg mb-4'>Introducing the AI-powered Text to Image Generator</h2>
            <p className='text-gray-600 mb-4'>Transform your ideas into stunning visuals with AI-powered text-to-image generation! 🚀 Simply enter a description, and advanced algorithms will bring your imagination to life in seconds. Whether you need artwork, concept designs, or creative visuals, AI makes it effortless. No design skills? No problem—AI handles the creativity for you! Start generating unique and high-quality images from text today. 🎨✨</p>
            <p className='text-gray-600'>Unlock the power of AI to turn words into breathtaking images effortlessly! 🌟 Just type your idea, and let AI generate stunning visuals in seconds. Experience creativity without limits—bring your imagination to life today! 🚀</p>
        </div>
    </div>
    </motion.div>
  )
}

export default Description