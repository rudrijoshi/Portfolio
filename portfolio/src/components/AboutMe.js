export default function About() {
    return (
        <div class="bg-warning p-2 text-dark bg-opacity-25">
            <h1 class="p-4 mb-4">
                About Me
            </h1>
            <div>
                <img
                    src={require(`../assets/avatar.png`)}
                    alt="avatar"
                    class="p-4 mb-4"
                />
            </div>


            <h3 class="p-4">
                <p>
                    I am a web developer with expertise in HTML, CSS and Javascript. I have experience building responsive and user-friendly web applications using these technologies. I have also worked extensively with the MERN stack, which includes MongoDB, Express.js, React and Node.js to develop full-stack applocations.
                </p>
                <p>
                    In addition to teh core web technologies, I am proficient in using npm (Node Package Manager) to manage project dependencies and utilize various packages and libraries. I have a good understanding of web APIs and have integrated third-party APIs into my applications to enhance functionality and provide valuable features.
                </p>
                <p>
                    I am passionate about creating efficient and scalable web solutions, and I enjoy staying up to date with the latest trends and best practices in web development. I am constantly learning and exploring new technologies to expand my skill set and deliver high-quality projects.
                </p>
            </h3>
        </div>
    )
};