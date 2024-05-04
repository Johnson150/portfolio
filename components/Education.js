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

    if (loading) return <p>Working Hard...</p>;
    if (error) return <p className="text-red-500">Error: {error}</p>;

    return (
        <div className="bg-black text-green-500 p-5 rounded-lg shadow-lg">
            <h1 className="text-3xl font-mono mb-4">Education History</h1>
            {educations.length > 0 ? (
                <ul>
                    {educations.map((education, index) => (
                        <li key={index} className="mb-2">
                            <h2 className="text-2xl font-semibold">{education.institution}</h2>
                            <p className="mt-2 text-lg slide-transition">Diploma: {education.diploma}</p>
                            <p className="mt-2 text-lg slide-transition">From: {education.startDate} To: {education.endDate}</p>
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
