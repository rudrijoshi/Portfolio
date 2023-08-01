import '../style/style.css';

import { skills } from '../data.js';
import React from 'react';

export default function Resume() {
    const onBtnClick = () => {
        fetch('techsupres1.pdf')
            .then(response => response.blob())
            .then(blob => {
                const Url = window.URL.createObjectURL(blob);
                const link = document.createElement('a');
                link.href = Url;
                link.download = 'techsupres1.pdf';
                link.click();
                window.URL.revokeObjectURL(Url);
            })
            .catch(error => {
                console.error('Failed to download the file:', error);
            })

    }
    return (
        <div className="Skill p-2 text-white text-center">
            <h1 className="pb-40">My Skiils </h1>
            <div className="grid grid-cols-4 gap-5 place-items-center pb-44">
                {skills.map((skill) => (<div key={skill.id} className="flex flex-row items-center p-1 border-solid border-4 rounded-md text-lg bg-cyan-800">
                    <span key={skill.id} className="p-4">
                        {skill.title}
                    </span>
                    <img src={skill.image} key={`${skill.id}-image`} alt='logo' className="w-18 h-14" />
                </div>))}
            </div>
            <button className=" btn btn-primary btn-lg transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300" type="button" onClick={onBtnClick}>Download my Resume</button>
        </div>
    )
};