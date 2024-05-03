import React, { useState, useEffect } from 'react';

function SkillsComponent() {
    const [skills, setSkills] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Function to fetch skills data
    const fetchSkills = async () => {
        try {
            const response = await fetch('/api/skills');  // Ensure this URL matches your API endpoint
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            setSkills(data);
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    // useEffect to run the fetch function on component mount
    useEffect(() => {
        fetchSkills();
    }, []);

    if (loading) return <p>Working Hard...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div className="bg-black text-green-500 p-5 rounded-lg shadow-lg">
            <h1 className="text-3xl font-bold mb-4">Skills</h1>
            {skills.length > 0 ? (
                <ul>
                    {skills.map((skill, index) => (
                        <li key={index}>
                            <h2 className="text-2xl font-semibold slide-transition" >{skill.name}</h2>
                            <p className="mt-2 text-lg slide-transition">Level: {skill.level}</p>
                        </li >
                    ))
                    }
                </ul >
            ) : (
                <p>No skills records found.</p>
            )}
        </div >
    );
}

export default SkillsComponent;
