import { FaGithub, FaLinkedin, FaStackOverflow } from 'react-icons/fa';
import '../App.css';


export default function Footer() {
    return (
        <div class="text-center footer">
            <a href="https://github.com/"><FaGithub className="icon" /></a>
            <a href="https://www.linkedin.com/"><FaLinkedin className="icon" /></a>
            <a href="https://stackoverflow.co/"><FaStackOverflow className="icon" /></a>
        </div>
    )
};