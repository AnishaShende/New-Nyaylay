import React, { useState, useEffect } from "react";
import GraphVisualization from "./GraphVisualization";

const CaseVisualization = ({ caseId, caseData }) => {
  const [nodes, setNodes] = useState([]);
  const [edges, setEdges] = useState([]);

  useEffect(() => {
    if (caseData) {
      const newNodes = [
        { id: caseId, label: `Case: ${caseId}` }, // Current case node
        ...caseData.map((caseInfo) => ({
          id: caseInfo.case_id,
          label: caseInfo.case_name,
        })),
      ];

      const newEdges = caseData.map((caseInfo) => ({
        from: caseId,
        to: caseInfo.case_id,
      }));

      setNodes(newNodes);
      setEdges(newEdges);
    }
  }, [caseData, caseId]);

  return (
    <div>
      <GraphVisualization nodes={nodes} edges={edges} />
    </div>
  );
};

export default CaseVisualization;
