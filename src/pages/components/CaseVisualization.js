import React, { useState, useEffect } from "react";
import GraphVisualization from "./GraphVisualization";

const CaseVisualization = ({ caseId, caseData }) => {
  const [nodes, setNodes] = useState([]);
  const [edges, setEdges] = useState([]);

  useEffect(() => {
    if (caseData) {
      // Create case nodes
      const caseNodes = caseData.map((caseInfo) => ({
        id: caseInfo.case_id,
        label: caseInfo.case_name,
        group: "case",
      }));

      // Create judge nodes and connections
      const judgeNodes = [];
      const judgeEdges = [];
      caseData.forEach((caseInfo) => {
        const judges = caseInfo.judges_involved.split(", ");
        judges.forEach((judge) => {
          if (!judgeNodes.some((node) => node.id === judge)) {
            judgeNodes.push({ id: judge, label: judge, group: "judge" });
          }
          judgeEdges.push({ from: caseInfo.case_id, to: judge });
        });
      });

      // Create section nodes and connections
      const sectionNodes = [];
      const sectionEdges = [];
      caseData.forEach((caseInfo) => {
        const sections = caseInfo.sections_clauses.split(", ");
        sections.forEach((section) => {
          if (!sectionNodes.some((node) => node.id === section)) {
            sectionNodes.push({ id: section, label: section, group: "section" });
          }
          sectionEdges.push({ from: caseInfo.case_id, to: section });
        });
      });

      // Combine all nodes and edges
      setNodes([
        { id: caseId, label: `Main Case: ${caseId}`, group: "main_case" }, // Main case node
        ...caseNodes,
        ...judgeNodes,
        ...sectionNodes,
      ]);

      setEdges([
        ...caseData.map((caseInfo) => ({ from: caseId, to: caseInfo.case_id })), // Main case edges
        ...judgeEdges,
        ...sectionEdges,
      ]);
    }
  }, [caseData, caseId]);

  return (
    <div>
      <GraphVisualization nodes={nodes} edges={edges} />
    </div>
  );
};

export default CaseVisualization;
