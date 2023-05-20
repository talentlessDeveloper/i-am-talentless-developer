import gitImage from "../assets/portfol-img-1.webp";
import edenImage from "../assets/portfol-img-3.webp";
import hackathonImage from "../assets/hackatjon-screenshot.webp";
import tintsAndShades from "../assets/tints.webp";
import vueCart from "../assets/vue-cart-1.webp";

export const projectData = [
  {
    title: "Github Repositories",
    techLists: ["React", "Framer-motion", "Tailwindcss", "React-Query"],
    text: "A list of my github Repositories using react-query to fetch from the github Rest Api. It also includes pagination of the list of my repositories",
    img: gitImage,
    link: "https://github.com/talentlessDeveloper/github-repositories",
    live: "http://github-repositories-ten.vercel.app/",
    reverse: true,
    id: 1,
  },
  {
    title: "OurEden Clone",
    techLists: ["React", "Scss", "React-Query"],
    text: "This is a clone of OurEden Website, a company that offers services in food,laundry and cleaning",
    img: edenImage,
    link: "https://github.com/talentlessDeveloper/ouredenclone",
    live: "https://talentlessdeveloper.github.io/ouredenclone/",
    reverse: false,
    id: 2,
  },
  {
    title: "Vue Cart",
    techLists: ["Firebase", "JavaScript", "CSS", "Vue", "Pinia"],
    text: "This is an authenticated app that allows you view products  using firebase authentication to validate users and also using vue's router beforeEach to protect routes. The app's states are managed by Pinia store ",
    img: vueCart,
    link: "https://github.com/talentlessDeveloper/vue-cart",
    live: "https://vue-cart-five.vercel.app/",
    reverse: true,
    id: 5,
  },
  {
    title: "Hackathon Challenge",
    techLists: ["JavaScript", "CSS"],
    text: "An Altschool Hackathon project that involves building a dashboard to get information about students, a phonie that tells user what telecommunication carrier they are using and a redactr to help user share content safely on social media by scrambling words.",
    img: hackathonImage,
    link: "https://github.com/chimoski/Altschool-circle-153-hackathon",
    live: "https://altschool-circle-153-hackathon.vercel.app/",
    reverse: true,
    id: 3,
  },
  {
    title: "Tints And Shades",
    techLists: ["JavaScript", "Tailwind", "React"],
    text: "Get tints and shades of different colors and copy them in formats like tailwind, CSS, SCSS. You also get to know the color names of hex,rgb and hsl codes. The library tinycolors was of huge help ",
    img: tintsAndShades,
    link: "https://github.com/talentlessDeveloper/tints-and-shades",
    live: "https://talentlessdeveloper.github.io/tints-and-shades/",
    reverse: false,
    id: 4,
  },
];
