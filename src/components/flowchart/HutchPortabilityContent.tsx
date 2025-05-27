
import React from 'react';
import { ReactFlow, MiniMap, Controls, Background } from '@xyflow/react';
import { nodes, edges } from './HutchPortabilityData';
import { nodeTypes } from './NodeTypes';

interface HutchPortabilityContentProps {
  showMiniMap: boolean;
}

const HutchPortabilityContent: React.FC<HutchPortabilityContentProps> = ({ showMiniMap }) => {
  return (
    <ReactFlow
      nodes={nodes}
      edges={edges}
      nodeTypes={nodeTypes}
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
          nodeStrokeColor={(n) => {
            if (n.type === 'start') return '#22c55e';
            if (n.type === 'end') return '#ef4444';
            if (n.type === 'decision') return '#3b82f6';
            return '#8b5cf6';
          }}
          maskStrokeColor="#6865A5"
          nodeBorderRadius={2}
          nodeColor={(n) => {
            if (n.type === 'start') return '#f0fdf4';
            if (n.type === 'end') return '#fef2f2';
            if (n.type === 'decision') return '#eff6ff';
            return '#f5f3ff';
          }}
          zoomable
          pannable
        />
      )}
    </ReactFlow>
  );
};

export default HutchPortabilityContent;
