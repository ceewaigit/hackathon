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
            <div className="bg-secondary shadow-inner p-4 p-5 rounded-2xl row-span-3 sm:row-span-1 md:row-span-2  border-accent transition duration-300 ease-in-out hover:border-2 hover:scale-95 shadow shadow-black">
                <h2 className="text-xl font-semibold mb-2">3. Ullam unde dolores aliquid</h2>
                <p className="text-primary mb-2">Consectetur adipisicing elit. Neque hic iusto tenetur, distinctio alias iste expedita ullam unde dolores aliquid, ipsa laudantium rerum deleniti.</p>
                <p className="text-primary">Consectetur adipisicing elit. Neque hic iusto tenetur, distinctio alias iste expedita ullam unde dolores aliquid.</p>
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