import React from 'react';
import { format, isBefore, isAfter } from 'date-fns';

const TimelineEvent = ({ date, title, description, isPast, isNearest, isLeft }) => (
  <div className={`mb-8 flex w-full ${isLeft ? 'flex-row' : 'flex-row-reverse'} items-center justify-center`}>
    <div className={`w-5/12 ${isLeft ? 'text-right pr-4' : 'text-left pl-4'}`}>
      {isLeft ? (
        <div className={`p-4 rounded-lg ${isPast ? 'bg-none text-muted-foreground' : isNearest ? 'bg-accent text-accent-foreground' : 'bg-none text-secondary-foreground'}`}>
          <h3 className="font-bold text-lg font-mono">{title}</h3>
          <p className="text-sm mt-1">{description}</p>
        </div>
      ) : (
        <div className="text-sm">{format(date, 'd MMM')}</div>
      )}
    </div>
    <div className="w-2/12 flex justify-center">
      <div className="relative">
        <div className={`w-3 h-3 rounded-full ${isPast ? 'bg-muted' : isNearest ? 'bg-accent' : 'bg-secondary'}`} />
        {isNearest && (
          <div className="absolute top-1/2 left-1/2 w-5 h-5 -mt-2.5 -ml-2.5 rounded-full bg-accent opacity-50 animate-ping" />
        )}
      </div>
    </div>
    <div className={`w-5/12 ${isLeft ? 'text-left pl-4' : 'text-right pr-4'}`}>
      {isLeft ? (
        <div className="text-sm">{format(date, 'd MMM')}</div>
      ) : (
        <div className={`p-4 rounded-lg ${isPast ? 'bg-muted text-muted-foreground' : isNearest ? 'bg-accent text-accent-foreground' : 'bg-none text-secondary-foreground'}`}>
          <h3 className="font-bold text-lg font-mono">{title}</h3>
          <p className="text-sm mt-1">{description}</p>
        </div>
      )}
    </div>
  </div>
);

const HackathonTimeline = () => {
  const today = new Date();
  const events = [
    { date: new Date('2025-01-18'), title: 'Registration Opens', description: 'Sign up for the hackathon' },
    { date: new Date('2025-02-25'), title: 'Kickoff Event', description: 'Virtual opening ceremony' },
    { date: new Date('2025-03-01'), title: 'Team Formation', description: 'Find your teammates' },
    { date: new Date('2025-04-08'), title: 'Hacking Begins', description: 'Start working on your projects' },
    { date: new Date('2025-05-15'), title: 'Mid-point Check', description: 'Progress update and mentoring sessions' },
    { date: new Date('2025-06-22'), title: 'Submission Deadline', description: 'Submit your projects for judging' },
    { date: new Date('2025-07-24'), title: 'Presentations', description: 'Present your projects to the judges' },
    { date: new Date('2025-08-25'), title: 'Awards Ceremony', description: 'Winners announced and prizes distributed' },
  ];

  const nearestUpcomingEventIndex = events.findIndex(event => isAfter(event.date, today));

  return (
    <section id="timeline" className="container mx-auto px-4 max-w-4xl">
      <h2 className="text-4xl font-bold font-heading text-primary mt-6 mb-12 text-center">Timeline of Events</h2>
      <div className="relative">
        <div className="absolute h-full w-0.5 bg-accent left-1/2 transform -translate-x-1/2"></div>
        {events.map((event, index) => (
          <TimelineEvent
            key={index}
            {...event}
            isPast={isBefore(event.date, today)}
            isNearest={index === nearestUpcomingEventIndex}
            isLeft={index % 2 === 0}
          />
        ))}
      </div>
    </section>
  );
};

export default HackathonTimeline;