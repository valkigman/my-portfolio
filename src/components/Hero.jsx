// import { HERO_CONTENT } from '../constants'
// import profilePic from '../assets/kigmanProfile.jpg'
// import { motion } from "motion/react"

// const container = (delay) => ({
//     hidden: {x: -100, opacity: 0},
//     visible: {
//         x: 0,
//         opacity: 1,
//         transition: { duration: 0.5, delay: delay}
//     },
// });

// const Hero = () => {
//   return (
//     <div className="border-b border-neutral-900 pb-4 lg:mb-35">
//       <div className="flex flex-col lg:flex-row">
//         {/* Profile Picture - Full width on small screens, half width on large screens */}
//         <div className='w-full lg:w-1/2 lg:order-2 lg:p-8'>
//           <div className='flex justify-center lg:justify-start'>
//             <motion.img
//                 initial={{ x: 100, opacity: 0 }}
//                 animate={{ x: 0, opacity: 1 }}
//                 transition={{ duration: 1, delay: 1.2}}
//                 src={profilePic} 
//                 alt='Kevin Rush' 
//                 className="w-full max-w-md lg:max-w-full rounded-2xl"/>
//           </div>
//         </div>

//         {/* Hero Content */}
//         <div className="w-full lg:w-1/2 lg:order-1 mt-8 lg:mt-0">
//           <div className="flex flex-col items-center lg:items-start px-4 lg:px-0">
//             <motion.h1 
//                 variants={container(0)}
//                 initial='hidden'
//                 animate='visible'
//                 className="text-5xl lg:text-8xl font-thin tracking-tight text-center lg:text-left lg:mt-16 mb-4 lg:mb-16">
//               Val Kigman
//             </motion.h1>
//             <motion.span
//                 variants={container(0.5)}
//                 initial='hidden'
//                 animate='visible' 
//                 className="bg-gradient-to-r from-cyan-300 via-slate-500 to-blue-500 bg-clip-text text-2xl lg:text-3xl tracking-tight text-transparent text-center lg:text-left">
//               Frontend Developer
//             </motion.span>
//             <motion.p
//                 variants={container(1.0)}
//                 initial='hidden'
//                 animate='visible'  
//                 className='my-2 max-w-xl py-6 font-light tracking-tighter text-center lg:text-left'>
//               {HERO_CONTENT}
//             </motion.p>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Hero

import { HERO_CONTENT } from '../constants'
import profilePic from '../assets/kigmanProfile.jpg'
import { motion } from "motion/react"

const container = (delay) => ({
    hidden: {x: -100, opacity: 0},
    visible: {
        x: 0,
        opacity: 1,
        transition: { duration: 0.5, delay: delay}
    },
});

const Hero = () => {
  return (
    <div className="border-b border-neutralix pb-4 lg:mb-35">
      <div className="flex flex-col lg:flex-row">
        {/* Profile Picture - Full width on small screens, half width on large screens */}
        <div className='w-full lg:w-1/2 lg:order-2 lg:p-8'>
          <div className='flex justify-center lg:justify-start'>
            <motion.img
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 1.2}}
                src={profilePic} 
                alt='Kevin Rush' 
                className="w-full max-w-md lg:max-w-full rounded-2xl"/>
          </div>
        </div>

        {/* Hero Content */}
        <div className="w-full lg:w-1/2 lg:order-1 mt-8 lg:mt-0">
          <div className="flex flex-col items-center lg:items-start px-4 lg:px-0">
            <motion.h1 
                variants={container(0)}
                initial='hidden'
                animate='visible'
                className="text-5xl lg:text-8xl font-thin tracking-tight text-center lg:text-left lg:mt-16 mb-4 lg:mb-16">
              Val Kigman
            </motion.h1>
            <motion.span
                variants={container(0.5)}
                initial='hidden'
                animate='visible' 
                className="bg-gradient-to-r from-green-300 via-slate-500 to-cyan-500 bg-clip-text text-2xl lg:text-3xl tracking-tight text-transparent text-center lg:text-left">
              Frontend Developer    
            </motion.span>
            <motion.p
                variants={container(1.0)}
                initial='hidden'
                animate='visible'  
                className='my-2 max-w-xl py-6 font-light tracking-tighter text-center lg:text-left'>
              {HERO_CONTENT}
            </motion.p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero

// from-green-300 to-cyan-500"