import '../style/style.css';

import { skills } from '../data.js';
import React from 'react';

export default function Resume() {
    const onBtnClick = () => {
        const resumePath = '/resume1.pdf';
        const resumeURL = process.env.PUBLIC_URL + resumePath;
        const link = document.createElement('a');
        link.href = resumeURL;
        link.download = 'resume1.pdf';
        link.click();
    }
    return (
        <div className="Skill p-5 text-center">
            <h1 className="pb-4 md:pb-10 text-2xl md:text-4xl">My Skills </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 text-white place-items-center pb-4 md:pb-20 skill-container">
                {skills.map((skill) => (<div key={skill.id} className="skill-box flex flex-row items-center p-1 border-solid border-4 rounded-md text-lg bg-cyan-800">
                    <span key={skill.id} className="p-2 md:p-4">
                        {skill.title}
                    </span>
                    <img src={skill.image} key={`${skill.id}-image`} alt='logo' className="w-16 h-12 md:w-18 md:h-14" />
                </div>))}
            </div>
            <button className="btn btn-primary btn-lg transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300" type="button" onClick={onBtnClick}>Download my Resume</button>
        </div>
    )
};