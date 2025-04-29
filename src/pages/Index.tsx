
import OrderFlowChart from '../components/OrderFlowChart';
import { Button } from '../components/ui/button';
import { ExternalLink } from 'lucide-react';

const Index = () => {
  const openFullscreen = () => {
    window.open('/flowchart', '_blank');
  };

  return (
    <div className="w-full min-h-screen flex flex-col">
      <div className="p-4 bg-white border-b shadow-sm flex justify-between items-center">
        <h1 className="text-2xl font-semibold">Order Flow Chart</h1>
        <Button onClick={openFullscreen} className="flex items-center gap-2">
          <span>Open in New Tab</span>
          <ExternalLink size={16} />
        </Button>
      </div>
      <div className="flex-1">
        <OrderFlowChart />
      </div>
    </div>
  );
};

export default Index;
