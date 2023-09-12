import '../style/style.css';


export default function About() {
    return (
        <div className="text-center">
            <h1 className="p-4 mb-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
                About Me
            </h1>
            <div className="picture">
                <img
                    src={require(`../assets/profile.jpg`)}
                    alt="profile_picture"
                    className="p-4 mb-4 pictureSize w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 xl:w-104 xl:h-104 rounded-full"
                />
            </div>


            <h3 className="p-4 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl">
                <p>
                    I am a web developer with expertise in HTML, CSS and Javascript. I have experience building responsive and user-friendly web applications using these technologies. I have also worked extensively with the MERN stack, which includes MongoDB, Express.js, React and Node.js to develop full-stack applocations.
                </p>
                <p>
                    In addition to teh core web technologies, I am proficient in using npm (Node Package Manager) to manage project dependencies and utilize various packages and libraries. I have a good understanding of web APIs and have integrated third-party APIs into my applications to enhance functionality and provide valuable features.
                </p>
                <p>
                    I am passionate about creating efficient and scalable web solutions. If you have any inquires or collaboration opportunities, please feel free to contact me at rudrijoshi20@gmail.com.
                </p>
            </h3>
        </div>
    )
};