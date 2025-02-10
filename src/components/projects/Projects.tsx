import ProjectCard from "./ProjectCard";
import AllProjects from "./AllProjects";

const projects = [
    {
      title: "Dictionary Book",
      techStack: {
        frontend: "React, TypeScript",
        backend: "Python, Django",
        other: "Docker, Api-Spec, postgresql"
      },
      gitLink: "https://github.com/mokshanirugutti/dictionary_book",
      liveLink: "https://dictionary-book-store.netlify.app/",
      descriptionPoints: [
        "Developed a robust web application using React for the front-end and Django for the back-end",
        "This is a web application that allows users to search for words and get their definitions and examples. It also stores the search history. OTP based user authentication."
      ]
    },
    {
      title: "GrantsHunt",
      techStack: {
        frontend: "React, TypeScript",
        backend: "Python, Django",
        other: "postgresql"
      },
      gitLink: "https://github.com/mokshanirugutti/grantshunt",
      liveLink: "https://granthshunt.netlify.app/",
      descriptionPoints: [
        "A modern web application that helps organizations discover and manage grant opportunities. The platform provides personalized grant recommendations based on organization profiles and streamlines the grant search process.",
        "Smart grant search with filtering options"
      ]
    },
    
    {
      title: "Quizer",
      techStack: {
        frontend: "React, TypeScript",
        backend: "Express, API",
        other: "TailwindCSS, ShadcnUI"
      },
      gitLink: "https://github.com/mokshanirugutti/quizzer",
      liveLink: "https://app-quizzzer.netlify.app/",
      descriptionPoints: [
        "A modern quiz application built with React, TypeScript, and Vite, featuring a beautiful UI powered by Tailwind CSS and various modern React libraries.",
        "Interactive quiz experience with Real-time results and feedback"
      ]
    },
    
];

export default function Projects() {
    return (
        <div className="mx-auto w-full  ">
          <div className="flex justify-between mb-2" >
            <h1 className="pb-2 text-xl tracking-wide">Projects....</h1>
            <AllProjects/>
          </div>

            <div className="flex gap-6 md:gap-3 md:flex-row flex-col mx-auto w-fit md:w-full">
                {projects.map((project, index) => (
                    <ProjectCard 
                        key={index} 
                        title={project.title} 
                        techStack={project.techStack} 
                        gitLink={project.gitLink} 
                        liveLink={project.liveLink} 
                        descriptionPoints={project.descriptionPoints} 
                    />
                ))}
            </div>
        </div>
    );
}