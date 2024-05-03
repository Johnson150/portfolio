import React, { useState, useEffect } from 'react';
import Header from '@/components/Header';  // Make sure the path is correct based on your project structure.
import '../app/globals.css';

const AboutMe = () => {
    const [text, setText] = useState('');
    const fullText = 'print("Hello Projects!")';

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
            <main className="w-full flex flex-col justify-center items-center text-center mt-5 bg-black p-5 rounded-lg shadow">
                <h1 className="text-3xl font-bold text-green-500">{text}</h1>
                <p className="mt-2 text-lg slide-transition">This page is going to be my projects </p>
                <div className="p-20">
                    <h1 className="text-3xl font-bold text-green-500">NBA App</h1>
                    <p className="mt-2 text-lg slide-transition">
                        This app offers a range of features designed to enhance the basketball fan experience. Users can add, remove, and edit player profiles, empowering them to curate their own personalized roster. Additionally, the app enables users to explore player statistics through intuitive filtering based on specific stat categories. With a convenient search bar, users can easily look up specific players of interest.
                        <br /><br />
                        In addition to these player management capabilities, the app boasts a fully functional sign-up and login page, ensuring a secure and personalized user experience. Furthermore, the inclusion of a trade simulator adds an exciting dynamic, allowing users to simulate player trades by selecting up to two players to exchange.
                    </p>
                    <p className="mt-2 text-lg slide-transition">This is a ongoing project with even more functionality in the near future!</p>
                    <div className='p-5 flex justify-center items-center'>
                        <img src="/NBA Player App.png" alt="Unit Converter Preview" className="w-2/6 h-1/2 rounded-lg shadow-lg slide-transition" ></img>
                    </div>
                    <div className='p-5'>
                        <a href="https://github.com/Johnson150/basketballapp" className="mt-12 bg-green-500 text-white font-bold py-2 px-4 rounded hover:bg-green-600 transition duration-300 slide-up">Code</a>
                        <a href="https://basketballapp.vercel.app/" className="mx-4 mt-12 bg-green-500 text-white font-bold py-2 px-4 rounded hover:bg-green-600 transition duration-300 slide-up">Site</a>
                    </div>
                </div>
                <div className="p-20">
                    <h1 className="text-3xl font-bold text-green-500">IMR Movie App</h1>
                    <p className="mt-2 text-lg slide-transition">This app allows users to add movies, remove movies and edit movies.</p>
                    <div className='p-5 flex justify-center items-center'>
                        <img src="/IMR movie preview.png" alt="IMR Movie App Preview" className="w-2/6 h-1/2 rounded-lg shadow-lg slide-transition" ></img>
                    </div>
                    <div className='p-20'>
                        <a href="https://github.com/NavkiratPuri/asg3movies" className="mt-12 bg-green-500 text-white font-bold py-2 px-4 rounded hover:bg-green-600 transition duration-300 slide-up">Code</a>
                        <a href="https://asg3movies.vercel.app/" className="mx-4 mt-12 bg-green-500 text-white font-bold py-2 px-4 rounded hover:bg-green-600 transition duration-300 slide-up">Site</a>
                    </div>
                </div>
                <div className="p-20">
                    <h1 className="text-3xl font-bold text-green-500">Unit converter</h1>
                    <p className="mt-2 text-lg slide-transition">This app allows users to convert temperature, distance and weight.</p>
                    <div className='p-5 flex justify-center items-center'>
                        <img src="/Unit Converter.png" alt="Unit Converter Preview" className="w-2/6 h-1/2 rounded-lg shadow-lg slide-transition" ></img>
                    </div>
                    <div className='p-5'>
                        <a href="https://github.com/Johnson150/web-dev-2-assignment.github.io" className="mt-12 bg-green-500 text-white font-bold py-2 px-4 rounded hover:bg-green-600 transition duration-300 slide-up">Code</a>
                        <a href="https://johnson150.github.io/web-dev-2-assignment.github.io/" className="mx-4 mt-12 bg-green-500 text-white font-bold py-2 px-4 rounded hover:bg-green-600 transition duration-300 slide-up">Site</a>
                    </div>
                </div>
                <div className="p-20">
                    <h1 className="text-3xl font-bold text-green-500">Raj Robot Rental</h1>
                    <p className="mt-2 text-lg slide-transition">This app allows users to see the price of how much it cost to rent out two different models of robots by duration and rate.</p>
                    <div className='p-5 flex justify-center items-center'>
                        <img src="/raj robot rental.png" alt="Unit Converter Preview" className="w-2/6 h-1/2 rounded-lg shadow-lg slide-transition" ></img>
                    </div>
                    <div className='p-5'>
                        <a href="https://github.com/Johnson150/Raj-Robot-Rental" className="mt-12 bg-green-500 text-white font-bold py-2 px-4 rounded hover:bg-green-600 transition duration-300 slide-up">Code</a>
                        <a href="https://johnson150.github.io/Raj-Robot-Rental/" className="mx-4 mt-12 bg-green-500 text-white font-bold py-2 px-4 rounded hover:bg-green-600 transition duration-300 slide-up">Site</a>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default AboutMe;