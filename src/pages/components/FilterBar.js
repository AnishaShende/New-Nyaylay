import React, { useState } from 'react';

const FilterBar = () => {
    const [minYear, setMinYear] = useState(2015);
    const [maxYear, setMaxYear] = useState(2034);

    const handleMinYearChange = (e) => {
        const value = Math.min(parseInt(e.target.value), maxYear - 1);
        setMinYear(value);
    };

    const handleMaxYearChange = (e) => {
        const value = Math.max(parseInt(e.target.value), minYear + 1);
        setMaxYear(value);
    };

    return (
        <div className="p-4 mt-18 bg-gray-100 text-gray-900 rounded-lg ">
            <h1 className="text-xl font-semibold mb-3 border-b border-gray-300 pb-2">
                Filters
            </h1>

            <div className="mb-3">
                <h2 className="font-medium text-sm mb-2">Courts</h2>
                <div className="flex flex-col space-y-1">
                    {['Madras High Court', 'Delhi High Court', 'Supreme High Court', 'Gujarat High Court', 'Kerela High Court', 'Assam High Court'].map((court) => (
                        <label key={court} className="flex items-center">
                            <input
                                type="checkbox"
                                className="form-checkbox h-4 w-4 text-gray-600 bg-gray-200 border-gray-400 rounded focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 transition duration-300 ease-in-out transform hover:scale-105"
                            />
                            <span className="ml-2 text-gray-700 text-sm">
                                {court}
                            </span>
                        </label>
                    ))}
                </div>
                <a
                    href="#"
                    className="text-gray-500 mt-2 text-xs inline-block hover:text-gray-700 transition duration-300"
                >
                    See more
                </a>
            </div>

            <div className="mb-3">
                <h2 className="font-medium text-sm mb-2">Case Status</h2>
                <div className="flex flex-col space-y-1">
                    {['Judgement', 'Disposed Off', 'Decree', 'Order'].map((court) => (
                        <label key={court} className="flex items-center">
                            <input
                                type="checkbox"
                                className="form-checkbox h-4 w-4 text-gray-600 bg-gray-200 border-gray-400 rounded focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 transition duration-300 ease-in-out transform hover:scale-105"
                            />
                            <span className="ml-2 text-gray-700 text-sm">
                                {court}
                            </span>
                        </label>
                    ))}
                </div>
                
            </div>


            <div className="mb-5">
                <h2 className="font-medium text-sm mb-2">Year Range</h2>
                <div className="flex justify-between text-gray-600 text-xs mb-1">
                    <span>From</span>
                    <span>To</span>
                </div>
                <div className="flex items-center space-x-1">
                    <input
                        type="range"
                        min="2015"
                        max="2024"
                        value={minYear}
                        onChange={handleMinYearChange}
                        className="w-full h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer transition duration-300 ease-in-out transform hover:scale-105"
                    />
                    <input
                        type="range"
                        min="2015"
                        max="2024"
                        value={maxYear}
                        onChange={handleMaxYearChange}
                        className="w-full h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer transition duration-300 ease-in-out transform hover:scale-105"
                    />
                </div>
                <p className="mt-2 text-gray-500 text-sm">
                    {minYear} – {maxYear}
                </p>
            </div>

            <button
                className="ml-auto mt-1 px-4 py-2 bg-gray-500 text-white text-sm rounded-full shadow-md hover:bg-gray-600 transition duration-300 ease-in-out transform hover:scale-105"
            >
                Apply filters
            </button>
        </div>
    );
};

export default FilterBar;
