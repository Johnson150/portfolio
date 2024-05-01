import React from 'react';
import EducationComponent from '@/components/Education';
import ExperienceComponent from '@/components/Experience';
import SkillsComponent from '@/components/Skills';

function ResumePage() {
    return (
        <div>
            <header>
                <h1>Welcome to My Resume</h1>
            </header>
            <main>
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
