"use client";

import React from 'react';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "./ui/accordion"

const FAQ = () => {
    return (
        <section id="faq" className="container mx-auto my-28 px-6 sm:px-8 lg:px-10">
            <div className="mx-auto max-w-2xl">
                <h2 className="font-heading font-bold text-primary mb-8 text-center text-4xl">Frequently Asked Questions</h2>
                <Accordion type="single" collapsible>
                    <AccordionItem value="item-1">
                        <AccordionTrigger>What is the format of this hackathon?</AccordionTrigger>
                        <AccordionContent>
                            Our hackathon combines learning and hands-on project development. We&apos;ll have lessons on various tech topics, followed by project work sessions where you can apply what you&apos;ve learned.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                        <AccordionTrigger>How long does the hackathon last?</AccordionTrigger>
                        <AccordionContent>
                            The hackathon runs up until the <a href='#about' className='text-accent underline'>timer</a> ends. We have scheduled lessons and project work sessions throughout this period.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                        <AccordionTrigger>Who can participate?</AccordionTrigger>
                        <AccordionContent>
                            This hackathon is open to <span className='text-accent'>anybody</span>. We welcome participants of all skill levels, from beginners to experienced developers.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-5">
                        <AccordionTrigger>Do I need to attend all the lessons?</AccordionTrigger>
                        <AccordionContent>
                            While we encourage attending all lessons to get the most out of the experience, it&apos;s not mandatory. You can choose the sessions most relevant to your interests and project.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-6">
                        <AccordionTrigger>Can I work on my own project idea?</AccordionTrigger>
                        <AccordionContent>
                            Absolutely! We encourage you to bring your own ideas. However, we&apos;ll also provide project suggestions if you need inspiration.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-7">
                        <AccordionTrigger>Is there a team size limit?</AccordionTrigger>
                        <AccordionContent>
                            Teams can have up to 5 members. Alternatively, you can also participate as an individual if you prefer.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-9">
                        <AccordionTrigger>Is there a registration fee?</AccordionTrigger>
                        <AccordionContent>
                            It is completely free to participate in this hackathon. Just bring your enthusiasm and eagerness to learn!
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-10">
                        <AccordionTrigger>Will there be mentors available?</AccordionTrigger>
                        <AccordionContent>
                            Yes, we&apos;ll have experienced mentors available throughout the hackathon to help with technical questions and provide guidance on your projects.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-11">
                        <AccordionTrigger>How will projects be evaluated?</AccordionTrigger>
                        <AccordionContent>
                            Projects will be evaluated based on creativity, technical complexity, impact, and presentation quality. Judges include industry experts, faculty members, and alumni.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-12">
                        <AccordionTrigger>Are there prizes for the winners?</AccordionTrigger>
                        <AccordionContent>
                            Yes! We have exciting prizes for the top projects. Prize details will be announced at the opening ceremony of the hackathon.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-13">
                        <AccordionTrigger>What do I include in my pitch deck?</AccordionTrigger>
                        <AccordionContent>
                            <h2 className='text-lg font-bold text-center text-red-300'>We are not expecting any particular format for your pitch deck. However, here are some general tips:</h2>
                            <p className="text-primary text-sm sm:text-base mt-4">
                                <strong>For Consumer Products:</strong> Focus on user experience, market fit, and growth potential. 📱
                            </p>
                            <p className="text-primary text-sm sm:text-base mt-2">
                                <strong>For Machine Learning Projects:</strong> Emphasize your dataset, model architecture, and performance metrics. 🤖
                            </p>
                            <p className="text-primary text-sm sm:text-base mt-2">
                                <strong>For Data Visualizations:</strong> Highlight data sources, cleaning process, and key insights derived. 📈
                            </p>
                            <p className="text-primary text-sm sm:text-base mt-2">
                                <strong>For Hardware Projects:</strong> Discuss materials, design process, and real-world applications. 🔩
                            </p>
                            <p className="text-primary text-sm sm:text-base mt-2">
                                <strong>For Social Impact Projects:</strong> Emphasize the problem&apos;s significance and your solution&apos;s potential impact. ❤️
                            </p>
                            <p className="text-primary text-sm sm:text-base mt-4">
                                Make sure to include your tech stack and architecture, any relevant metrics, any discoveries you made, a demo of your project, and any future plans you have for the project.
                            </p>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
        </section>
    );
}

export default FAQ;