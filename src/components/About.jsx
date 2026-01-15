import aboutImg from '../assets/mountain view.jpg'
import { ABOUT_TEXT } from '../constants/index.js'
import { motion } from 'motion/react'

const About = () => {
  return (
    <div className="border-b border-neutralix pb-4">
        <h1 className="my-20 text-center text-4xl">
            About  
            <span className="text-neutralv"> Me</span>
        </h1>
        <div className="flex flex-wrap">
            <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 1 }} 
                className="w-full lg:w-1/2 lg:p-8"
            >
                <div className='flex justify-items-end lg:justify-start'>
                    <img className='rounded-2xl size-100' src={aboutImg} alt='about'/>
                </div>
            </motion.div>
            <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: 100 }}
                transition={{ duration: 1 }}  
                className='w-full lg:w-1/2'
            >
                <div className='flex justify-center lg:justify-start'>
                    <p className='my-2 maxw-w-xl py-6'>{ABOUT_TEXT}</p>
                </div>
            </motion.div>
        </div>
    </div>
  )
}

export default About
