import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import Illustration from "../assets/contactme-illustration.png"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Contact: React.FC = () => {
  const [loading, setLoading] = useState(false);


  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
     setLoading(true);

    emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,      
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,     
      e.target as HTMLFormElement,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    ).then(() => {
      toast.success("Email sent successfully...")
    }).catch((err) => {
      toast.error("Failed to send Email ❌")
      console.error(err);
    }).finally(() => {
      setLoading(false);
    });

    e.currentTarget.reset();
  };

  return (
   <section id="contact" className="bg-[#0A0A23] text-white px-4 py-12">
  <h2 className="text-center text-lg font-bold text-brand mb-8">Contact Me</h2>

  <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10 bg-[#121232] p-6 md:p-10 rounded-xl shadow-lg">
    
    {/* Illustration */}
    <div className="w-full md:w-1/2 flex justify-center">
      <img
        src={Illustration}
        alt="contact-me illustration"
        className="max-w-xs sm:max-w-sm md:max-w-md"
      />
    </div>

    {/* Form */}
    <form onSubmit={handleSubmit} className="w-full md:w-1/2 space-y-4">
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        required
        className="w-full p-3 rounded-md bg-[#1E1E3F] border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-brand"
      />
      <input
        type="email"
        name="email"
        placeholder="Your Email"
        required
        className="w-full p-3 rounded-md bg-[#1E1E3F] border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-brand"
      />
      <textarea
        name="subject"
        placeholder="Subject"
        required
        className="w-full p-3 rounded-md bg-[#1E1E3F] border border-gray-700 text-white resize-none h-32 focus:outline-none focus:ring-2 focus:ring-brand"
      />
      <button
        type="submit"
        className="w-full bg-brand text-black font-semibold py-3 rounded-md hover:bg-opacity-90 transition cursor-pointer"
      >
        {loading ? "Sending...": "Send"}
      </button>
      <ToastContainer position="bottom-right" autoClose={3000}/>
    </form>
  </div>
</section>

  );
};

export default Contact;
