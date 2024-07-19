"use client";

import React, { useState, useEffect } from 'react';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "./ui/accordion"


const FAQ = () => {
    return (
        <section id="faq" className="container mx-auto max-w-screen-xl px-24 my-16">
            <div className="container mx-auto max-w-screen-xl px-24 my-16">
                <h2 className="font-heading font-bold text-primary mb-3 text-center text-4xl">Frequently Asked Questions.</h2>
                <Accordion type="single" collapsible>
                    <AccordionItem value="item-1">
                        <AccordionTrigger>Would you lose?</AccordionTrigger>
                        <AccordionContent>
                            Nah. I'd win.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                        <AccordionTrigger>What is the meaning of life?</AccordionTrigger>
                        <AccordionContent>
                            42.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                        <AccordionTrigger>How do you pronounce GIF?</AccordionTrigger>
                        <AccordionContent>
                            It's pronounced "jif".
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
        </section>
    );
}

export default FAQ;