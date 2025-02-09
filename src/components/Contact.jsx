import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import BackVideo from "../accets/BackVideo.mp4";
import ProfilePic from "../accets/ProfilePic.png";

const Contact = () => {
    const navigate = useNavigate();
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            'service_vxftqaj', 
            'template_c1amcd7', 
            form.current, 
            'RrREuQ2UAoBfaHTjH'
        ).then(
            () => {
                toast.success('Message sent successfully!');
            },
            (error) => {
                toast.error('Failed to send the message, please try again later.');
            }
        );
    };

    return (
        <div className="contact-container relative flex flex-col items-center justify-center min-h-screen w-full text-white">
            {/* Background Video */}
            <video className="absolute top-0 left-0 w-full h-full object-cover z-0" autoPlay loop muted>
                <source src={BackVideo} type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            {/* Dark Overlay */}
            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60 z-10"></div>

            {/* Toast Container */}
            <ToastContainer position="top-center" autoClose={3000} hideProgressBar={false} />

            {/* Contact Info with Profile Picture */}
            <div className="relative z-20 flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-8 p-6 text-center md:text-left max-w-3xl bg-white bg-opacity-10 rounded-lg shadow-lg">
                {/* Profile Picture */}
                <img
                    src={ProfilePic}
                    alt="Profile"
                    className="w-24 h-24 sm:w-32 sm:h-32 rounded-full border-4 border-[#6556CD] shadow-md transform transition duration-500 hover:scale-105"
                />

                {/* Profile Information and Social Links */}
                <div className="flex flex-col items-center md:items-start space-y-4">
                    <h1 className="text-3xl font-bold text-white">Agnik Paul</h1>
                    <p className="text-gray-300 text-lg">BSc Physics with Computer Science | Kristujayanti College | 2nd Year</p>
                    <div className="flex flex-col space-y-2 text-left">
                        <p className="flex items-center space-x-2 text-gray-300">
                            <i className="ri-phone-line text-[#6556CD]"></i>
                            <span>+91 8509008258</span>
                        </p>
                        <p className="flex items-center space-x-2 text-gray-300">
                            <i className="ri-mail-line text-[#6556CD]"></i>
                            <span>agnikpaul0020@gmail.com</span>
                        </p>
                    </div>
                </div>
            </div>

            {/* Contact Form */}
            <div className="relative z-20 mt-10 w-full max-w-md p-6 bg-white bg-opacity-10 rounded-lg shadow-lg">
                <h2 className="text-2xl font-semibold text-center text-white">Get in Touch</h2>
                <form ref={form} onSubmit={sendEmail} className="flex flex-col space-y-4 mt-4">
                    <input
                        type="text"
                        name="user_name"
                        placeholder="Your Name"
                        className="p-3 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-[#6556CD]"
                    />
                    <input
                        type="email"
                        name="user_email"
                        placeholder="Your Email"
                        className="p-3 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-[#6556CD]"
                    />
                    <textarea
                        name="message"
                        placeholder="Your Message"
                        className="p-3 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-[#6556CD] h-32 resize-none"
                    ></textarea>
                    <button
                        type="submit"
                        className="px-4 py-2 bg-[#6556CD] text-white font-semibold rounded-lg shadow-md hover:bg-[#5144b3] transition duration-300"
                    >
                        Send Message
                    </button>
                </form>
            </div>

            {/* Back Button */}
            <button
                onClick={() => navigate('/')}
                className="absolute sm:bottom-6 px-6 py-2 sm:px-8 sm:py-3 bg-[#6556CD] text-white font-semibold rounded-full shadow-lg transition-transform transform hover:scale-105 hover:bg-[#5144b3] focus:outline-none z-20"
            >
                Back to Homepage
            </button>
        </div>
    );
};

export default Contact;
