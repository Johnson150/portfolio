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
        <div>
            <Header />
            <main className="w-full flex flex-col justify-center items-center text-center mt-5 bg-black p-5 rounded-lg shadow">
                <h1 className="text-3xl text-green-500 font-mono realtive">{text}</h1>
                <section className="p-20">
                    <h2 className="text-2xl font-mono text-green-500">About me</h2>
                    <div className="p-5 flex justify-center items-center">
                        <img src="/Profile pic.jpg" alt="profile pic" className="w-auto h-auto rounded-lg shadow-lg slide-up" />
                    </div>
                    <p className="mt-2 text-lg slide-up">
                        Hi, my name is Johnson! Growing up, I always had a desire to be creative in different outlets such as being a part of drama productions and choir.
                        Looking for a more creative outlet in my post-secondary life, I decided to pursue the Information Technology and Software Development diploma at the Southern Alberta Institute of Technology.
                        Being able to create applications has always interested me, and going to SAIT really helped me learn lots of skills that will help me in my future professional life.
                        In my year and a half at SAIT, I have learned many programming languages such as PL/SQL, Python, Java, and C#. I&apos;ve also learned and worked with software such as Figma and SIM (Software Ideas Modeler).
                        Through my studies, I have found myself absolutely fascinated with the world of web development. I have learned crucial skills in HTML, CSS, JavaScript, React.js, and Next.js.
                        After my studies, I plan to pursue a career in Web Development.
                    </p>

                </section>
                <h2 className="text-2xl font-mono text-green-500">Additional links</h2>
                <section className="p-20">
                    <div className="p-5 flex justify-center items-center">
                        <img
                            src="/linkedin.png"
                            alt="LinkedIn Logo"
                            className="w-1/6 h-1/6 rounded-lg shadow-lg slide-transition mx-auto cursor-pointer"
                            onClick={() => window.location.href = "https://www.linkedin.com/in/johnson-giang-ab22461a9/"}
                        />
                        <img
                            src="/github logo.png"
                            alt="github Logo"
                            className="w-1/6 h-1/6 rounded-lg shadow-lg slide-transition mx-auto cursor-pointer"
                            onClick={() => window.location.href = "https://github.com/Johnson150"}
                        />
                    </div>
                </section>
                <h2 className="text-2xl font-mono text-green-500 mt-5">This site is built with:</h2>
                <div className="p-20 flex justify-center items-center">
                    <img src="/HTML.png" alt="HTML logo" className="w-1/6 h-1/6 rounded-lg shadow-lg slide-transition mx-auto"></img>
                    <img src="/CSS.jpg" alt="CSS logo" className="w-1/6 h-1/6 rounded-lg shadow-lg slide-transition mx-auto"></img>
                    <img src="/JS.jpg" alt="JS logo" className="w-1/6 h-1/6 rounded-lg shadow-lg slide-transition mx-auto"></img>
                    <img src="/react logo.png" alt="react logo" className="w-1/6 h-1/6 rounded-lg shadow-lg slide-transition mx-auto"></img>
                    <img src="/next js logo.png" alt="next logo" className="w-1/6 h-1/6 rounded-lg shadow-lg slide-transition mx-auto"></img>
                </div>
            </main >
        </div >

    );
};

export default AboutMe;
