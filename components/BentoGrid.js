import React from "react";
import CountdownTimer from "./CountdownTimer"; // Adjust the import path as needed
import "./BentoGrid.css";
import Image from 'next/image';

const BentoGrid = () => {
    return (
        <section
            id="about"
            className="p-4 sm:p-8 md:p-16 mx-4 sm:mx-8 md:mx-16 text-foreground mt-16"
        >
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="bg-secondary p-4 sm:p-5 rounded-2xl border-accent transition duration-300 ease-in-out hover:border-2 shadow shadow-black">
                    <h2 className="text-lg sm:text-xl font-semibold mb-2 font-mono">
                        1. What is <span className="text-smu">SMU</span>
                        <span className="text-accent">BIA</span> Datathon? 🤔
                    </h2>
                    <p className="text-primary text-sm sm:text-base">
                        Datathon is an exciting hackathon hosted by{" "}
                        <span className="text-smu">SMU</span>&apos;s Business Intelligence &
                        Analytics. It is a chance for students to collaborate, innovate, and
                        create impactful solutions to real-world problems using technology.
                        🚀
                    </p>
                </div>
                <div className="bg-secondary p-4 sm:p-5 rounded-2xl sm:col-span-1 border-accent transition duration-300 ease-in-out hover:border-2 shadow shadow-black">
                    <h2 className="text-lg sm:text-xl font-semibold mb-2 font-mono">
                        2. Who Can Participate?
                    </h2>
                    <p className="text-primary text-sm sm:text-base">
                        Datathon is open to all students, regardless of their university,
                        major or coding experience. Whether you are a seasoned programmer or
                        a curious beginner, you are welcome to join the experience! 👩‍💻👨‍💻
                    </p>
                </div>
                <div className="bg-secondary p-1 rounded-2xl row-span-1 sm:row-span-2 border-accent transition duration-300 ease-in-out shadow shadow-black">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.795238709648!2d103.84683801209982!3d1.2975541617330177!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da19a340000001%3A0xdb2ba83d5e574a35!2s<span className='text-smu'>SMU</span>%20School%20of%20Computing%20and%20Information%20Systems%201!5e0!3m2!1sen!2ssg!4v1721398632345!5m2!1sen!2ssg"
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        className="w-full h-full min-h-[200px] sm:min-h-[300px] rounded-2xl"
                    ></iframe>
                </div>
                <div className="bg-secondary p-4 sm:p-5 rounded-2xl col-span-1 sm:col-span-2 row-span-1 sm:row-span-2 border-accent transition duration-300 ease-in-out hover:border-2 shadow shadow-black">
                    <CountdownTimer />
                </div>
                <div className="bg-secondary p-4 sm:p-5 rounded-2xl col-span-1 border-accent transition duration-300 ease-in-out hover:border-2 shadow shadow-black">
                    <h2 className="text-lg sm:text-xl font-semibold mb-2 font-mono">
                        3. What should I build? 💡
                    </h2>
                    <p className="text-primary text-sm sm:text-base mb-2">
                        The Problem Statement will be released from 13 January onwards.{" "}
                        <br />
                        But our advice is: Be innovative, aim big, change the game! 🌟🚀
                    </p>
                </div>
                <div className="bg-secondary flex p-4 md:pt-0 rounded-2xl col-span-1 sm:col-span-1 lg:col-span-2 border-accent transition duration-300 ease-in-out hover:border-2 shadow shadow-black">
                    <Image
                        src="/calandar.png"
                        alt="Calendar"
                        width={100}
                        height={100}
                        className="hidden md:block h-[10vh] w-auto object-contain"
                        priority
                    />
                    <div className="flex flex-col p-0 md:p-8">
                        <h2 className="text-lg sm:text-xl font-semibold mb-2 font-mono">
                            4. Theme
                        </h2>
                        <p className="text-primary text-sm sm:text-base mb-2">
                            Datathon 2025 will have a problem statement that is presented by
                            Ministry Of Home Affairs. 📝🔍
                        </p>

                        <p className="text-primary text-sm sm:text-base mb-2">
                            ** INSERT SOME DIRECTION ON PROBLEM STATEMENT* <br /> Please do
                            wait out till 13 Januart for the release of the Problem Statement.
                            For now, hold tight!
                        </p>
                    </div>
                </div>
                <div className="bg-secondary p-4 sm:p-5 rounded-2xl col-span-1 sm:col-span-1 lg:col-span-1 border-accent transition duration-300 ease-in-out hover:border-2 shadow shadow-black">
                    <h2 className="text-lg sm:text-xl font-semibold mb-2 font-mono">
                        5. Judging Criteria 🏆
                    </h2>
                    <p className="text-primary text-sm sm:text-base mb-2">
                        Projects will be evaluated based on creativity, technical
                        complexity, impact, and presentation quality. Judges include
                        industry experts, professors, faculty members. 🧑‍🏫👩‍🔬
                    </p>
                    <p className="text-primary text-sm sm:text-base">
                        Please do submit the different documents required as per the launch
                        infodeck.
                    </p>

                </div>
            </div>
        </section>
    );
};

export default BentoGrid;
