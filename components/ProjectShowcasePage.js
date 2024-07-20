import HoverVideoGuide from './HoverVideoGuide.js';

const projects = [
    {
        title : "Find a team!",
        date: "01/01/2025",
        description: "Find a team to work with!",
        videoUrl: "/videos/placeholder.mp4"
    },
    {
        title: "Sign up!",
        date: "02/02/2025",
        description: "Sign up for the Hackathon!",
        videoUrl: "/videos/placeholder.mp4"
    },
    {
        title: "Start building!",
        description: "Make your project!",
        videoUrl: "/videos/placeholder.mp4"
    },
    {
        title: "Record a video of your project!",
        description: "Record a video of your project!",
        videoUrl: "/videos/placeholder.mp4"
    },
    {
        title: "Write up a description!",
        description: "Write up a project description!",
        videoUrl: "/videos/placeholder.mp4"
    },
    {
        title: "Submit your project!",
        date: "03/22/2025",
        description: "Submit your project for judging!",
        videoUrl: "/videos/placeholder.mp4"
    },
    {
        title: "Win!",
        description: "Win prizes!",
        videoUrl: "/videos/placeholder.mp4"
    }
];

export default function ProjectShowcasePage() {
    return (
        <div>
            <HoverVideoGuide steps={projects} />
        </div>
    );
}