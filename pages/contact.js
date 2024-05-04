import React, { useState } from 'react';
import Header from '@/components/Header';  // Make sure the path is correct based on your project structure.
import '../app/globals.css';

const ContactPage = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you can implement the logic to send the email using a backend service or an email API
        // For the sake of this example, let's just log the data to the console
        console.log({ name, email, message });
        setSubmitted(true);
    };

    return (
        <div>
            <Header />
            <main className="w-full flex flex-col justify-center items-center text-center mt-5 bg-gradient-to-r from-green-400 to-blue-500 p-5 rounded-lg shadow">
                <h1 className="text-3xl font-bold text-white">Contact Me</h1>
                {submitted ? (
                    <p className="text-lg text-white">Thank you for your message! I&apos;ll get back to you as soon as possible.</p>
                ) : (
                    <form onSubmit={handleSubmit} className="w-full max-w-lg mt-8">
                        <div className="flex flex-wrap mb-6">
                            <label htmlFor="name" className="block text-white text-lg font-bold mb-2">Name:</label>
                            <input
                                type="text"
                                id="name"
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                placeholder="Your Name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                            />
                        </div>
                        <div className="flex flex-wrap mb-6">
                            <label htmlFor="email" className="block text-white text-lg font-bold mb-2">Email:</label>
                            <input
                                type="email"
                                id="email"
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                placeholder="Your Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <div className="flex flex-wrap mb-6">
                            <label htmlFor="message" className="block text-white text-lg font-bold mb-2">Message:</label>
                            <textarea
                                id="message"
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                rows="4"
                                placeholder="Your Message"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                required
                            ></textarea>
                        </div>
                        <div className="flex justify-center">
                            <button type="submit" className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Send Message</button>
                        </div>
                    </form>
                )}
            </main>
        </div>
    );
}

export default ContactPage;
