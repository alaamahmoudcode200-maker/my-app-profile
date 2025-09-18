// src/app/projects/add/page.js

'use client';

import { useState } from 'react';
import { FaImage, FaLink, FaArrowLeft, FaSave } from 'react-icons/fa';
import { addProject } from '@/lib/storage';
import Link from 'next/link';
import Footer from '../../commponant/footer/footer'; 
export default function AddProjectPage() {
  const [formData, setFormData] = useState({
    title: '',
    link: '',
    description: '',
    image: '',
  });
  const [previewImage, setPreviewImage] = useState('');

  // دالة لتحويل الصورة إلى Base64
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData({ ...formData, image: reader.result });
        setPreviewImage(reader.result);
      };
      reader.onerror = () => {
        showError('فشل قراءة الصورة');
      };
      reader.readAsDataURL(file);
    } else {
      setFormData({ ...formData, image: '' });
      setPreviewImage('');
    }
  };

  // دالة لإضافة مشروع جديد
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.title || !formData.link || !formData.image) {
      showError('يرجى ملء جميع الحقول (الاسم، الرابط، الصورة)');
      return;
    }

    const newProject = {
      id: Date.now().toString(),
      ...formData,
      createdAt: new Date().toISOString(),
    };

    addProject(newProject);
    showSuccess('تم إضافة المشروع بنجاح');

    // إعادة تعيين النموذج
    setFormData({ title: '', link: '', description: '', image: '' });
    setPreviewImage('');
  };

  // دوال الإشعار
  const showSuccess = (message) => {
    const successDiv = document.getElementById('successMessage');
    document.getElementById('successText').textContent = message;
    successDiv.classList.remove('hidden');
    setTimeout(() => {
      successDiv.classList.add('hidden');
    }, 3000);
  };

  const showError = (message) => {
    const errorDiv = document.getElementById('errorMessage');
    document.getElementById('errorText').textContent = message;
    errorDiv.classList.remove('hidden');
    setTimeout(() => {
      errorDiv.classList.add('hidden');
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-md py-6">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 items-center">
         
            <h1 className="text-3xl font-bold text-indigo-500">إضافة مشروع جديد</h1>
               <Link href="/dashbord/panaprojectl" className='justify-self-end'>
              <button className="flex items-center bg-gradient-to-r from-purple-500 to-indigo-600 text-white px-4 py-2 rounded-lg font-semibold hover:from-blue-500 hover:to-indigo-700 transition-all">
               <p>عرض المشاريع </p> 
                 <FaArrowLeft className="mr-2" /> 
              </button>
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-8">
        <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md">
          <form onSubmit={handleSubmit} className="space-y-6 text-black">
              <div>
              <label className="block mb-2 font-medium text-lg">صورة المشروع</label>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center cursor-pointer hover:border-purple-400 transition-colors">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                  className="hidden"
                  id="projectImage"
                />
                <label htmlFor="projectImage" className="cursor-pointer">
                  {previewImage ? (
                    <img
                      src={previewImage}
                      alt="معاينة"
                      className="mx-auto mb-4 max-h-48 rounded-lg"
                    />
                  ) : (
                    <>
                      <FaImage className="text-4xl text-gray-400 mx-auto mb-2" />
                      <p className="text-gray-600">انقر لاختيار صورة من جهازك</p>
                    </>
                  )}
                </label>
              </div>
            </div>
            <div className={"grid grid-cols-1 md:grid-cols-2 gap-6"}> 
            <div>
              <label className="block mb-2 font-medium text-lg">اسم المشروع</label>
              <input
                type="text"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                className="w-full border rounded-lg px-4 py-3 text-lg"
                placeholder="مثال: تطبيق إدارة المطاعم"
                required
              />
            </div>
            <div>
              <label className="block mb-2 font-medium text-lg">رابط المشروع</label>
              <div className="relative">
                <FaLink className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="url"
                  value={formData.link}
                  onChange={(e) => setFormData({ ...formData, link: e.target.value })}
                  className="w-full border rounded-lg px-4 py-3 text-lg pl-12"
                  placeholder="https://example.com"
                  required
                />
              </div>
            </div>
          </div>
            <div>
              <label className="block mb-2 font-medium text-lg">وصف المشروع</label>
              <textarea
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                className="w-full border rounded-lg px-4 py-3 text-lg"
                rows="6"
                placeholder="اكتب وصفًا تفصيليًا عن المشروع، التقنيات المستخدمة، التحديات التي واجهتها..."
                required
              ></textarea>
            </div>
            <div className="flex gap-4 pt-4">
              <button
                type="submit"
          className="flex items-center bg-gradient-to-r from-purple-500 to-indigo-600 text-white px-4 py-2 rounded-lg font-semibold hover:from-blue-500 hover:to-indigo-700 transition-all" >
                <FaSave className="ml-2" />
                حفظ المشروع
              </button>
              <Link href="/projects">
                <button
                  type="button"
                  className="bg-gray-300 text-gray-700 px-8 py-3 rounded-lg text-lg font-semibold flex-1"
                >
                  إلغاء
                </button>
              </Link>
            </div>
          </form>
        </div>
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