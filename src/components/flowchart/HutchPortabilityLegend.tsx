
import React from 'react';
import { Button } from '../ui/button';

interface HutchPortabilityLegendProps {
  showMiniMap: boolean;
  toggleMiniMap: () => void;
}

const HutchPortabilityLegend: React.FC<HutchPortabilityLegendProps> = ({ showMiniMap, toggleMiniMap }) => {
  return (
    <div className="flex justify-between p-3 bg-gray-100 items-center">
      <div className="flex space-x-6 items-center">
        <h2 className="text-lg font-semibold text-gray-800">Hutch Number Portability Process</h2>
        <div className="flex space-x-4 items-center">
          <div className="flex items-center">
            <div className="w-4 h-4 bg-green-50 border border-green-500 mr-2"></div>
            <span className="text-sm">Start/End</span>
          </div>
          <div className="flex items-center">
            <div className="w-4 h-4 bg-blue-50 border border-blue-500 mr-2" style={{ transform: 'rotate(45deg)' }}></div>
            <span className="text-sm">Decision</span>
          </div>
          <div className="flex items-center">
            <div className="w-4 h-4 bg-purple-50 border border-purple-500 mr-2"></div>
            <span className="text-sm">Process</span>
          </div>
          <div className="flex items-center">
            <div className="w-4 h-4 bg-yellow-50 border border-yellow-500 mr-2"></div>
            <span className="text-sm">Manual Process</span>
          </div>
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

export default HutchPortabilityLegend;
