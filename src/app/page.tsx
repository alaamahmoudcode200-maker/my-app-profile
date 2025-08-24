import HeaderPage from "./commponant/header/headerpage"
import Carousel from "./commponant/courcel/courcel" 
import About from "./commponant/about/about"
import Skills from "./commponant/skills/skills"
import Projects from "./commponant/projects/projects"
import Contact from "./commponant/Contact/contact"
import Footer from "./commponant/footer/footer"
export default function Home() {
  return (
      <main className=" bg-white h-screen ">
        <HeaderPage />
        <Carousel/>
        <About/>
        <Skills/>
        <Projects/>
        <Contact/>
        <Footer/>
      </main>
  );
}
