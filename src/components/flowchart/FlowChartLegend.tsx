
import React from 'react';
import { Button } from '../ui/button';

interface FlowChartLegendProps {
  showMiniMap: boolean;
  toggleMiniMap: () => void;
}

const FlowChartLegend: React.FC<FlowChartLegendProps> = ({ showMiniMap, toggleMiniMap }) => {
  return (
    <div className="flex justify-between p-2 bg-gray-100 items-center">
      <div className="flex space-x-4 items-center">
        <div className="flex items-center">
          <div className="w-4 h-4 bg-green-50 border border-green-500 mr-1"></div>
          <span className="text-sm">Start</span>
        </div>
        <div className="flex items-center">
          <div className="w-4 h-4 bg-red-50 border border-red-500 mr-1"></div>
          <span className="text-sm">End</span>
        </div>
        <div className="flex items-center">
          <div className="w-4 h-4 bg-blue-50 border border-blue-500 mr-1" style={{ transform: 'rotate(45deg)' }}></div>
          <span className="text-sm">Decision</span>
        </div>
        <div className="flex items-center">
          <div className="w-4 h-4 bg-purple-50 border border-purple-500 mr-1"></div>
          <span className="text-sm">Process</span>
        </div>
      </div>
      <Button 
        variant="outline"
        size="sm"
        onClick={toggleMiniMap}
      >
        {showMiniMap ? 'Hide' : 'Show'} Mini Map
      </Button>
    </div>
  );
};

export default FlowChartLegend;
