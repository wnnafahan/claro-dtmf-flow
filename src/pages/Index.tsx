
import OrderFlowChart from '../components/OrderFlowChart';
import HutchPortabilityChart from '../components/HutchPortabilityChart';
import { Button } from '../components/ui/button';
import { ExternalLink, Palette } from 'lucide-react';

const Index = () => {
  const openOrderFlowFullscreen = () => {
    window.open('/flowchart', '_blank');
  };

  const openHutchPortabilityFullscreen = () => {
    window.open('/hutch-portability', '_blank');
  };

  const openBrandingGuidelines = () => {
    window.open('/branding-guidelines', '_blank');
  };

  return (
    <div className="w-full min-h-screen flex flex-col">
      <div className="p-4 bg-white border-b shadow-sm flex justify-between items-center">
        <h1 className="text-2xl font-semibold">Business Tools</h1>
        <div className="flex gap-2">
          <Button onClick={openOrderFlowFullscreen} className="flex items-center gap-2">
            <span>Order Flow</span>
            <ExternalLink size={16} />
          </Button>
          <Button onClick={openHutchPortabilityFullscreen} className="flex items-center gap-2" variant="outline">
            <span>Hutch Portability</span>
            <ExternalLink size={16} />
          </Button>
          <Button onClick={openBrandingGuidelines} className="flex items-center gap-2" variant="secondary">
            <Palette size={16} />
            <span>Brand Guidelines</span>
            <ExternalLink size={16} />
          </Button>
        </div>
      </div>
      <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-4 p-4">
        <div className="border rounded-lg overflow-hidden">
          <div className="p-3 bg-gray-50 border-b">
            <h2 className="font-medium">Order Flow Chart</h2>
          </div>
          <div className="h-96">
            <OrderFlowChart />
          </div>
        </div>
        <div className="border rounded-lg overflow-hidden">
          <div className="p-3 bg-gray-50 border-b">
            <h2 className="font-medium">Hutch Number Portability</h2>
          </div>
          <div className="h-96">
            <HutchPortabilityChart />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
