import SectionTitle from "./SectionTitle";
import Project from "./Project";
import { projectData } from "../utility/projectData";

const Projects = () => {
  return (
    <section>
      <div className='t-container mt-24' id='projects'>
        <SectionTitle number={2} text='Projects' />
        <div className='space-y-11 md:space-y-16'>
          {projectData.map((project) => {
            const { title, techLists, img, text, reverse, link, live } =
              project;
            return (
              <Project
                key={live}
                title={title}
                text={text}
                techLists={techLists}
                img={img}
                reverse={reverse}
                link={link}
                live={live}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
