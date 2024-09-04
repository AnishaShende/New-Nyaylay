import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
// import SpeedSelection from './SpeedSelection';
import SpeedSelection from './SpeedSelection';

const Searchbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedSpeed, setSelectedSpeed] = useState('casestudy'); // Default to 'Case Study'
    const [inputValue, setInputValue] = useState('');
    const dropdownRef = useRef(null);
    const navigate = useNavigate();

    // Toggle dropdown visibility
    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    // Close dropdown if clicked outside
    const closeDropdown = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('click', closeDropdown);
        return () => document.removeEventListener('click', closeDropdown);
    }, []);

    // Handle search form submission
    const handleSearchSubmit = (e) => {
        e.preventDefault();
        if (inputValue.trim()) {
            navigate(`/search-results?query=${encodeURIComponent(inputValue.trim())}`);
        }
    };

    // Handle Enter key in input
    const handleKeyDown = (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            handleSearchSubmit(e);
        }
    };

    // Get the label of the selected speed
    const getSelectedLabel = () => {
        const options = [
            { label: 'Case Study', value: 'casestudy' },
            { label: 'Legal Terms', value: 'legalterm' },
            { label: 'Case Summary', value: 'casesummary' },
        ];
        const selectedOption = options.find(option => option.value === selectedSpeed);
        return selectedOption ? selectedOption.label : 'Case Study';
    };

    return (
        <form onSubmit={handleSearchSubmit} className="max-w-2xl w-full px-6 relative z-10">
            <div className="h-10 w-full flex items-center space-x-1">
                <div className="relative" ref={dropdownRef}>
                    <button
                        type="button"
                        id="speed-dropdown"
                        aria-haspopup="menu"
                        aria-expanded={isOpen}
                        onClick={toggleDropdown}
                        className="inline-flex items-center justify-center text-sm font-medium px-4 h-8 rounded-full whitespace-nowrap transition-colors ring-offset-background focus-visible:outline-none focus-visible:ring-ring focus-visible:ring-offset-2 hover:bg-accent hover:text-accent-foreground"
                    >
                        <div className="flex items-center">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="14"
                                height="14"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-fast-forward mr-1 text-green-500"
                            >
                                <polygon points="13 19 22 12 13 5 13 19" />
                                <polygon points="2 19 11 12 2 5 2 19" />
                            </svg>
                            {getSelectedLabel()}
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="12"
                                height="12"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-chevron-down ml-1 text-foreground/50"
                            >
                                <path d="m6 9 6 6 6-6" />
                            </svg>
                        </div>
                    </button>

                    {isOpen && (
                        <div className="absolute right-0 mt-2 w-56 bg-white shadow-lg rounded-md animate-slide-down z-10">
                            <SpeedSelection
                                selectedSpeed={selectedSpeed}
                                setSelectedSpeed={(value) => {
                                    setSelectedSpeed(value);
                                    setIsOpen(false); // Close dropdown on selection
                                }}
                            />
                        </div>
                    )}
                </div>

                {/* <button
                    type="button"
                    aria-pressed="true"
                    data-state="closed"
                    aria-label="toggle image search on"
                    className="inline-flex items-center justify-center text-sm font-medium px-2.5 h-9 rounded-full transition-colors ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 hover:bg-muted hover:text-muted-foreground"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-image h-4 w-4"
                    >
                        <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
                        <circle cx="9" cy="9" r="2" />
                        <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
                    </svg>
                </button> */}
            </div>

            <div className="relative flex items-center w-full mt-2">
                <textarea
                    name="input"
                    placeholder="Enter about your case"
                    spellCheck="false"
                    value={inputValue} // Bind value to state
                    onChange={(e) => setInputValue(e.target.value)} // Update state on change
                    onKeyDown={handleKeyDown} // Trigger form submission on Enter key press
                    className="w-full min-h-12 pl-4 pr-10 pt-3 pb-1 text-sm placeholder:text-muted-foreground border border-gray-700 rounded-full bg-muted resize-none ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"

                    rows="1"
                    tabIndex="0"
                />
                <button
                    type="submit" // Changed from "button" to "submit" to trigger form submission
                    aria-label="Send message"
                    className="inline-flex items-center justify-center h-10 w-10 absolute right-2 top-1/2 transform -translate-y-1/2 rounded-md text-sm font-medium transition-colors ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 hover:bg-accent hover:text-accent-foreground"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-arrow-right"
                    >
                        <path d="M5 12h14" />
                        <path d="m12 5 7 7-7 7" />
                    </svg>
                </button>
                <div className="absolute -bottom-5 right-2 transition-all duration-300 text-[10px] invisible md:visible text-muted-foreground/0">
                    <label className="font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-[10px]">
                        <strong>Shift + Return</strong> to add a new line
                    </label>
                </div>
            </div>

            <div className="mx-auto max-w-2xl transition-all invisible">
                <div className="p-2">
                    <div className="mt-4 flex flex-col items-start space-y-2 mb-4">
                        {/* Search results or additional content can be added here */}
                    </div>
                </div>
            </div>
        </form>
    );
}

export default Searchbar;
