import gitImage from "../assets/portfol-img-1.webp";
import edenImage from "../assets/portfol-img-3.webp";
import hackathonImage from "../assets/hackatjon-screenshot.webp";

export const projectData = [
  {
    title: "Github Repositories",
    techLists: ["React", "Framer-motion", "Tailwindcss", "React-Query"],
    text: "A list of my github Repositories using react-query to fetch from the github Rest Api. It also includes pagination of the list of my repositories",
    img: gitImage,
    link: "https://github.com/talentlessDeveloper/github-repositories",
    live: "http://github-repositories-ten.vercel.app/",
    reverse: true,
    id: Math.random() * 1000,
  },
  {
    title: "OurEden Clone",
    techLists: ["React", "Scss", "React-Query"],
    text: "This is a clone of OurEden Website, a company that offers services in food,laundry and cleaning",
    img: edenImage,
    link: "https://github.com/talentlessDeveloper/ouredenclone",
    live: "https://talentlessdeveloper.github.io/ouredenclone/",
    reverse: false,
    id: Math.random() * 1000,
  },
  {
    title: "Hackathon Challenge",
    techLists: ["JavaScript", "CSS"],
    text: "An Altschool Hackathon project that involves building a dashboard to get information about students, a phonie that tells user what telecommunication carrier they are using and a redactr to help user share content safely on social media by scrambling words.",
    img: hackathonImage,
    link: "https://github.com/chimoski/Altschool-circle-153-hackathon",
    live: "https://altschool-circle-153-hackathon.vercel.app/",
    reverse: true,
    id: Math.random() * 1000,
  },
];
