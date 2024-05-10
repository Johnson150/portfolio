import Header from "@/components/Header";
import React, { useState, useEffect } from 'react';

export default function Contact() {
    const [isEmailSent, setIsEmailSent] = useState(false);
    const [text, setText] = useState('');
    const [fullText, setFullText] = useState('print("Hello!");');

    useEffect(() => {
        console.log("isEmailSent changed:", isEmailSent);
        if (isEmailSent) {
            setFullText('print("Thanks!");');
        }
    }, [isEmailSent]);

    useEffect(() => {
        console.log("fullText changed:", fullText);
        let index = 0;
        const intervalId = setInterval(() => {
            setText((prevText) => {
                const newText = prevText + fullText[index];
                index += 1;
                console.log("newText:", newText);
                if (index >= fullText.length) {
                    clearInterval(intervalId);
                }
                return newText;
            });
        }, 125);

        return () => clearInterval(intervalId);
    }, [fullText]);

    async function handleSubmit(event) {
        event.preventDefault();
        const formData = {
            name: event.target.name.value,
            email: event.target.email.value,
            phone: event.target.phone.value,
            message: event.target.message.value
        };

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                console.log("falling over");
                throw new Error(`response status: ${response.status}`);
            }
            setIsEmailSent(true);
            setText('');
        } catch (err) {
            console.error(err);
            alert("Error, please try resubmitting the form");
        }
    };

    return (
        <main className="flex min-h-screen flex-col items-center bg-gradient-to-r from-brightPink to-brightBlue">
            <Header />
            <h1 className="p-10 text-3xl text-white font-mono relative z-10">{text}</h1>
            <p className="text-white text-lg"> The form will send to my personal email</p>
            {!isEmailSent ? (
                <form onSubmit={handleSubmit} className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
                    <div className="mb-4 flex flex-col">
                        <label htmlFor="form-name" className="block text-gray-700 font-medium text-white slide-transition">Name</label>
                        <input id="form-name" autoComplete="name" maxLength={50} size="lg" name="name" className="w-full border rounded-md py-2 px-3 mt-1 text-black" />

                        <label htmlFor="form-email" className="block text-gray-700 font-medium text-white slide-up">Email</label>
                        <input id="form-email" required autoComplete="email" maxLength={80} name="email" type="email" className="w-full border rounded-md py-2 px-3 mt-1 text-black" />

                        <label htmlFor="form-phone" className="block text-gray-700 font-medium text-white slide-transition">Phone Number</label>
                        <input id="form-phone" required autoComplete="tel" maxLength={80} name="phone" type="tel" className="w-full border rounded-md py-2 px-3 mt-1 text-black" />

                        <label htmlFor="form-message" className="block text-gray-700 font-medium text-white slide-up">Message</label>
                        <textarea id="form-message" required name="message" rows={5} className="w-full border rounded-md py-2 px-3 mt-1 text-black"></textarea>
                    </div>
                    <button className="rounded bg-sky-400 px-4 py-2 text-white" type="submit">Send</button>
                </form>

            ) : (
                <div className="flex flex-col items-center mt-8 text-white">
                    <h2 className="text-2xl font-mono">Thank you for contacting us!</h2>
                </div>
            )}
            <div>
                <section className="w-full max-w-4xl mx-auto p-20 z-10">
                    <h2 className="text-2xl font-mono text-white z-10">Don&apos;t want to email?</h2>
                    <div className="flex justify-center items-center h-full">
                        <div className="p-5 grid grid-cols-2 gap-4 items-center justify-center">
                            <img
                                src="/linkedin.png"
                                alt="LinkedIn Logo"
                                className="w-16 h-16 aspect-square cursor-pointer shadow-lg"
                                onClick={() => window.location.href = "https://www.linkedin.com/in/johnson-giang-ab22461a9/"}
                            />
                            <img
                                src="/github logo.png"
                                alt="GitHub Logo"
                                className="w-16 h-16 aspect-square cursor-pointer shadow-lg"
                                onClick={() => window.location.href = "https://github.com/Johnson150"}
                            />
                        </div>
                    </div>
                    <h2 className="text-2xl font-mono text-white z-10">Phone: 587-439-0250</h2>
                </section>
            </div>
        </main>
    )
}