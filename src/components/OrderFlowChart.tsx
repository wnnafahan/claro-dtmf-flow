
import { useState } from 'react';
import '@xyflow/react/dist/style.css';
import FlowChartLegend from './flowchart/FlowChartLegend';
import FlowChartContent from './flowchart/FlowChartContent';

const OrderFlowChart = () => {
  const [showMiniMap, setShowMiniMap] = useState(true);
  
  const toggleMiniMap = () => {
    setShowMiniMap(!showMiniMap);
  };
  
  return (
    <div className="w-full h-screen flex flex-col">
      <FlowChartLegend showMiniMap={showMiniMap} toggleMiniMap={toggleMiniMap} />
      <div className="flex-1">
        <FlowChartContent showMiniMap={showMiniMap} />
      </div>
    </div>
  );
};

export default OrderFlowChart;
