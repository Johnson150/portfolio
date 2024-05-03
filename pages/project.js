import React, { useState, useEffect } from "react";
import Header from '@/components/Header';  // Make sure the path is correct based on your project structure.
import '../app/globals.css';

const projects = () => {
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
            <Header />
            <main>
                <p>This is my project page.</p>
            </main>
        </div>
    );
}

export default projects;