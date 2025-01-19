import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from './components/About'
import Technologies from './components/Technologies'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Contacts from './components/Contacts'
import Switch from "./components/switch"

const App = () => {
  return (
    <div className="overflow-x-hidden text-content antialiased selection:bg-cyaniii selection:text-cyanix">
      <div className="fixed top-0 -z-10 h-full w-full">
        <div className="relative h-full w-full bg-bkgrd">
        </div>
      </div>
      <div className="fixed top-0 left-0 right-0 z-50 bg-bkgrd py-2">
        <div className="container mx-auto px-8">
          <Switch />
        </div>
      </div>
      <div className="container mx-auto px-8 pt-8">
        {/* <Example/> */}
        <Navbar/>
        <Hero/>
        <About/>
        <Technologies/>
        <Experience/>
        <Projects/>
        <Contacts/>
      </div>
    </div>
  )
}

export default App