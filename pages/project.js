import React from "react";
import Header from '@/components/Header';  // Make sure the path is correct based on your project structure.
import '../app/globals.css';

const projects = () => {
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