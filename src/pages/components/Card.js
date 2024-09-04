import React, { useState } from 'react';
import CardIcon from './CardIcon';
import CardText from './CardText';
import CardActions from './CardActions';

const Card = ({
    title,
    description,
    date,
    link,
    caseno,
    casename,
    court,
    casestatus,
    judge,
    sect,
    facts,
    petition,
    legalissues,
    keylegalques,
    plaintiffarguments,
    defendantarguments,
    courtsreasoning,
    decision,
    conclusion,
    casesummary
}) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const handleExpandToggle = () => {
        setIsExpanded(prev => !prev);
    };

    return (
        <div className="relative min-h-[105px] p-4 mb-2 border rounded-md w-full bg-white shadow-md transition-all duration-300">
            <div className={`flex flex-col transition-all duration-300 ${isExpanded ? 'h-auto' : 'h-auto'}`}>
                <div className="flex w-full">
                    <div className="flex flex-col justify-between h-full flex-1">
                        <a
                            href={link}
                            className="text-gray-900 no-underline cursor-pointer"
                            onClick={e => {
                                e.preventDefault(); // Prevent default anchor behavior
                                handleExpandToggle(); // Toggle expansion
                            }}
                        >
                            <div className="flex items-start gap-2">
                                <CardIcon />
                                <CardText
                                    title={title}
                                    date={date}
                                    description={description}
                                    link={link}
                                />
                            </div>
                        </a>
                    </div>
                    <div className="flex items-center justify-center">
                        <CardActions onExpandToggle={handleExpandToggle} isExpanded={isExpanded} />
                    </div>
                </div>
                <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${isExpanded
                            ? 'max-h-auto animate-slideDown'
                            : 'max-h-0 animate-slideUp'
                        }`}
                >
                    <div className="mt-4 p-4 border-t border-gray-200 bg-gray-50 rounded-md shadow-sm">
                        <div className="space-y-4">
                            <div className="text-sm font-semibold text-gray-800 border-b border-gray-300 pb-2">
                                <p className="text-lg font-bold text-gray-900">Case Details</p>
                            </div>
                            <div className="space-y-1">
                                <p className="text-xs text-gray-600"><strong className="text-gray-800">Case No:</strong> {caseno}</p>
                                <p className="text-xs text-gray-600"><strong className="text-gray-800">Case Name:</strong> {casename}</p>
                                <p className="text-xs text-gray-600"><strong className="text-gray-800">Date:</strong> {date}</p>
                                <p className="text-xs text-gray-600"><strong className="text-gray-800">Court:</strong> {court}</p>
                                <p className="text-xs text-gray-600"><strong className="text-gray-800">Case Status:</strong> {casestatus}</p>
                                <p className="text-xs text-gray-600"><strong className="text-gray-800">Judge:</strong> {judge}</p>
                                <p className="text-xs text-gray-600"><strong className="text-gray-800">Section:</strong> {sect}</p>
                            </div>
                            <div className="space-y-1">
                                <p className="text-xs font-medium text-gray-700 mt-2"><strong className="text-gray-800">Facts:</strong></p>
                                <p className="text-xs text-gray-600">{facts}</p>
                            </div>
                            <div className="space-y-1">
                                <p className="text-xs font-medium text-gray-700 mt-2"><strong className="text-gray-800">Petition:</strong></p>
                                <p className="text-xs text-gray-600">{petition}</p>
                            </div>
                            <div className="space-y-1">
                                <p className="text-xs font-medium text-gray-700 mt-2"><strong className="text-gray-800">Legal Issues:</strong></p>
                                <p className="text-xs text-gray-600">{legalissues}</p>
                            </div>
                            <div className="space-y-1">
                                <p className="text-xs font-medium text-gray-700 mt-2"><strong className="text-gray-800">Key Legal Questions:</strong></p>
                                <p className="text-xs text-gray-600">{keylegalques}</p>
                            </div>
                            <div className="space-y-1">
                                <p className="text-xs font-medium text-gray-700 mt-2"><strong className="text-gray-800">Plaintiff Arguments:</strong></p>
                                <p className="text-xs text-gray-600">{plaintiffarguments}</p>
                            </div>
                            <div className="space-y-1">
                                <p className="text-xs font-medium text-gray-700 mt-2"><strong className="text-gray-800">Defendant Arguments:</strong></p>
                                <p className="text-xs text-gray-600">{defendantarguments}</p>
                            </div>
                            <div className="space-y-1">
                                <p className="text-xs font-medium text-gray-700 mt-2"><strong className="text-gray-800">Court's Reasoning:</strong></p>
                                <p className="text-xs text-gray-600">{courtsreasoning}</p>
                            </div>
                            <div className="space-y-1">
                                <p className="text-xs font-medium text-gray-700 mt-2"><strong className="text-gray-800">Decision:</strong></p>
                                <p className="text-xs text-gray-600">{decision}</p>
                            </div>
                            <div className="space-y-1">
                                <p className="text-xs font-medium text-gray-700 mt-2"><strong className="text-gray-800">Conclusion:</strong></p>
                                <p className="text-xs text-gray-600">{conclusion}</p>
                            </div>
                            <div className="space-y-1">
                                <p className="text-xs font-medium text-gray-700 mt-2"><strong className="text-gray-800">Case Summary:</strong></p>
                                <p className="text-xs text-gray-600">{casesummary}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;
