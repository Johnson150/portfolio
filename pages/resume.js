import React, { useState, useEffect } from "react";
import EducationComponent from '@/components/Education';
import ExperienceComponent from '@/components/Experience';
import SkillsComponent from '@/components/Skills';
import Header from '@/components/Header';
import '../app/globals.css';

function ResumePage() {
    const [text, setText] = useState('');
    const fullText = 'print(Hello Resume!)';

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
            <main>
                <Header />
                <h1 className="text-3xl font-bold text-green-500 text-center">{text}</h1>
                <div className="bg-black text-green-500 p-5 rounded-lg shadow-lg">
                    <p className="mt-2 text-lg slide-transition">Johnson Giang</p>
                    <p className="mt-2 text-lg slide-transition">136 Rundlehill Dr NE Calgary, Alberta</p>
                    <p className="mt-2 text-lg slide-transition">Phone Number: 587-439-0250</p>
                    <p className="mt-2 text-lg slide-transition">Johnson.Giang21@gmail.com</p>
                </div>
                <EducationComponent />
                <SkillsComponent />
                <ExperienceComponent />
            </main>
        </div>
    );
}

export default ResumePage;
