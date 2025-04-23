
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
        <Background color="#f8f8f8" gap={16} />
        <Controls />
        <MiniMap 
          nodeStrokeColor={(n) => {
            return '#000';
          }}
          maskStrokeColor="#6865A5"
          nodeBorderRadius={2}
          nodeColor={(n) => {
            return n.style?.backgroundColor || '#fff';
          }}
        />
      </ReactFlow>
    </div>
  );
};

export default CleroFlowChart;
