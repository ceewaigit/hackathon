import React from 'react';
import CountdownTimer from './CountdownTimer'; // Adjust the import path as needed\
import './BentoGrid.css';

const BentoGrid = () => {
return (
    <section id="about" className="p-16 md:p-5 sm:p-5 mx-16 text-foreground">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mx-20">
            <div className="bg-secondary p-5 rounded-2xl border-accent transition duration-300 ease-in-out hover:border-2 hover:scale-95 shadow shadow-black">
                <h2 className="text-xl font-semibold mb-2">1. Lorem ipsum dolor</h2>
                <p className="text-primary">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque hic iusto tenetur, distinctio alias iste expedita ullam unde dolores aliquid, ipsa laudantium rerum deleniti, tempora enim dolore? Ab, neque ratione?</p>
            </div>
            <div className="bg-secondary shadow-inner p-5 rounded-2xl col-span-2 sm:col-span-1 border-accent transition duration-300 ease-in-out hover:border-2 hover:scale-95 shadow shadow-black">
                <h2 className="text-xl font-semibold mb-2">2. Distinctio alias</h2>
                <p className="text-primary">Neque hic iusto tenetur, distinctio alias iste expedita ullam unde dolores aliquid, ipsa laudantium rerum deleniti, tempora enim dolore? Ab, neque ratione?</p>
            </div>
            <div className="bg-secondary shadow-inner p-1 rounded-2xl row-span-3 sm:row-span-1 md:row-span-2 border-accent transition duration-300 ease-in-out shadow shadow-black">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.795238709648!2d103.84683801209982!3d1.2975541617330177!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da19a340000001%3A0xdb2ba83d5e574a35!2sSMU%20School%20of%20Computing%20and%20Information%20Systems%201!5e0!3m2!1sen!2ssg!4v1721398632345!5m2!1sen!2ssg" 
            allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" className='w-full h-full rounded-2xl'>
            </iframe>
            </div>
            <div className="bg-secondary shadow-inner p-4 p-5 rounded-2xl col-span-2 row-span-2 border-accent transition duration-300 ease-in-out hover:border-2 hover:scale-95 shadow shadow-black">
                <CountdownTimer />
            </div>
            <div className="bg-secondary shadow-inner p-5 rounded-2xl col-span-1 border-accent transition duration-300 ease-in-out hover:border-2 hover:scale-95 shadow shadow-black">
                <h2 className="text-xl font-semibold mb-2">5. Facere aut porro</h2>
                <p className="text-primary mb-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa laudantium rerum deleniti, tempora enim dolore? Ab, neque ratione?</p>
                <p className="text-primary">Dicta at dolor sint, unde labore, numquam sunt id provident facilis architecto.</p>
            </div>
            <div className="bg-secondary shadow-inner p-5 rounded-2xl col-span-3 border-accent transition duration-300 ease-in-out hover:border-2 hover:scale-95 shadow shadow-black">
                <h2 className="text-xl font-semibold mb-2">6. Consectetur</h2>
                <p className="text-primary mb-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque hic iusto tenetur, distinctio alias iste expedita ullam unde dolores aliquid, ipsa laudantium rerum deleniti, tempora enim dolore? Ab, neque ratione?</p>
                <p className="text-primary">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo repellendus beatae adipisci soluta iusto doloremque, veritatis cupiditate.</p>
            </div>
        </div>
    </section>
);
};

export default BentoGrid;