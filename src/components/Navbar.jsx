import logo from '../assets/VK white logo 2.png'
import { FaLinkedin, FaGithub, FaTwitterSquare } from 'react-icons/fa'


const Navbar = () => {
  return (
    <nav className='mb-20 flex items-center justify-between py-6'>
        <div className='flex flex-shrink-0 items-center'>
            <img className='mx-2 w-16' src={logo} alt="logo" />
        </div>
        <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
            <a href='https://www.linkedin.com/in/valentine-kiguli-854195110' target='_blank'><FaLinkedin/></a>
            <a href="https://github.com/valkigman" target='_blank'><FaGithub /></a>
            <a href="https://x.com/KKvale8" target='_blank'><FaTwitterSquare /></a>
            {/* <FaInstagram /> */}
        </div>
    </nav>
  )
}

export default Navbar