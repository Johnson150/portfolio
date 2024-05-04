import React, { useState, useEffect } from 'react';
import Header from '@/components/Header';
import '../app/globals.css';

const AboutMe = () => {
    const [text, setText] = useState('');
    const fullText = 'print("Hello World!")';

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
        <div className="min-h-screen bg-gradient-to-r from-brightPink to-brightBlue relative">
            <Header />
            <main className="w-full flex flex-col justify-center items-center text-center mt-5 p-5 rounded-xl shadow-soft">
                <div className="absolute inset-0 bg-black bg-opacity-30"></div>
                <h1 className="text-3xl text-vibrantYellow font-mono relative z-10">{text}</h1>
                <section className="w-full max-w-4xl mx-auto p-20 rounded-xl shadow-soft bg-transparent text-white relative z-10">
                    <h2 className="text-2xl font-mono">About me</h2>
                    <div className="flex justify-center items-center p-5">
                        <img src="/Profile pic.jpg" alt="profile pic" className="w-48 h-48 rounded-full shadow-xl slide-up" />
                    </div>
                    <p className="text-lg">
                        Hi, my name is Johnson! Growing up, I always had a desire to be creative in different outlets such as being a part of drama productions and choir.
                        Looking for a more creative outlet in my post-secondary life, I decided to pursue the Information Technology and Software Development diploma at the Southern Alberta Institute of Technology.
                        Being able to create applications has always interested me, and going to SAIT really helped me learn lots of skills that will help me in my future professional life.
                        In my year and a half at SAIT, I have learned many programming languages such as PL/SQL, Python, Java, and C#. I&apos;ve also learned and worked with software such as Figma and SIM (Software Ideas Modeler).
                        Through my studies, I have found myself absolutely fascinated with the world of web development. I have learned crucial skills in HTML, CSS, JavaScript, React.js, and Next.js.
                        After my studies, I plan to pursue a career in Web Development.
                    </p>
                </section>
                <h2 className="text-2xl font-mono text-vibrantYellow z-10">Additional links</h2>
                <section className="w-full max-w-4xl mx-auto p-20 z-10">
                    <div className="flex justify-center items-center h-full">
                        <div className="grid grid-cols-2 gap-4 items-center justify-center">
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
                </section>
                <h2 className="text-2xl font-mono text-white z-10">This site is built with:</h2>
                <div className="w-full max-w-4xl mx-auto p-20 grid grid-cols-5 gap-4 z-10">
                    <img src="/HTML.png" alt="HTML logo" className="w-full h-auto aspect-square shadow-lg"></img>
                    <img src="/CSS.jpg" alt="CSS logo" className="w-full h-auto aspect-square shadow-lg"></img>
                    <img src="/JS.jpg" alt="JS logo" className="w-full h-auto aspect-square shadow-lg"></img>
                    <img src="/react logo.png" alt="React logo" className="w-full h-auto aspect-square shadow-lg"></img>
                    <img src="/next js logo.png" alt="Next.js logo" className="w-full h-auto aspect-square shadow-lg"></img>
                </div>
            </main>
        </div >
    );
};

export default AboutMe;
