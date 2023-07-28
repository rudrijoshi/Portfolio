import React from 'react';
import '../style/style.css';
// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function NavTabs({ currentPage, handlePageChange }) {
    return (
        <div className=".p-8">
            <ul className="nav nav-tabs justify-center">
                <li className="nav-item ">
                    <a
                        href="#about"
                        onClick={() => handlePageChange('About')}
                        // This is a conditional (ternary) operator that checks to see if the current page is "Home"
                        // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
                        className="{currentPage === 'About' ? 'nav-link active' : 'nav-link'} rounded-lg no-underline text-white m-3 p-3 bg-gradient-to-r from-purple-400 to-purple-500 hover:from-blue-500 hover:to-blue-300"
                    >
                        About Me
                    </a>
                </li>
                <li className="nav-item">
                    <a
                        href="#contact"
                        onClick={() => handlePageChange('Contact')}
                        // Check to see if the currentPage is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
                        className="{currentPage === 'Contact' ? 'nav-link active' : 'nav-link'} rounded-lg no-underline text-white m-3 p-3 bg-gradient-to-r from-purple-400 to-purple-500 hover:from-blue-500 hover:to-blue-300"
                    >
                        Contact
                    </a>
                </li>
                <li className="nav-item">
                    <a
                        href="#portfolio"
                        onClick={() => handlePageChange('Portfolio')}
                        // Check to see if the currentPage is `Blog`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
                        className="{currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'} rounded-lg no-underline text-white m-3 p-3 bg-gradient-to-r from-purple-400 to-purple-500 hover:from-blue-500 hover:to-blue-300"
                    >
                        Portfolio
                    </a>
                </li>
                <li className="nav-item">
                    <a
                        href="#resume"
                        onClick={() => handlePageChange('Resume')}
                        // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
                        className="{currentPage === 'Resume' ? 'nav-link active' : 'nav-link'} rounded-lg no-underline text-white m-3 p-3 bg-gradient-to-r from-purple-400 to-purple-500 hover:from-blue-500 hover:to-blue-300"
                    >
                        Resume
                    </a>
                </li>
            </ul>
        </div>

    );
}

export default NavTabs;
