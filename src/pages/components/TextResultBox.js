// src/components/Card.js
import React from 'react';
import CardIcon from './CardIcon';
import CardText from './CardText';
import CardActions from './CardActions';

const Card = () => {
    return (
        <div className="text-justify p-4 max-w-4.2xl mr-1.8 mx-auto bg-gray-50 border border-gray-200 rounded-lg shadow-md">
            {/* <h2 className="text-lg font-semibold mb-4 text-gray-800">Summary of the Case:</h2> */}
            <p className="text-sm text-gray-700 mb-2">
                The Insurance Company's allegations of fraud were unsubstantiated, leading to the dismissal of their review petition. This suggests that:
            </p>
            <ul className="list-disc list-inside text-sm text-gray-700">
                <li>
                    <strong>Thorough investigation is crucial:</strong> The court emphasized the importance of evidence in establishing fraud claims.
                </li>
                <li>
                    <strong>Delayed tactics may not be effective:</strong> The Insurance Company's delay in filing the review petition after the execution petition was filed by the claimant might have contributed to the dismissal of their petition.
                </li>
            </ul>
        </div>
    );
};

export default Card;
