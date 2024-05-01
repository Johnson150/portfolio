import React from "react";
import Header from '@/components/Header';  // Make sure the path is correct based on your project structure.
import '../app/globals.css';
const AboutMe = () => {
    return (
        <div>
            <Header />
            <main>
                <p>This is the About Me page content.</p>
            </main>
        </div>
    );
}

export default AboutMe;
