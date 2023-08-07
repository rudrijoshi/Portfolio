import React from 'react';
import '../style/style.css';

export default function Header() {


    return (
        <div className="card-body bg-gradient-to-r from-cyan-800 from-35% via-cyan-500 via-50% to-indigo-800 to-27%">
            <h1 className="title text-center">Rudri <br className="block md:hidden" />
                <span
                    className="inline-flex h-20 pt-2 overflow-x-hidden animate-type group-hover:animate-type-reverse whitespace-nowrap text-brand-accent will-change-transform"
                >
                    Joshi 👋
                </span></h1>
        </div >
    );
}
