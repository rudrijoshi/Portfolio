import Project from "../components/Project";
import '../style/style.css';

function Portfolio() {
    // fill in the required data, image file should be in the assets folder and name should match exactly including extension
    const projects = [
        {
            name: "Project 1 (Please click here to view deployed link)",
            description: "The Horiseon Webpage Project",
            link: " https://rudrijoshi.github.io/Assignment1/",
            repo: "https://github.com/rudrijoshi/Assignment1",
            image: "asgn1.jpg",
        },
        {
            name: "Project 2 (Please click here to view deployed link)",
            description: "SVG Logo Project",
            link: "https://rudrijoshi.github.io/SVGlogoproject1/",
            repo: "https://github.com/rudrijoshi/SVGlogoproject1",
            image: "asgn2.jpg",
        },
        {
            name: "Project 3 (Please click here to view deployed link)",
            description: "Social Network Api Project",
            link: "https://rudrijoshi.github.io/Social-Network-Api-project/",
            repo: "https://github.com/rudrijoshi/Social-Network-Api-project",
            image: "asgn3.jpg",
        },
        {
            name: "Project 4 (Please click here to view deployed link)",
            description: "The Tech Blog Project",
            link: "https://rudrijoshi.github.io/The-Tech-Blog-Project/",
            repo: "https://github.com/rudrijoshi/The-Tech-Blog-Project",
            image: "asgn4.jpg",
        },
        {
            name: "Project 5 (Please click here to view deployed link)",
            description: "Give Hope",
            link: " https://powerful-oasis-64063-6b2a0502a18f.herokuapp.com/",
            repo: "https://github.com/dylansth/give-hope",
            image: "asgn5.jpg",
        },
        {
            name: "Project 6 (Please click here to view deployed link)",
            description: "PWA Text Editor",
            link: "https://rudrijoshi.github.io/PWAtexteditor/",
            repo: "https://github.com/rudrijoshi/PWAtexteditor",
            image: "asgn.jpg",
        }
    ];

    // for each project, use the Project component to build a project
    return (
        <div className="flex justify-content-center justify-between py-14">
            <div className="grid grid-cols-2 gap-10 content-start p-2">
                {projects.map((project) => (
                    <Project project={project} key={"project=" + project.name} />
                ))}
            </div>
        </div>
    );
}

export default Portfolio;