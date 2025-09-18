// src/app/projects/page.js

'use client';

import { useState, useEffect } from 'react';
import { FaTrash, FaLink, FaPlus,FaHome } from 'react-icons/fa';
import { loadProjects, deleteProject } from '@/lib/storage';
import Footer from '../../commponant/footer/footer';   
import Link from 'next/link';

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
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-md py-6">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold text-indigo-700"> لوحة تحكم</h1>
            <div className={"flex items-center gap-3"}>
            <Link href="/dashbord/addprojects">
              <button className="flex items-center bg-gradient-to-r from-purple-500 to-indigo-600 text-white px-4 py-2 rounded-lg font-semibold hover:from-blue-500 hover:to-indigo-700 transition-all">

                <FaPlus className="ml-2" /> إضافة مشروع جديد
              </button>
            </Link>
                <Link href="/">
              <button className="flex items-center bg-gradient-to-r from-purple-500 to-indigo-600 text-white px-4 py-2 rounded-lg font-semibold hover:from-blue-500 hover:to-indigo-700 transition-all">

                <FaHome className="ml-2" /> الرئيسية
              </button>
            </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-8">
        {projects.length === 0 ? (
          <div className="text-center py-16">
            <div className="text-gray-400 text-6xl mb-4">
              <i className="fas fa-folder-open"></i>
            </div>
            <h3 className="text-2xl font-bold text-indigo-600 mb-2">لا توجد مشاريع بعد</h3>
            <p className="text-gray-500 mb-6">ابدأ بإضافة أول مشروع لك!</p>
            <Link href="/dashbord/addprojects">
              <button className="flex items-center bg-gradient-to-r from-purple-500 to-indigo-600 text-white px-4 py-2 rounded-lg font-semibold hover:from-blue-500 hover:to-indigo-700 transition-all">
                <FaPlus className="ml-2" /> إضافة مشروع
              </button>
            </Link>
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
                  <button
                    onClick={() => handleDelete(project.id)}
                    className="absolute top-4 left-4 w-10 h-10 bg-red-500 text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-red-600"
                    title="حذف المشروع"
                  >
                    <FaTrash />
                  </button>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-gray-800">{project.title}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">{project.description}</p>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-gradient-to-r from-purple-500 to-purple-600 text-white px-4 py-2 rounded-lg font-semibold hover:from-purple-600 hover:to-purple-700 transition-all"
                  >
                    <FaLink className="inline ml-2" /> عرض المشروع
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>

      {/* Footer */}
      <Footer />

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