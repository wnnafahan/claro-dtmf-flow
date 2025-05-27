
import { useState } from 'react';
import '@xyflow/react/dist/style.css';
import HutchPortabilityLegend from './flowchart/HutchPortabilityLegend';
import HutchPortabilityContent from './flowchart/HutchPortabilityContent';

const HutchPortabilityChart = () => {
  const [showMiniMap, setShowMiniMap] = useState(true);
  
  const toggleMiniMap = () => {
    setShowMiniMap(!showMiniMap);
  };
  
  return (
    <div className="w-full h-screen flex flex-col">
      <HutchPortabilityLegend showMiniMap={showMiniMap} toggleMiniMap={toggleMiniMap} />
      <div className="flex-1">
        <HutchPortabilityContent showMiniMap={showMiniMap} />
      </div>
    </div>
  );
};

export default HutchPortabilityChart;
