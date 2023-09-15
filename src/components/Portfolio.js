import Project from "../components/Project";
import '../style/style.css';

function Portfolio() {
    // fill in the required data, image file should be in the assets folder and name should match exactly including extension
    const projects = [
        {
            name: "The Horiseon Webpage (Deployed link)",
            description: "Revamped a marketing agency's webpage for enhanced accessibility and SEO, improving user experience and discoverability.",
            link: "https://rudrijoshi.github.io/Horiseon_webpage/",
            repo: "https://github.com/rudrijoshi/Horiseon_webpage/",
            image: "webpage.jpg",
            technologies: "HTML and CSS",
        },
        {
            name: "SVG Logo (Deployed link)",
            description: "User-friendly web app generates SVG logos by prompting user questions. User input creates logo in logo.svg file. Includes example logos for simplicity.",
            link: "https://rudrijoshi.github.io/SVGlogoproject1/",
            repo: "https://github.com/rudrijoshi/SVGlogoproject1",
            image: "svg.png",
            technologies: "Javascript, NodeJS, npm and OOP concepts",
        },
        {
            name: "Social network (Deployed link)",
            description: "Built a social network API for sharing thoughts, reactions, and friend lists. Utilized MongoDB for data speed and flexibility. Project showcases API structure with a demo video.",
            link: "https://rudrijoshi.github.io/Social-Network-Api-project/",
            repo: "https://github.com/rudrijoshi/Social-Network-Api-project",
            image: "socialn.jpg",
            technologies: "Javascript, NodeJS, Express, Mongoose, MongoDB and npm",
        },
        {
            name: "The Tech Blog (Deployed link)",
            description: "User-friendly web app for developers to read and write about tech topics. Built as a CMS-style blog site, akin to WordPress, enabling blog publishing and commenting.",
            link: "https://rudrijoshi.github.io/The-Tech-Blog-Project/",
            repo: "https://github.com/rudrijoshi/The-Tech-Blog-Project",
            image: "blog.jpg",
            technologies: "CSS, Javascript, npm, Sequelize, Express-session, Handlebars.js and MVC paradigm",
        },
        {
            name: "COTER (Deployed link)",
            description: "Created a developer network, promoting communication and supporting newcomers using various libraries, Express.js, and third-party APIs.",
            link: "https://coter-app-ead89d3057b0.herokuapp.com/",
            repo: "https://github.com/miladesmailpour/COTER",
            image: "codeQuote.jpg",
            technologies: "HTML, CSS, Javascript, handlebars.js, ORM, Express.js, MVC, font-kit and many third party APIs",
        },
        {
            name: "PWA Text Editor (Deployed link)",
            description: "A browser-based PWA text editor with robust data storage, offline functionality, and endorsed by Google and Mozilla",
            link: "https://rudrijoshi.github.io/PWAtexteditor/",
            repo: "https://github.com/rudrijoshi/PWAtexteditor",
            image: "pwa.png",
            technologies: "HTML, CSS, Javascript and PWA",
        },
        {
            name: "Code quiz (Deployed link)",
            description: "Web app for coding boot camp students and enthusiasts to test JavaScript knowledge through timed quizzes and high score tracking.",
            link: "https://rudrijoshi.github.io/Code_quiz/",
            repo: "https://github.com/rudrijoshi/Code_quiz",
            image: "asgnq.jpg",
            technologies: "HTML, CSS and Javascript",
        },
        {
            name: "Password generator (Deployed link)",
            description: "Customizable tool for creating strong, secure passwords. Tailor length, character types, and more through prompts, and generate your password for immediate use.",
            link: "https://rudrijoshi.github.io/Password_generator/",
            repo: "https://github.com/rudrijoshi/Password_generator/",
            image: "password.jpg",
            technologies: "HTML, CSS and Javascript",
        },
    ];

    // for each project, use the Project component to build a project
    return (
        <div className="flex justify-content-center py-14">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-40 content-start p-2">
                {projects.map((project) => (
                    <Project project={project} key={"project=" + project.name} />
                ))}
            </div>
        </div>
    );
}

export default Portfolio;