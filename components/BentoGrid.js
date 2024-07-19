import React from 'react';
import CountdownTimer from './CountdownTimer'; // Adjust the import path as needed
import './BentoGrid.css';

const BentoGrid = () => {
    return (
        <section id="about" className="p-4 sm:p-8 md:p-16 mx-4 sm:mx-8 md:mx-16 text-foreground">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="bg-secondary p-4 sm:p-5 rounded-2xl border-accent transition duration-300 ease-in-out hover:border-2 hover:scale-95 shadow shadow-black">
                    <h2 className="text-lg sm:text-xl font-semibold mb-2 font-mono">1. What is <span className='text-smu'>SMU</span> HackBIA?</h2>
                    <p className="text-primary text-sm sm:text-base"><span className='text-smu'>SMU</span> HackBIA is an exciting datathon hosted by <span className='text-smu'>SMU</span>s Business Intelligence & Analytics. It is a platform for students to collaborate, innovate, and create impactful solutions to real-world problems using technology.</p>
                </div>
                <div className="bg-secondary shadow-inner p-4 sm:p-5 rounded-2xl sm:col-span-1 border-accent transition duration-300 ease-in-out hover:border-2 hover:scale-95 shadow shadow-black">
                    <h2 className="text-lg sm:text-xl font-semibold mb-2 font-mono">2. Who Can Participate?</h2>
                    <p className="text-primary text-sm sm:text-base"><span className='text-smu'>SMU</span> HackBIA is open to all university students, regardless of their major or coding experience. Whether you are a seasoned programmer or a curious beginner, you are welcome to join and learn!</p>
                </div>
                <div className="bg-secondary shadow-inner p-1 rounded-2xl row-span-1 sm:row-span-2 border-accent transition duration-300 ease-in-out shadow shadow-black">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.795238709648!2d103.84683801209982!3d1.2975541617330177!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da19a340000001%3A0xdb2ba83d5e574a35!2s<span className='text-smu'>SMU</span>%20School%20of%20Computing%20and%20Information%20Systems%201!5e0!3m2!1sen!2ssg!4v1721398632345!5m2!1sen!2ssg"
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        className="w-full h-full min-h-[200px] sm:min-h-[300px] rounded-2xl"
                    ></iframe>
                </div>
                <div className="bg-secondary shadow-inner p-4 sm:p-5 rounded-2xl col-span-1 sm:col-span-2 row-span-1 sm:row-span-2 border-accent transition duration-300 ease-in-out hover:border-2 hover:scale-95 shadow shadow-black">
                    <CountdownTimer />
                </div>
                <div className="bg-secondary shadow-inner p-4 sm:p-5 rounded-2xl col-span-1 border-accent transition duration-300 ease-in-out hover:border-2 hover:scale-95 shadow shadow-black">
                    <h2 className="text-lg sm:text-xl font-semibold mb-2 font-mono">3. Prizes and Rewards</h2>
                    <p className="text-primary text-sm sm:text-base mb-2">Compete for exciting prizes including cash rewards, internship opportunities, and cutting-edge tech gadgets. The total prize pool is over $10,000!</p>
                    <p className="text-primary text-sm sm:text-base">All participants will receive swag bags, certificates, and invaluable networking opportunities with industry professionals.</p>
                </div>
                <div className="bg-secondary shadow-inner p-4 sm:p-5 rounded-2xl col-span-1 sm:col-span-1 lg:col-span-2 border-accent transition duration-300 ease-in-out hover:border-2 hover:scale-95 shadow shadow-black">
                    <h2 className="text-lg sm:text-xl font-semibold mb-2 font-mono">4. Schedule and Theme</h2>
                    <p className="text-primary text-sm sm:text-base mb-2"><span className='text-smu'>SMU</span> HackBIA kicks off on August 15th at 6 PM and concludes on August 16th at 6 PM. The theme this year is "Tech for Social Good," challenging participants to develop solutions that address pressing social issues.</p>
                    <p className="text-primary text-sm sm:text-base">The event includes workshops, mentoring sessions, and fun activities throughout the 24 hours. Do not miss the opening ceremony and team formation activities!</p>
                </div>
                <div className="bg-secondary shadow-inner p-4 sm:p-5 rounded-2xl col-span-1 sm:col-span-1 lg:col-span-1 border-accent transition duration-300 ease-in-out hover:border-2 hover:scale-95 shadow shadow-black">
                    <h2 className="text-lg sm:text-xl font-semibold mb-2 font-mono">5. How to hand in your project?</h2>
                    <p className="text-primary text-sm sm:text-base mb-2">All project submissions must be uploaded to the <span className='text-smu'>SMU</span> HackBIA platform by the deadline. Teams will present their projects to a panel of judges, who will evaluate them based on creativity, technical complexity, and social impact.</p>
                    <p className="text-primary text-sm sm:text-base">Prepare a compelling presentation and demo to showcase your project features and functionalities. Good luck!</p>
                </div>
            </div>
        </section>
    );
};

export default BentoGrid;