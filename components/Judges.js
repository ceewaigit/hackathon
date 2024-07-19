import Image from 'next/image';
import { useEffect, useRef } from 'react';

const judges = [
    { name: 'John Doe', photo: '/person.jpg' },
    { name: 'Jane Smith', photo: '/person.jpg' },
    { name: 'David Johnson', photo: '/person.jpg' },
    { name: 'Emily Brown', photo: '/person.jpg' },
    { name: 'Michael Wilson', photo: '/person.jpg' },
    { name: 'Sarah Davis', photo: '/person.jpg' },
    { name: 'Robert Martinez', photo: '/person.jpg' },
    { name: 'Jennifer Thompson', photo: '/person.jpg' },
];


const JudgeCard = ({ judge }) => (
    <div className="flex-shrink-0 w-[100px] mx-8 flex flex-col items-center">
        <div className="w-24 h-24 relative">
            <Image
                className='rounded-xl object-cover'
                src={judge.photo}
                alt={judge.name}
                layout="fill"
            />
        </div>
        <p className="text-white text-center mt-4">{judge.name}</p>
    </div>
);

const Judges = () => {
    const scrollRef = useRef(null);

    useEffect(() => {
        const scrollContainer = scrollRef.current;
        if (scrollContainer) {
            const originalContent = scrollContainer.innerHTML;
            scrollContainer.innerHTML = originalContent + originalContent;

            // Set the animation duration based on the number of judges
            const totalJudges = judges.length;
            const animationDuration = totalJudges * 5; // 5 seconds per judge
            scrollContainer.style.setProperty('--animation-duration', `${animationDuration}s`);
        }
    }, []);

    return (
        <section id="judges" className="container mx-auto max-w-screen-xl px-8 flex flex-col items-center">
            <h2 className="font-heading font-bold text-white mt-6 mb-3 text-center text-4xl">Judges.</h2>
            <p className="text-hnr-black-70 text-center text-xl font-normal md:w-[528px]">
                And a massive shout-out to our judges helping us bring out the best in your hacks!
            </p>
            <div className="mt-10 w-full overflow-hidden transition duration-200 hover:border-accent border-muted border border-2 rounded-lg p-6">
                <div
                    ref={scrollRef}
                    className="flex animate-infinite-scroll"
                    style={{ width: `${judges.length * 200}px` }} // Adjust based on judge card width
                >
                    {judges.map((judge, index) => (
                        <JudgeCard key={`${judge.name}-${index}`} judge={judge} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Judges;