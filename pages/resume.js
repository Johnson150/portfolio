import React, { useState, useEffect } from "react";
import EducationComponent from '@/components/Education';
import ExperienceComponent from '@/components/Experience';
import SkillsComponent from '@/components/Skills';
import Header from '@/components/Header';
import '../app/globals.css';

function ResumePage() {
    const [text, setText] = useState('');
    const fullText = 'print("Hello Resume!");';

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
        <div className="min-h-screen">
            <Header />
            <h1 className="p-10 text-3xl font-mono text-white text-center mb-6">{text}</h1>
            <main className="container mx-auto px-4 pt-24">

                <div className="bg-gradient-to-r from-brightPink to-brightBlue text-white p-5 rounded-lg shadow-xl">
                    <p className="text-lg font-bold slide-transition">Johnson Giang</p>
                    <p className="text-md slide-transition">Phone Number: 587-439-0250</p>
                    <p className="text-md slide-transition">Email: Johnson.Giang21@gmail.com</p>
                </div>
                <EducationComponent />
                <SkillsComponent />
                <ExperienceComponent />
            </main>
        </div>
    );
}

export default ResumePage;
