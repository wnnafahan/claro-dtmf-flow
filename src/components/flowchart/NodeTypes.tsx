
import { FileInput, SquareDashed, Square, Terminal } from 'lucide-react';

// Define node types as individual components
export const StartNode = ({ data }) => (
  <div className="px-4 py-2 rounded-md border border-green-500 bg-green-50 flex items-center">
    <FileInput className="mr-2 text-green-600" size={18} />
    <div>{data.label}</div>
  </div>
);

export const EndNode = ({ data }) => (
  <div className="px-4 py-2 rounded-md border border-red-500 bg-red-50 flex items-center">
    <Terminal className="mr-2 text-red-600" size={18} />
    <div>{data.label}</div>
  </div>
);

export const DecisionNode = ({ data }) => (
  <div className="px-4 py-4 border border-blue-500 bg-blue-50" style={{
    transform: 'rotate(45deg)',
    width: '120px',
    height: '120px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }}>
    <div style={{ transform: 'rotate(-45deg)', textAlign: 'center', width: '140px' }}>
      <SquareDashed className="mb-1 mx-auto text-blue-600" size={18} />
      {data.label}
    </div>
  </div>
);

export const ProcessNode = ({ data }) => (
  <div className="px-4 py-2 rounded-md border border-purple-500 bg-purple-50 flex items-center">
    <Square className="mr-2 text-purple-600" size={18} />
    <div>{data.label}</div>
  </div>
);

// Export the node types for use in the flow chart
export const nodeTypes = {
  start: StartNode,
  end: EndNode,
  decision: DecisionNode,
  process: ProcessNode,
};
