import SectionTitle from './SectionTitle';
import Project from './Project';
import { projectData } from '../utility/projectData';

const Projects = () => {
  return (
    <section>
      <div className="t-container mt-24" id="projects">
        <h2 className="text-lg md:text-2xl font-mono space-x-2 relative mb-6  md:mb-10 before:w-20 before:h-[2px] before:bg-zinc-500 before:absolute before:left-[35%] md:before:left-[18%] before:top-4 z-10">
          <span className="text-zinc-300 text-sm">1.</span>
          <span className="text-zinc-50">Projects</span>
        </h2>
        <div className="space-y-11 md:space-y-16">
          <h3 className="text-3xl md:text-4xl text-slate-50 text-center">
            In Development
          </h3>
        </div>
      </div>
    </section>
  );
};

export default Projects;

// {
//   projectData.map((project) => {
//     const { title, techLists, img, text, reverse, link, live } = project;
//     return (
//       <Project
//         key={live}
//         title={title}
//         text={text}
//         techLists={techLists}
//         img={img}
//         reverse={reverse}
//         link={link}
//         live={live}
//       />
//     );
//   });
// }
