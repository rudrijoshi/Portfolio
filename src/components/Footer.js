import { FaGithub, FaLinkedin, FaStackOverflow } from 'react-icons/fa';
import '../style/style.css';


export default function Footer() {
    return (
        <div className="footer flex justify-center h-14 bg-gray-900">
            <div className="icon-container grid grid-cols-3 sm:grid-cols-3 md:grid-cols-3 gap-4 sm:gap-4 px-4 sm:px-5 items-center">
                <a href="https://github.com/"><FaGithub className="icon" /></a>
                <a href="https://www.linkedin.com/"><FaLinkedin className="icon" /></a>
                <a href="https://stackoverflow.co/"><FaStackOverflow className="icon" /></a>
            </div>
        </div>
    )
};