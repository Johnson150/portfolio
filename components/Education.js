import React, { useState, useEffect } from 'react';

function EducationComponent() {
    const [educations, setEducations] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Function to fetch education data
    const fetchEducation = async () => {
        try {
            const response = await fetch('/api/education');  // Ensure this URL matches your API endpoint
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            setEducations(data);
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    // useEffect to run the fetch function on component mount
    useEffect(() => {
        fetchEducation();
    }, []);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div>
            <h1>Education History</h1>
            {educations.length > 0 ? (
                <ul>
                    {educations.map((education, index) => (
                        <li key={index}>
                            <h2>{education.institution}</h2>
                            <p>Diploma: {education.diploma}</p>
                            <p>From: {education.startDate} To: {education.endDate}</p>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No education records found.</p>
            )}
        </div>
    );
}

export default EducationComponent;
