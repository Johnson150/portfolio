import React, { useState, useEffect } from 'react';
import Header from '@/components/Header';
import '../app/globals.css';

const AboutMe = () => {
    const [text, setText] = useState('');
    const fullText = 'print(Hello World!)';

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
        <div>
            <Header />
            <main className="w-full flex flex-col justify-center items-center text-center mt-5 bg-black p-5 rounded-lg shadow">
                <h1 className="text-3xl font-bold text-green-500">{text}</h1> {/* Updated font and color */}
                <p className="mt-2 text-lg slide-transition">More about me...</p>
            </main>
        </div>
    );
};

export default AboutMe;
