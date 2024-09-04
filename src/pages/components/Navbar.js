import React, { useState, useEffect, useRef } from 'react';
import DropdownMenu from './DropdownMenu';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const menuRef = useRef(null);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const closeMenu = () => {
        setMenuOpen(false);
    };

    // Close the dropdown menu if clicking outside of it
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                closeMenu();
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [menuRef]);

    return (
        <header className="w-full p-1 md:p-2 flex justify-between items-center z-10 backdrop-blur bg-background/80">
            <div>
                <a href="/">
                    <div className="p-1.5 flex items-center space-x-1">
                        <svg fill="currentColor" viewBox="0 0 256 256" role="img" xmlns="http://www.w3.org/2000/svg" className="w-7 h-7">
                            <circle cx="128" cy="128" r="128" fill="#222"></circle>
                            <circle cx="102" cy="128" r="18" fill="white"></circle>
                            <circle cx="154" cy="128" r="18" fill="white"></circle>
                        </svg>
                    </div>
                    <span className="sr-only">Morphic</span>
                </a>
            </div>
            <div className="flex items-center space-x-1 relative" ref={menuRef}>
                {/* <button
                    className="inline-flex items-center justify-center whitespace-nowrap font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 px-3 rounded-full text-xs"
                    aria-label="Feedback" type="button" aria-haspopup="dialog" aria-expanded="false"
                    aria-controls="radix-:R6hja:" data-state="closed">
                    Feedback 
                </button> */}
                {/* <button
                    className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground w-8 h-8 rounded-full"
                    type="button" aria-haspopup="dialog" aria-expanded="false" aria-controls="radix-:Rahja:"
                    data-state="closed">
                    <div className="flex items-center gap-2 text-foreground">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                            className="lucide lucide-bell">
                            <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"></path>
                            <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"></path>
                        </svg>
                    </div>
                </button> */}
                <button
                    className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground w-8 h-8 rounded-full"
                    type="button" aria-haspopup="menu" aria-expanded={menuOpen} onClick={toggleMenu}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                        className="lucide lucide-menu">
                        <line x1="4" x2="20" y1="12" y2="12"></line>
                        <line x1="4" x2="20" y1="6" y2="6"></line>
                        <line x1="4" x2="20" y1="18" y2="18"></line>
                    </svg>
                </button>
                {menuOpen && (
                    <DropdownMenu />
                )}
            </div>
        </header>
    );
};

export default Navbar;
