import { FaGithub, FaLinkedin, FaStackOverflow } from 'react-icons/fa';
import '../style/style.css';


export default function Footer() {
    return (
        <div className="items-center footer flex justify-center items-center space-y-10 grid gap-4 grid-cols-3 grid-rows-1">
            <a href="https://github.com/"><FaGithub className="icon" /></a>
            <a href="https://www.linkedin.com/"><FaLinkedin className="icon" /></a>
            <a href="https://stackoverflow.co/"><FaStackOverflow className="icon" /></a>
        </div>
    )
};