// src/app/projects/page.js

'use client';

import { useState, useEffect } from 'react';
import { FaLink,FaTrash } from 'react-icons/fa';
import { loadProjects } from '@/lib/storage';
import Link from 'next/link';

export default function ProjectsCard() {
  const [projects, setProjects] = useState([]);

  // تحميل المشاريع عند فتح الصفحة
  useEffect(() => {
    setProjects(loadProjects());
  }, []);



  // دالة الإشعار


  return (
    <div className="h-160 text-black bg-gray-50">
  

      {/* Main Content */}
      <main className="container mx-auto px-6 py-8">
        {projects.length === 0 ? (
          <div className="text-center py-16">
            <div className="text-black text-6xl mb-4">
              <i className="fas fa-folder-open"></i>
            </div>
            <h3 className="text-2xl font-bold text-indigo-600 mb-2">لا توجد مشاريع بعد</h3>
            <p className="text-black mb-6">ابدأ بإضافة أول مشروع لك!</p>
          
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map(project => (
              <div key={project.id} className="bg-white rounded-lg shadow-md overflow-hidden card-hover group">
                <div className="relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-56 object-cover"
                    onError={(e) => {
                      e.target.src = 'https://picsum.photos/400/300';
                    }}
                  />
                   
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-black">{project.title}</h3>
                  <p className="text-black mb-4 line-clamp-3">{project.description}</p>
                  <Link
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-gradient-to-r from-purple-500 to-indigo-600 text-white px-4 py-2 rounded-lg font-semibold hover:from-blue-500 hover:to-indigo-700 transition-all"
                  >
                    <FaLink className="inline ml-2" /> عرض المشروع
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>

 
    </div>
  );
}