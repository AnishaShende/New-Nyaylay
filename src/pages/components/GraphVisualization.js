import React, { useRef, useEffect } from "react";
import { Network } from "vis-network";

const GraphVisualization = ({ nodes = [], edges = [] }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (nodes.length && edges.length) {
      console.log("Nodes:", nodes);  // Logging nodes
      console.log("Edges:", edges);  // Logging edges

      // Prepare data
      const data = {
        nodes: nodes.map((node) => ({
          id: node.id,
          label: node.label,
          group: node.group,
          color: {
            background: "#ffffff", // Ensure background is visible
            border: "#000000", // Border color for contrast
          },
          font: {
            color: "#000000", // Font color for visibility
          },
        })),
        edges: edges.map((edge) => ({
          from: edge.from,
          to: edge.to,
          color: "#000000", // Darker color for edges
        })),
      };

      // Options for the graph visualization
      const options = {
        nodes: {
          shape: "dot",
          size: 15,
        },
        edges: {
          smooth: {
            enabled: true,
            type: "dynamic",
          },
          color: "#848484",
          length: 150,
        },
        groups: {
          case: { color: { background: "red", border: "#000" } },
          judge: { color: { background: "blue", border: "#000" } },
          section: { color: { background: "green", border: "#000" } },
          main_case: { color: { background: "yellow", border: "#000" }, size: 30 },
        },
        physics: {
          enabled: true,
          stabilization: { iterations: 200 },
        },
        interaction: {
          dragNodes: true,
          zoomView: true,
        },
      };

      const network = new Network(containerRef.current, data, options);

      return () => {
        if (network) network.destroy(); // Cleanup on component unmount
      };
    } else {
      console.log("No nodes or edges available to display the graph.");
    }
  }, [nodes, edges]);

  return (
    <div
      style={{
        height: "500px",
        width: "100%",
        backgroundColor: "#f0f0f0", // Light gray background for contrast
        border: "1px solid #000", // Border for visibility
      }}
      ref={containerRef}
    ></div>
  );
};

export default GraphVisualization;
