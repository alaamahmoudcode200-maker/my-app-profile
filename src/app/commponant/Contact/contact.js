import { FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";

export default function Contact() {
    return (
        <section id="contact" className="py-20 bg-gray-100">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl text-black font-bold text-center mb-16 relative after:absolute after:bottom-[-12px] after:left-1/2 after:transform after:-translate-x-1/2 after:w-20 after:h-1 after:bg-primary">
                    تواصل معي
                </h2>
                <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg p-8">
                    <h3 className="text-2xl text-black font-bold text-center mb-8">لنتحدث عن مشروعك</h3>
                    <form className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label htmlFor="name" className="block text-gray-700 mb-2">الاسم بالكامل</label>
                                <input type="text" id="name" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary" />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-gray-700 mb-2">البريد الإلكتروني</label>
                                <input type="email" id="email" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary" />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="subject" className="block text-gray-700 mb-2">موضوع الرسالة</label>
                            <input type="text" id="subject" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary" />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-gray-700 mb-2">الرسالة</label>
                            <textarea id="message" rows={5} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"></textarea>
                        </div>
                        <div className="text-center">
                            <button type="submit" className="bg-primary text-white font-bold px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition">إرسال الرسالة</button>
                        </div>
                    </form>
                </div>
                <div className="max-w-3xl mx-auto mt-12">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className=" items-start bg-white rounded-2xl shadow-lg p-6">
                            <div className="flex gap-3 text-primary text-3xl mr-4">
                                <FaMapMarkerAlt /> 
                                <h4 className="text-xl text-black font-bold mb-2">الموقع</h4>
                            </div>
                            <div>
                               
                                <p className="text-gray-700  text-xs text-center">مصر اسيوط</p>
                            </div>
                        </div>
                        <div className="  items-start bg-white rounded-2xl shadow-lg p-6">
                            <div className="flex gap-3 text-primary text-3xl mr-4">
                                <FaPhone />                               
                                 <h4 className="text-xl text-black font-bold mb-2">الهاتف</h4>
                            </div>
                            <div>

                                <p className="text-gray-700  text-xs text-center">01550927827</p>
                            </div>
                        </div>
                        <div className="  items-start bg-white rounded-2xl shadow-lg p-6">
                            <div className="flex gap-3 text-primary text-3xl mr-4">
                                <FaEnvelope />
                                  <h4 className="text-xl text-black font-bold mb-2">البريد الإلكتروني</h4>
                            </div>
                            <div>
                              
                                <p className="text-gray-700 text-xs text-center ">alaamahmoudcode200@gmail.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}