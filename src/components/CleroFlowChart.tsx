
import { ReactFlow, MiniMap, Controls, Background } from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import { nodes, edges } from '../data/flowChartData';
import { useState } from 'react';

const CleroFlowChart = () => {
  const [showMiniMap, setShowMiniMap] = useState(true);
  
  return (
    <div className="w-full h-screen flex flex-col">
      <div className="flex justify-end p-2 bg-gray-100">
        <button 
          onClick={() => setShowMiniMap(!showMiniMap)}
          className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300 text-sm"
        >
          {showMiniMap ? 'Hide' : 'Show'} Mini Map
        </button>
      </div>
      <div className="flex-1">
        <ReactFlow
          nodes={nodes}
          edges={edges}
          fitView
          minZoom={0.1}
          maxZoom={1.5}
          attributionPosition="bottom-right"
          nodesDraggable={false}
        >
          <Background color="#f8f8f8" gap={16} />
          <Controls />
          {showMiniMap && (
            <MiniMap 
              nodeStrokeColor={(n) => '#000'}
              maskStrokeColor="#6865A5"
              nodeBorderRadius={2}
              nodeColor={(n) => n.style?.backgroundColor || '#fff'}
              zoomable
              pannable
            />
          )}
        </ReactFlow>
      </div>
    </div>
  );
};

export default CleroFlowChart;
