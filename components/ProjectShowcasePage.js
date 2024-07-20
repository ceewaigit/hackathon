import HoverVideoGuide from './HoverVideoGuide.js';

const projects = [
    {
        title : "Find a team!",
        date: "01/01/2025",
        description: "Drag all your friends, or do it alone!",
        videoUrl: "/videos/jjk.mp4"
    },
    {
        title: "Sign up!",
        date: "02/02/2025",
        description: "Tell us you're in!",
        videoUrl: "/videos/buffswim.mp4"
    },
    {
        title: "Start building!",
        description: "Start cooking",
        videoUrl: "/videos/sweatycode.mp4"
    },
    {
        title: "Record a video of your project!",
        description: "Record a video of your project!",
        videoUrl: "/videos/shia.mp4"
    },
    {
        title: "Write up the project description!",
        description: "Tell us about your project!",
        videoUrl: "/videos/firewriting.mp4"
    },
    {
        title: "Submit your project!",
        date: "03/22/2025",
        description: "This is when we will judge your masterpiece!",
        videoUrl: "/videos/hotdog.mp4"
    },
    {
        title: "Present your project!",
        date: "04/01/2025",
        description: "Pitch and sell your vision!",
        videoUrl: "/videos/buffsuit.mp4"
    },
    {
        title: "Win!",
        description: "If anything, it is about the friends we made along the way. But also the prizes.",
        videoUrl: "/videos/rickroll.mp4"
    }
];

export default function ProjectShowcasePage() {
    return (
        <div>
            <HoverVideoGuide steps={projects} />
        </div>
    );
}