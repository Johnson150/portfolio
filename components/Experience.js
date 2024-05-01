import React, { useState, useEffect } from 'react';

function ExperienceComponent() {
    const [experiences, setExperiences] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Function to fetch experience data
    const fetchExperience = async () => {
        try {
            const response = await fetch('/api/experience');  // Ensure this URL matches your API endpoint
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            setExperiences(data);
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    // useEffect to run the fetch function on component mount
    useEffect(() => {
        fetchExperience();
    }, []);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div>
            <h1>Professional Experience</h1>
            {experiences.length > 0 ? (
                <ul>
                    {experiences.map((experience, index) => (
                        <li key={index}>
                            <h2>{experience.company}</h2>
                            <p>Position: {experience.position}</p>
                            <p>Description: {experience.description}</p>
                            <p>From: {experience.startDate} To: {experience.endDate}</p>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No experience records found.</p>
            )}
        </div>
    );
}

export default ExperienceComponent;
