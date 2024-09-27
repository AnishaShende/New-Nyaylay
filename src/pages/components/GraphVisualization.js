import React, { useRef, useEffect, useState } from "react";
import { Network } from "vis-network";
import ResizeObserver from "resize-observer-polyfill";

const GraphVisualization = ({ caseData }) => {
  const containerRef = useRef(null);
  const [selectedNodeDetails, setSelectedNodeDetails] = useState(null);

  useEffect(() => {
    if (caseData) {
      const { mainCase, relatedCases } = caseData;

      const nodes = [
        // Main case node
        {
          id: mainCase.id,
          label: mainCase.label,
          group: "main_case",
          details: mainCase.details,
        },

        // Related cases
        ...relatedCases.map((caseItem) => ({
          id: caseItem.id,
          label: caseItem.label,
          group: "case",
          details: caseItem.details,
        })),

        // Judges and Laws for main case
        ...mainCase.judges.map((judge) => ({
          id: judge.id,
          label: judge.label,
          group: "judge",
        })),
        ...mainCase.laws.map((law) => ({
          id: law.id,
          label: law.label,
          group: "law",
        })),

        // Judges and Laws for related cases
        ...relatedCases.flatMap((caseItem) => [
          ...caseItem.judges.map((judge) => ({
            id: judge.id,
            label: judge.label,
            group: "judge",
          })),
          ...caseItem.laws.map((law) => ({
            id: law.id,
            label: law.label,
            group: "law",
          })),
        ]),
      ];

      const edges = [
        // Connect main case to its judges and laws
        ...mainCase.judges.map((judge) => ({
          from: mainCase.id,
          to: judge.id,
        })),
        ...mainCase.laws.map((law) => ({
          from: mainCase.id,
          to: law.id,
        })),

        // Connect main case to related cases
        ...relatedCases.map((caseItem) => ({
          from: mainCase.id,
          to: caseItem.id,
        })),

        // Connect related cases to their judges and laws
        ...relatedCases.flatMap((caseItem) => [
          ...caseItem.judges.map((judge) => ({
            from: caseItem.id,
            to: judge.id,
          })),
          ...caseItem.laws.map((law) => ({
            from: caseItem.id,
            to: law.id,
          })),
        ]),
      ];

      const data = { nodes, edges };
      const options = {
        nodes: {
          shape: "dot",
          size: 20,
        },
        edges: {
          smooth: true,
          color: "#848484",
        },
        groups: {
          main_case: { color: { background: "yellow" }, size: 30 },
          case: { color: { background: "red" } },
          judge: { color: { background: "blue" } },
          law: { color: { background: "green" } },
        },
        physics: {
          enabled: true,
          stabilization: { iterations: 200 },
        },
      };

      const network = new Network(containerRef.current, data, options);

      // Show details on node click
      network.on("click", function (params) {
        const nodeId = params.nodes[0];
        const node = nodes.find((n) => n.id === nodeId);
        if (node && node.details) {
          setSelectedNodeDetails(node.details); // Show detailed info in side panel
        }
      });

      return () => network.destroy();
    }
  }, [caseData]);

  return (
    <div style={{ display: "flex" }}>
      {/* Graph Container */}
      <div
        ref={containerRef}
        style={{ height: "500px", width: "70%", border: "1px solid black" }}
      ></div>

      {/* Case Details Side Panel */}
      {selectedNodeDetails && (
        <div
          style={{
            width: "50%",
            padding: "10px",
            borderLeft: "1px solid gray",
          }}
        >
          <h3>Case Details</h3>
          <p>
            <strong>Summary:</strong> {selectedNodeDetails.summary}
          </p>
          <p>
            <strong>Court:</strong> {selectedNodeDetails.court}
          </p>
          <p>
            <strong>Date:</strong> {selectedNodeDetails.date}
          </p>
          <p>
            <strong>Status:</strong> {selectedNodeDetails.status}
          </p>
        </div>
      )}
    </div>
  );
};

export default GraphVisualization;
