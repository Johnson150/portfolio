import React, { useState, useEffect } from 'react';
import Header from '@/components/Header';  // Make sure the path is correct based on your project structure.
import '../app/globals.css';

const Project = () => {
    const [text, setText] = useState('');
    const fullText = 'print("Hello Projects!");';

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
            <main className="w-full flex flex-col justify-center items-center text-center mt-5 p-5 rounded-lg shadow">
                <h1 className="text-3xl font-mono text-white">{text}</h1>
                <div className="p-20">
                    <h2 className="text-2xl font-bold text-white">NBA App</h2>
                    <p className="mt-2 text-lg text-white">
                        This app offers a range of features designed to enhance the basketball fan experience. Users can add, remove, and edit player profiles, empowering them to curate their own personalized roster. Additionally, the app enables users to explore player statistics through intuitive filtering based on specific stat categories. With a convenient search bar, users can easily look up specific players of interest.
                        <br /><br />
                        In addition to these player management capabilities, the app boasts a fully functional sign-up and login page, ensuring a secure and personalized user experience. Furthermore, the inclusion of a trade simulator adds an exciting dynamic, allowing users to simulate player trades by selecting up to two players to exchange.
                    </p>
                    <p className="mt-2 text-lg text-white">This is a ongoing project with even more functionality in the near future!</p>
                    <div className="p-5 flex justify-center items-center">
                        <img src="/NBA app.png" alt="NBA player app Preview" className="w-2/6 h-1/2 rounded-lg shadow-lg" />
                    </div>
                    <div className="p-5">
                        <a className="mx-4 mt-12 bg-red-500 text-white font-bold py-2 px-4 rounded-full hover:bg-red-600 transition duration-300">React.js</a>
                        <a className="mx-4 mt-12 bg-blue-500 text-white font-bold py-2 px-4 rounded-full hover:bg-blue-600 transition duration-300">Tailwind CSS</a>
                        <a className="mx-4 mt-12 bg-orange-500 text-white font-bold py-2 px-4 rounded-full hover:bg-orange-600 transition duration-300">HTML</a>
                        <a className="mx-4 mt-12 bg-green-500 text-white font-bold py-2 px-4 rounded-full hover:bg-green-600 transition duration-300">MongoDB</a>
                        <a className="mx-4 mt-12 bg-purple-500 text-white font-bold py-2 px-4 rounded-full hover:bg-purple-600 transition duration-300">Next.js</a>
                    </div>
                    <div className="p-5">
                        <a href="https://nba-project-mu.vercel.app/" className="mx-4 mt-12 bg-yellow-500 text-white font-bold py-2 px-4 rounded hover:bg-yellow-600 transition duration-300">Site</a>
                    </div>

                </div>
                <div className="p-20">
                    <h2 className="text-2xl font-bold text-white">IMR Movie App</h2>
                    <p className="mt-2 text-lg text-white">This app allows users to add movies, remove movies and edit movies.</p>
                    <div className="p-5 flex justify-center items-center">
                        <img src="/IMR movie preview.png" alt="IMR Movie App Preview" className="w-2/6 h-1/2 rounded-lg shadow-lg" />
                    </div>
                    <div className="p-5">
                        <a className="mx-4 mt-12 bg-red-500 text-white font-bold py-2 px-4 rounded-full hover:bg-red-600 transition duration-300">React.js</a>
                        <a className="mx-4 mt-12 bg-blue-500 text-white font-bold py-2 px-4 rounded-full hover:bg-blue-600 transition duration-300">Tailwind CSS</a>
                        <a className="mx-4 mt-12 bg-orange-500 text-white font-bold py-2 px-4 rounded-full hover:bg-orange-600 transition duration-300">HTML</a>
                        <a className="mx-4 mt-12 bg-green-500 text-white font-bold py-2 px-4 rounded-full hover:bg-green-600 transition duration-300">MongoDB</a>
                        <a className="mx-4 mt-12 bg-purple-500 text-white font-bold py-2 px-4 rounded-full hover:bg-purple-600 transition duration-300">Next.js</a>
                    </div>
                    <div className="p-5">
                        <a href="https://asg3movies.vercel.app/" className="mx-4 mt-12 bg-yellow-500 text-white font-bold py-2 px-4 rounded hover:bg-yellow-600 transition duration-300">Site</a>
                    </div>
                </div>
                <div className="p-20">
                    <h2 className="text-2xl font-bold text-white">Unit converter</h2>
                    <p className="mt-2 text-lg text-white">This app allows users to convert temperature, distance and weight.</p>
                    <div className="p-5 flex justify-center items-center">
                        <img src="/Unit Converter.png" alt="Unit Converter Preview" className="w-2/6 h-1/2 rounded-lg shadow-lg" />
                    </div>
                    <div className="p-5">
                        <a className="mx-4 mt-12 bg-red-500 text-white font-bold py-2 px-4 rounded-full hover:bg-red-600 transition duration-300">React.js</a>
                        <a className="mx-4 mt-12 bg-blue-500 text-white font-bold py-2 px-4 rounded-full hover:bg-blue-600 transition duration-300">Tailwind CSS</a>
                        <a className="mx-4 mt-12 bg-orange-500 text-white font-bold py-2 px-4 rounded-full hover:bg-orange-600 transition duration-300">HTML</a>
                    </div>
                    <div className="p-5">
                        <a href="https://johnson150.github.io/web-dev-2-assignment.github.io/" className="mx-4 mt-12 bg-yellow-500 text-white font-bold py-2 px-4 rounded hover:bg-yellow-600 transition duration-300">Site</a>
                    </div>
                </div>
                <div className="p-20">
                    <h2 className="text-2xl font-bold text-white">Raj Robot Rental</h2>
                    <p className="mt-2 text-lg text-white">This app allows users to see the price of how much it cost to rent out two different models of robots by duration and rate.</p>
                    <div className="p-5 flex justify-center items-center">
                        <img src="/raj robot rental.png" alt="Unit Converter Preview" className="w-2/6 h-1/2 rounded-lg shadow-lg" />
                    </div>
                    <div className="p-5">
                        <a className="mx-4 mt-12 bg-red-500 text-white font-bold py-2 px-4 rounded-full hover:bg-red-600 transition duration-300">JavaScript</a>
                    </div>
                    <div className="p-5">
                        <a href="https://johnson150.github.io/Raj-Robot-Rental/" className="mx-4 mt-12 bg-yellow-500 text-white font-bold py-2 px-4 rounded hover:bg-yellow-600 transition duration-300">Site</a>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default Project;
