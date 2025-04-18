
import { ReactFlow, MiniMap, Controls, Background } from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import { nodes, edges } from '../data/flowChartData';

const CleroFlowChart = () => {
  return (
    <div className="w-full h-screen">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        fitView
        attributionPosition="bottom-right"
      >
        <Background />
        <Controls />
        <MiniMap />
      </ReactFlow>
    </div>
  );
};

export default CleroFlowChart;
