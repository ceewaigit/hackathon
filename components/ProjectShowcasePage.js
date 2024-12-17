import HoverVideoGuide from "./HoverVideoGuide.js";

const projects = [
  {
    title: "Find a team!",
    description:
      "Try to find people from different backgrounds! This way you can learn from each other and leverage your strengths while compensating for your weaknesses.",
    // videoUrl: "/videos/jjk.mp4",
  },
  {
    title: "Sign up!",
    date: "01/13/2025",
    description: "Tell us you're in. Make sure everyone is a student!",
    // videoUrl: "/videos/buffswim.mp4",
  },
  {
    title: "Build your project!",
    description: "Start cooking.",
    videoUrl: "/videos/sweatycode.mp4",
  },
  {
    title: "(Optional) Record a video of your project!",
    description: "This could be a demo, an online presentation, or a trailer!",
    videoUrl: "/videos/shia.mp4",
  },
  {
    title: "Remember to do up the writeups!",
    description:
      "Tell us what you did and let us know how you did it and convince us why it's cool!",
    videoUrl: "/videos/firewriting.mp4",
  },
  {
    title: "Submit your project!",
    date: "02/02/2025",
    description: "This is when we will judge your masterpiece!",
    videoUrl: "/videos/hotdog.mp4",
  },
  {
    title: "Demo day! Present your project!",
    date: "07/02/2025",
    description:
      "Usually, people think that demo day is solely just a technical presentation. But it is also about the story you tell and the impact you made.",
    // videoUrl: "/videos/buffsuit.mp4",
  },
  {
    title: "win.",
    description:
      "If anything, it is about the friends we made along the way. But also the prizes.",
    // videoUrl: "/videos/idwin.mp4",
  },
];

export default function ProjectShowcasePage() {
  return (
    <div>
      <HoverVideoGuide steps={projects} />
    </div>
  );
}
