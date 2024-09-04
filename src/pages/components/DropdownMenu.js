import React, { useState } from 'react';
// import './DropdownMenu.css'; // Import the CSS file here
import './DropDownMenu.css'; // Import the CSS file


const DropdownMenu = () => {
    const [themeOpen, setThemeOpen] = useState(false);

    const toggleThemeMenu = () => {
        setThemeOpen(!themeOpen);
    };

    return (
        <div className="relative">
            <div className="absolute right-0 mt-1 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-20 transition-transform transform opacity-100 animate-slide-down">
                <ul className="py-1 text-sm font-medium">
                    {/* <li>
                        <a
                            href="/login"
                            className="block px-4 py-2 text-gray-700 hover:bg-gray-100 flex items-center"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"
                                stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                                className="mr-2">
                                <path d="M12 12v6m0 0v-6m0 0h6m-6 0H6"></path>
                            </svg>
                            Login
                        </a>
                    </li> */}
                    {/* <li>
                        <a
                            href="/subscription"
                            className="block px-4 py-2 text-gray-700 hover:bg-gray-100 flex items-center"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"
                                stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                                className="mr-2">
                                <path d="M21 15v-6m0 0v6m0 0H3m18 0H3"></path>
                            </svg> 
                            Subscription
                        </a>
                    </li> */}
                    <li className="relative">
                        <button
                            onClick={toggleThemeMenu}
                            className="w-full text-left block px-4 py-2 text-gray-700 hover:bg-gray-100 flex items-center"
                        >
                            {/* <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"
                                stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                                className="mr-2">
                                <circle cx="12" cy="12" r="10"></circle>
                                <line x1="12" x2="12" y1="8" y2="16"></line>
                                <line x1="12" x2="12" y1="16" y2="16"></line>
                            </svg> */}
                            Theme
                            <span className="ml-auto">›</span>
                        </button>
                        {themeOpen && (
                            <div className="absolute right-full top-0 mt-0.5 w-32 bg-white border border-gray-200 rounded-md shadow-lg z-30 transition-transform transform opacity-100 animate-slide-left">
                                <ul className="py-1 text-sm font-medium">
                                    <li>
                                        <a
                                            href="/theme/light"
                                            className="block px-4 py-2 text-gray-700 hover:bg-gray-100 flex items-center"
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"
                                                stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                                                className="mr-2">
                                                <circle cx="12" cy="12" r="10"></circle>
                                            </svg>
                                            Light
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="/theme/dark"
                                            className="block px-4 py-2 text-gray-700 hover:bg-gray-100 flex items-center"
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"
                                                stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                                                className="mr-2">
                                                <circle cx="12" cy="12" r="10" fill="black"></circle>
                                            </svg>
                                            Dark
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="/theme/system"
                                            className="block px-4 py-2 text-gray-700 hover:bg-gray-100 flex items-center"
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"
                                                stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                                                className="mr-2">
                                                <circle cx="12" cy="12" r="10" fill="gray"></circle>
                                            </svg>
                                            System
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        )}
                    </li>
                    {/* <li>
                        <a
                            href="/links"
                            className="block px-4 py-2 text-gray-700 hover:bg-gray-100 flex items-center"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"
                                stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                                className="mr-2">
                                <path d="M8 7V2h8v5M4 13h16m-8 8v-8"></path>
                            </svg>
                            Links
                        </a>
                    </li> */}
                    <li>
                        <a
                            href="/home"
                            className="block px-4 py-2 text-gray-700 hover:bg-gray-100 flex items-center"
                        >
                            {/* <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"
                                stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                                className="mr-2">
                                <path d="M3 9l9-7 9 7v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9z"></path>
                            </svg> */}
                            Home
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default DropdownMenu;
