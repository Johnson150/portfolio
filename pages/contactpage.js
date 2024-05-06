import Header from "@/components/Header";
import React, { useState, useEffect } from 'react';

export default function Contact() {
    async function handleSubmit(event) {
        event.preventDefault();
        const formData = new FormData(event.target);
        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                body: formData,
            });

            if (!response.ok) {
                console.log("falling over");
                throw new Error(`response status: ${response.status}`);
            }
            const responseData = await response.json();
            console.log(responseData['message']);
            alert('Message successfully sent');
        } catch (err) {
            console.error(err);
            alert("Error, please try resubmitting the form");
        }
    };

    const [text, setText] = useState('');
    const fullText = 'print("Hello!")';

    useEffect(() => {
        let index = 0;
        const intervalId = setInterval(() => {
            setText((prevText) => {
                const newText = prevText + fullText[index];
                index += 1;
                if (index >= fullText.length) {
                    clearInterval(intervalId);
                }
                return newText;
            });
        }, 125);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <main className="flex min-h-screen flex-col items-center bg-gradient-to-r from-brightPink to-brightBlue">
            <Header />
            <h1 className="p-10 text-3xl text-white font-mono relative z-10">{text}</h1>
            <form onSubmit={handleSubmit} className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
                <div className="mb-4 flex flex-col">
                    <label htmlFor="form-name" className="block text-gray-700 font-medium">Name</label>
                    <input id="form-name" autoComplete="name" maxLength={50} size="lg" name="name" className="w-full border rounded-md py-2 px-3 mt-1 text-black" />

                    <label htmlFor="form-email" className="block text-gray-700 font-medium">Email</label>
                    <input id="form-email" required autoComplete="email" maxLength={80} name="email" type="email" className="w-full border rounded-md py-2 px-3 mt-1 text-black" />

                    <label htmlFor="form-phone" className="block text-gray-700 font-medium">Phone Number</label>
                    <input id="form-phone" required autoComplete="tel" maxLength={80} name="phone" type="tel" className="w-full border rounded-md py-2 px-3 mt-1 text-black" />

                    <label htmlFor="form-message" className="block text-gray-700 font-medium">Message</label>
                    <textarea id="form-message" required name="message" rows={5} className="w-full border rounded-md py-2 px-3 mt-1 text-black"></textarea>
                </div>
                <button className="rounded bg-sky-400 px-4 py-2" type="submit">Send</button>
            </form>
        </main>
    )
}
