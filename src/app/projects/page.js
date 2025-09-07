import HeaderPage from "../commponant/header/headerpage"; 
import Projects from "../commponant/projects/projects";
import Footer from "../commponant/footer/footer";  
export default function ProjectsPage() {
    return (
            <main className=" bg-white h-screen ">
               <HeaderPage />
                <Projects/>
               <Footer/>
             </main>
    );
}   