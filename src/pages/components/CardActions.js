// src/components/CardActions.js
import React from 'react';
import { FaStar, FaPlus } from 'react-icons/fa';

const CardActions = ({ onExpandToggle, isExpanded }) => (
    <>
        <div className="absolute top-7 right-4 flex flex-col">
            <div className="flex items-center mb-3">
                <FaStar className="text-gray-500" />
                <p className="text-xs text-gray-500 ml-1">0</p>
            </div>
            <div className="flex items-center">
                <button onClick={onExpandToggle} className="text-gray-500">
                    <FaPlus className={`transition-transform duration-300 ${isExpanded ? 'rotate-45' : ''}`} />
                </button>
                <p className="text-xs text-gray-500 ml-1">1</p>
            </div>
        </div>
        <div className="absolute bottom-2 right-2 flex flex-col items-end">
            <button className="text-gray-700 hover:text-gray-900">
                {/* <FaCog className="text-lg" /> */}
            </button>
        </div>
    </>
);

export default CardActions;
