import '../style/style.css';
import { FaGithub } from 'react-icons/fa';


function Project({ project }) {
    const { name, repo, link, description, image } = project;


    return (
        <div className="tab-content">
            <div className="image-container">
                <img
                    src={require(`../assets/${image}`)}
                    alt={name}
                    className="image-fade imgSize"
                />
                <div className="image-overlay">
                    <div className="overlay-content">
                        <a href={link}>{name}</a>{' '}
                        <p className='desc'>{description}</p>
                        <h3>
                            <a href={repo}>

                                <div className="github-icon-container">
                                    <div className="github-icon-wrapper">
                                        <FaGithub className="github-icon" />
                                    </div>
                                </div>
                            </a>{' '}
                        </h3>

                    </div>
                </div>
            </div>
        </div>

    );
}

export default Project;
