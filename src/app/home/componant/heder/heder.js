"use client"
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import LogoCommponant from './componanthed/logocommponant';
export default function ListCommponant(){
    const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };
    const List=[
        {id:1, name:"Home", src:"/home",icon:"/home.png"},
        {id:2, name:"About", src:"p",icon:"/About.png"},
        {id:3, name:"Experience", src:"p",icon:"/Experience.png"},
        {id:4, name:"projects", src:"p",icon:"/projects.png"},
        {id:5, name:"Contact", src:"p",icon:"/Contact.png"},

    ]
        const myList=List.map((list)=>{
            return(
                <li  onClick={toggleSidebar} key={list.id} className="transition duration-1000  mt-3 py-2 hover:shadow hover:bg-linear-to-r from-pink-500 to-violet-500  rounded-2xl    flex items-center  gap-4 text-xl font-bold text-black" >
                   
                    <Link  href={list.src} className={"flex gap-2 px-0.5 items-center link link-hover"}>
                     <Image src={list.icon} alt='img ' className='ms-2' width={40} height={40}/>
                       <span 
                className={`mr-3 ${
                  isCollapsed ? 'opacity-0 w-0' : 'opacity-100 w-auto'
                } transition-opacity duration-300 truncate`}
              >
              {list.name}
                    </span>
                    </Link>
    
                </li>
            )
        })
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div 
        className={`shadow-2xl shadow--500/50 text-black h-full flex flex-col transition-all duration-300 ease-in-out ${
          isCollapsed ? 'w-20' : 'w-64'
        }`}
      >

        {/* عناصر القائمة */}
        <nav className="flex-1 overflow-y-auto p-2">
           
          <ul>
                  {myList}
          </ul>
     
          
        </nav>
      </div>

    
    </div>
  );
};