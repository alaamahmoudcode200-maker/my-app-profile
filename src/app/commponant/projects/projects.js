// src/app/projects/page.js

'use client';

import { useState, useEffect } from 'react';
import { FaTrash, FaLink, FaPlus } from 'react-icons/fa';
import { loadProjects, deleteProject } from '@/lib/storage';
import Link from 'next/link';
import ProjectsCard from './cardproject'
export default function ProjectsPage() {
  const [projects, setProjects] = useState([]);

  // تحميل المشاريع عند فتح الصفحة
  useEffect(() => {
    setProjects(loadProjects());
  }, []);

  // دالة لحذف مشروع
  const handleDelete = (id) => {
    if (confirm('هل أنت متأكد من حذف هذا المشروع؟')) {
      deleteProject(id);
      setProjects(loadProjects()); // إعادة تحميل المشاريع
      showSuccess('تم حذف المشروع بنجاح');
    }
  };

  // دالة الإشعار
  const showSuccess = (message) => {
    const successDiv = document.getElementById('successMessage');
    document.getElementById('successText').textContent = message;
    successDiv.classList.remove('hidden');
    setTimeout(() => {
      successDiv.classList.add('hidden');
    }, 3000);
  };

  return (
    <div className="min-h-screen text-black bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-md py-6">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold text-indigo-500"> مشاريعي</h1>
           <Link href="/projectsall">
              <button  className="flex items-center bg-gradient-to-r from-purple-500 to-indigo-600 text-white px-4 py-2 rounded-lg font-semibold hover:from-blue-500 hover:to-indigo-700 transition-all">
                <FaPlus className="ml-2" />  عرض المشاريع
              </button>
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
        <div>
          <ProjectsCard/>
        </div>

 

      {/* Success/Error Messages */}
      <div id="successMessage" className="fixed top-20 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg hidden">
        <i className="fas fa-check-circle ml-2"></i>
        <span id="successText">تم بنجاح!</span>
      </div>
      <div id="errorMessage" className="fixed top-20 right-4 bg-red-500 text-white px-6 py-3 rounded-lg shadow-lg hidden">
        <i className="fas fa-exclamation-circle ml-2"></i>
        <span id="errorText">حدث خطأ!</span>
      </div>
    </div>
  );
}