import React, { useRef, useEffect } from "react";
import { Network } from "vis-network";

const GraphVisualization = ({ nodes, edges }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (nodes.length && edges.length) {
      const data = {
        nodes: nodes.map((node) => ({
          id: node.id,
          label: node.label,
          group: node.group,
        })),
        edges: edges.map((edge) => ({ from: edge.from, to: edge.to })),
      };

      const options = {
        nodes: {
          shape: "dot",
          size: 20,
        },
        edges: {
          length: 200,
        },
        groups: {
          case: { color: { background: "red" } },
          judge: { color: { background: "blue" } },
          section: { color: { background: "green" } },
          main_case: { color: { background: "yellow" }, size: 30 },
        },
      };

      const network = new Network(containerRef.current, data, options);

      return () => {
        network.destroy(); // Cleanup when component is unmounted
      };
    }
  }, [nodes, edges]);

  return (
    <div style={{ height: "500px", width: "100%" }} ref={containerRef}></div>
  );
};

export default GraphVisualization;
