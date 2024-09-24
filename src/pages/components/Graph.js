import React, { useRef, useEffect } from 'react';
import { Network } from 'vis-network/standalone/esm/vis-network';

const GraphVisualization = ({ nodes, edges }) => {
    const containerRef = useRef(null);

    useEffect(() => {
        const data = {
            nodes: nodes,
            edges: edges,
        };

        const options = {
            nodes: {
                shape: 'dot',
                size: 16,
                font: {
                    size: 16
                }
            },
            edges: {
                width: 2
            }
        };

        if (containerRef.current) {
            new Network(containerRef.current, data, options);
        }
    }, [nodes, edges]);

    return <div ref={containerRef} style={{ height: '500px' }}></div>;
};

export default GraphVisualization;
