import React from 'react';
import Link from 'next/link';

const Rules = () => {
    return (
        <div className="min-h-screen bg-background text-foreground">
            <nav className="bg-card shadow">
                <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                    <div className="relative flex items-center justify-between h-16">
                        <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                            <button type="button" className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
                                <span className="sr-only">Open main menu</span>
                                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                                </svg>
                                <svg className="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                        <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                            <div className="flex-shrink-0">
                                <Link href="/">
                                    <span className="text-xl font-bold text-primary cursor-pointer">Home</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

            <main className="py-10">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-card shadow sm:rounded-lg border">
                        <div className="px-4 py-5 sm:px-6">
                            <h1 className="text-2xl font-bold leading-6 text-primary">Hackathon Rules</h1>
                        </div>
                        <hr className="border-t border-border" />
                        <div className="py-16 px-16 ">
                            <ul className="list-disc list-inside space-y-4">
                                <li className="transition duration-500 ease-in-out transform hover:-translate-y-1">
                                    <strong>Rule 1:</strong> Participants must adhere to the code of conduct, promoting a safe and inclusive environment for all.
                                </li>
                                <li className="transition duration-500 ease-in-out transform hover:-translate-y-1">
                                    <strong>Rule 2:</strong> All projects must be submitted by the deadline. Late submissions will not be considered.
                                </li>
                                <li className="transition duration-500 ease-in-out transform hover:-translate-y-1">
                                    <strong>Rule 3:</strong> Teams must consist of no more than 5 members.
                                </li>
                                <li className="transition duration-500 ease-in-out transform hover:-translate-y-1">
                                    <strong>Rule 4:</strong> Plagiarism is strictly prohibited. All code must be original or appropriately licensed.
                                </li>
                                <li className="transition duration-500 ease-in-out transform hover:-translate-y-1">
                                    <strong>Rule 5:</strong> Projects must be original and not previously published or submitted to other hackathons.
                                </li>
                                <li className="transition duration-500 ease-in-out transform hover:-translate-y-1">
                                    <strong>Rule 6:</strong> Participants must use the provided technologies and frameworks to ensure a level playing field.
                                </li>
                                <li className="transition duration-500 ease-in-out transform hover:-translate-y-1">
                                    <strong>Rule 7:</strong> Projects must be related to the hackathon theme, demonstrating relevance and creativity.
                                </li>
                                <li className="transition duration-500 ease-in-out transform hover:-translate-y-1">
                                    <strong>Rule 8:</strong> Participants must attend the mandatory briefing session to understand the rules and judging criteria.
                                </li>
                                <li className="transition duration-500 ease-in-out transform hover:-translate-y-1">
                                    <strong>Rule 9:</strong> Judges' decisions are final and binding. Appeals will not be entertained.
                                </li>
                                <li className="transition duration-500 ease-in-out transform hover:-translate-y-1">
                                    <strong>Rule 10:</strong> Participants must respect the intellectual property rights of others. Any IP violations will result in disqualification.
                                </li>
                                <li className="transition duration-500 ease-in-out transform hover:-translate-y-1">
                                    <strong>Rule 11:</strong> Teams are encouraged to seek help and guidance, but the final project must be the team's own work.
                                </li>
                                <li className="transition duration-500 ease-in-out transform hover:-translate-y-1">
                                    <strong>Rule 12:</strong> Use of harmful or unethical practices is prohibited and will lead to immediate disqualification.
                                </li>
                                <li className="transition duration-500 ease-in-out transform hover:-translate-y-1">
                                    <strong>Rule 13:</strong> All team members must be registered participants of the hackathon.
                                </li>
                                <li className="transition duration-500 ease-in-out transform hover:-translate-y-1">
                                    <strong>Rule 14:</strong> Teams must document their work and be prepared to present their project to the judges.
                                </li>
                                <li className="transition duration-500 ease-in-out transform hover:-translate-y-1">
                                    <strong>Rule 15:</strong> Have fun and embrace the spirit of innovation and collaboration!
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Rules;
