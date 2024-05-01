import React from 'react';
import EducationComponent from '@/components/Education';
import ExperienceComponent from '@/components/Experience';
import SkillsComponent from '@/components/Skills';
import Header from '@/components/Header';
import '../app/globals.css';

function ResumePage() {
    return (
        <div>
            <header>
                <h1>Welcome to My Resume</h1>
            </header>
            <main>
                <Header />
                <EducationComponent />
                <SkillsComponent />
                <ExperienceComponent />
            </main>
            <footer>
                <p>Thank you for visiting my resume site.</p>
            </footer>
        </div>
    );
}

export default ResumePage;
