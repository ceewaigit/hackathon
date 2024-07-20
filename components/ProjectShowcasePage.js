import HoverVideoGuide from './HoverVideoGuide.js';

const projects = [
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
        title: "Submit your project!",
        date : "03/22/2025",
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