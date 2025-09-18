import Header from '../commponant/header/headerpage';
import ProjectCard from '../commponant/projects/cardproject'
import Footer from '../commponant/footer/footer'
export default function ProjectAll(){

    return(
        <main className={'bg-gray-50 h-screen'}>
            <Header/>
             <div className={"bg-gray-50 pt-22"}>
              <ProjectCard/>
            </div>
           <Footer />
          
        </main>
    )
}