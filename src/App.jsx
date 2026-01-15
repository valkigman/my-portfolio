import { useState, useEffect } from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Technologies from "./components/Technologies"
import Experience from "./components/Experience"
import Projects from "./components/Projects"
import Contacts from "./components/Contacts"
import Switch from "./components/switch"

const App = () => {
  const [theme, setTheme] = useState("dark")

  useEffect(() => {
    const handleThemeChange = () => {
      const newTheme = document.documentElement.getAttribute("data-theme")
      setTheme(newTheme)
    }

    // Set initial theme
    handleThemeChange()

    // Listen for theme changes
    const observer = new MutationObserver(handleThemeChange)
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] })

    return () => observer.disconnect()
  }, [])

  const isDarkMode = theme === "dark"

  return (
    <div className="overflow-x-hidden text-content antialiased selection:bg-cyaniii selection:text-cyanix">
      <div className="fixed top-0 -z-10 h-full w-full">
        <div className="relative h-full w-full bg-bkgrd">
          <div
            className={`absolute h-full w-full 
            ${
              isDarkMode
                ? "bg-[radial-gradient(#333333_1px,transparent_1px)] [background-size:24px_24px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"
                : "bg-[radial-gradient(#a3a3a3_1px,transparent_1px)] [background-size:24px_24px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"
            }`}
          ></div>
        </div>
      </div>
      <div className="fixed top-0 left-0 right-0 z-50 bg-bkgrd py-2">
        <div className="container mx-auto px-8">
          <Switch />
        </div>
      </div>
      <div className="w-[70%] mx-auto px-8 pt-8">
        <Navbar />
        <Hero />
        <About />
        <Technologies />
        <Experience />
        <Projects />
        <Contacts />
      </div>
    </div>
  )
}

export default App
