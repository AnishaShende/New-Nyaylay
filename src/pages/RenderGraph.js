// import React, { useState, useEffect } from 'react';
// import GraphVisualization from './GraphVisualization';

// const CaseVisualization = ({ caseId }) => {
//     const [nodes, setNodes] = useState([]);
//     const [edges, setEdges] = useState([]);

//     const handleVisualizationChange = async (type) => {
//         const response = await fetch(`/related_cases?case_id=${caseId}&visualization_type=${type}`);
//         const data = await response.json();

//         // Convert cases into graph nodes and edges
//         const newNodes = data.map((caseData, index) => ({
//             id: caseData.case_id,
//             label: caseData.case_name,
//         }));

//         const newEdges = data.map((caseData, index) => ({
//             from: caseId,
//             to: caseData.case_id,
//         }));

//         setNodes(newNodes);
//         setEdges(newEdges);
//     };

//     return (
//         <div>
//             <select onChange={(e) => handleVisualizationChange(e.target.value)}>
//                 <option value="case">Case-based</option>
//                 <option value="judge">Judge-based</option>
//                 <option value="section">Section-based</option>
//                 <option value="court">Court-based</option>
//             </select>

//             <GraphVisualization nodes={nodes} edges={edges} />
//         </div>
//     );
// };

// export default CaseVisualization;

import React, { useState } from 'react';
import GraphVisualization from './GraphVisualization';
import { useParams } from 'react-router-dom';

const CaseVisualization = () => {
    const { caseId } = useParams(); // Get caseId from URL
    const [nodes, setNodes] = useState([]);
    const [edges, setEdges] = useState([]);

    const handleVisualizationChange = async (type) => {
        const response = await fetch(`/related_cases?case_id=${caseId}&visualization_type=${type}`);
        const data = await response.json();

        // Convert response data into graph nodes and edges
        const newNodes = [
            { id: caseId, label: `Case: ${caseId}` }, // Current case node
            ...data.map(caseData => ({
                id: caseData.case_id,
                label: caseData.case_name,
            }))
        ];

        const newEdges = data.map(caseData => ({
            from: caseId,
            to: caseData.case_id,
        }));

        setNodes(newNodes);
        setEdges(newEdges);
    };

    return (
        <div>
            <select onChange={(e) => handleVisualizationChange(e.target.value)}>
                <option value="court">Court-based</option>
                <option value="judge">Judge-based</option>
                <option value="section">Section-based</option>
            </select>

            <GraphVisualization nodes={nodes} edges={edges} />
        </div>
    );
};

export default CaseVisualization;

