
// Define nodes for the Hutch Number Portability flowchart
export const nodes = [
  {
    id: 'start',
    type: 'start',
    position: { x: 400, y: 30 },
    data: { label: 'Start: Hutch as Recipient' },
  },
  {
    id: 'receive-data',
    type: 'process',
    position: { x: 300, y: 120 },
    data: { label: 'Receive Basic Data\n(MSISDN & ID)' },
    style: { width: 200 }
  },
  {
    id: 'recipient-validations',
    type: 'process',
    position: { x: 300, y: 200 },
    data: { label: 'Recipient Validations' },
    style: { width: 200, backgroundColor: '#e8f4fd' }
  },
  {
    id: 'age-validation',
    type: 'decision',
    position: { x: 150, y: 300 },
    data: { label: 'Age Validation\n(Configurable)' },
  },
  {
    id: 'connection-check',
    type: 'decision',
    position: { x: 450, y: 300 },
    data: { label: 'Max Connections\nCheck (≤5)' },
  },
  {
    id: 'sixth-connection',
    type: 'process',
    position: { x: 600, y: 400 },
    data: { label: 'Manual Process\n(6th Connection)' },
    style: { width: 180, backgroundColor: '#fff3cd' }
  },
  {
    id: 'npc-validations',
    type: 'process',
    position: { x: 300, y: 500 },
    data: { label: 'Number Portability Center\nValidations' },
    style: { width: 200, backgroundColor: '#d4edda' }
  },
  {
    id: 'id-restrictions',
    type: 'decision',
    position: { x: 100, y: 600 },
    data: { label: 'ID Restrictions\nCheck' },
  },
  {
    id: 'ongoing-porting',
    type: 'decision',
    position: { x: 300, y: 600 },
    data: { label: 'Ongoing Porting\nRequest Check' },
  },
  {
    id: 'last-porting-date',
    type: 'decision',
    position: { x: 500, y: 600 },
    data: { label: 'Last Porting Date\n(MSP Check)' },
  },
  {
    id: 'donor-validation-request',
    type: 'process',
    position: { x: 300, y: 750 },
    data: { label: 'Request Donor Validation' },
    style: { width: 200, backgroundColor: '#f8d7da' }
  },
  {
    id: 'dn-status',
    type: 'decision',
    position: { x: 50, y: 850 },
    data: { label: 'DN Status\n(Disconnected?)' },
  },
  {
    id: 'reregistration',
    type: 'decision',
    position: { x: 200, y: 850 },
    data: { label: 'Re-registration\nProgress' },
  },
  {
    id: 'ownership-transfer',
    type: 'decision',
    position: { x: 350, y: 850 },
    data: { label: 'Ownership\nTransfer Progress' },
  },
  {
    id: 'age-on-network',
    type: 'decision',
    position: { x: 500, y: 850 },
    data: { label: 'Age on\nNetwork' },
  },
  {
    id: 'corporate-profile',
    type: 'decision',
    position: { x: 650, y: 850 },
    data: { label: 'Corporate\nProfile Member' },
  },
  {
    id: 'outstanding-payment',
    type: 'decision',
    position: { x: 200, y: 950 },
    data: { label: 'Outstanding\nPayment' },
  },
  {
    id: 'special-number',
    type: 'decision',
    position: { x: 350, y: 950 },
    data: { label: 'Special\nNumber' },
  },
  {
    id: 'legal-obligations',
    type: 'decision',
    position: { x: 500, y: 950 },
    data: { label: 'Legal\nObligations' },
  },
  {
    id: 'send-porting-request',
    type: 'process',
    position: { x: 300, y: 1050 },
    data: { label: 'Send Porting Request\nto Donor' },
    style: { width: 200 }
  },
  {
    id: 'donor-decision',
    type: 'decision',
    position: { x: 295, y: 1150 },
    data: { label: 'Donor Decision' },
  },
  {
    id: 'porting-accepted',
    type: 'process',
    position: { x: 150, y: 1250 },
    data: { label: 'Porting Accepted' },
    style: { width: 180, backgroundColor: '#d4edda' }
  },
  {
    id: 'porting-rejected',
    type: 'process',
    position: { x: 450, y: 1250 },
    data: { label: 'Porting Rejected' },
    style: { width: 180, backgroundColor: '#f8d7da' }
  },
  {
    id: 'end-success',
    type: 'end',
    position: { x: 150, y: 1350 },
    data: { label: 'End: Success' },
  },
  {
    id: 'end-failure',
    type: 'end',
    position: { x: 450, y: 1350 },
    data: { label: 'End: Rejected' },
  },
  // Rejection endpoints for various validations
  {
    id: 'age-reject',
    type: 'end',
    position: { x: 50, y: 400 },
    data: { label: 'Reject: Age' },
  },
  {
    id: 'npc-reject',
    type: 'end',
    position: { x: 700, y: 700 },
    data: { label: 'Reject: NPC' },
  },
  {
    id: 'donor-reject',
    type: 'end',
    position: { x: 800, y: 1000 },
    data: { label: 'Reject: Donor' },
  },
];

// Define edges (connections between nodes)
export const edges = [
  { id: 'start-receive', source: 'start', target: 'receive-data' },
  { id: 'receive-recipient', source: 'receive-data', target: 'recipient-validations' },
  
  // Recipient validations
  { id: 'recipient-age', source: 'recipient-validations', target: 'age-validation' },
  { id: 'recipient-connection', source: 'recipient-validations', target: 'connection-check' },
  
  // Age validation
  { id: 'age-fail', source: 'age-validation', target: 'age-reject', label: 'Invalid Age' },
  { id: 'age-pass', source: 'age-validation', target: 'npc-validations', label: 'Valid' },
  
  // Connection validation
  { id: 'connection-sixth', source: 'connection-check', target: 'sixth-connection', label: '6th Connection' },
  { id: 'connection-pass', source: 'connection-check', target: 'npc-validations', label: '≤5 Connections' },
  { id: 'manual-process', source: 'sixth-connection', target: 'npc-validations', label: 'Manual Approval' },
  
  // NPC validations
  { id: 'npc-id', source: 'npc-validations', target: 'id-restrictions' },
  { id: 'npc-ongoing', source: 'npc-validations', target: 'ongoing-porting' },
  { id: 'npc-last', source: 'npc-validations', target: 'last-porting-date' },
  
  // NPC validation results
  { id: 'id-fail', source: 'id-restrictions', target: 'npc-reject', label: 'Restricted' },
  { id: 'id-pass', source: 'id-restrictions', target: 'donor-validation-request', label: 'Clear' },
  
  { id: 'ongoing-fail', source: 'ongoing-porting', target: 'npc-reject', label: 'Ongoing Request' },
  { id: 'ongoing-pass', source: 'ongoing-porting', target: 'donor-validation-request', label: 'No Ongoing' },
  
  { id: 'last-port-fail', source: 'last-porting-date', target: 'npc-reject', label: 'Too Recent' },
  { id: 'last-port-pass', source: 'last-porting-date', target: 'donor-validation-request', label: 'Valid Period' },
  
  // Donor validations
  { id: 'donor-dn', source: 'donor-validation-request', target: 'dn-status' },
  { id: 'donor-rereg', source: 'donor-validation-request', target: 'reregistration' },
  { id: 'donor-ownership', source: 'donor-validation-request', target: 'ownership-transfer' },
  { id: 'donor-age-net', source: 'donor-validation-request', target: 'age-on-network' },
  { id: 'donor-corporate', source: 'donor-validation-request', target: 'corporate-profile' },
  { id: 'donor-payment', source: 'donor-validation-request', target: 'outstanding-payment' },
  { id: 'donor-special', source: 'donor-validation-request', target: 'special-number' },
  { id: 'donor-legal', source: 'donor-validation-request', target: 'legal-obligations' },
  
  // Donor validation results
  { id: 'dn-fail', source: 'dn-status', target: 'donor-reject', label: 'Not Disconnected' },
  { id: 'dn-pass', source: 'dn-status', target: 'send-porting-request', label: 'Disconnected' },
  
  { id: 'rereg-fail', source: 'reregistration', target: 'donor-reject', label: 'In Progress' },
  { id: 'rereg-pass', source: 'reregistration', target: 'send-porting-request', label: 'Clear' },
  
  { id: 'ownership-fail', source: 'ownership-transfer', target: 'donor-reject', label: 'In Progress' },
  { id: 'ownership-pass', source: 'ownership-transfer', target: 'send-porting-request', label: 'Clear' },
  
  { id: 'age-net-fail', source: 'age-on-network', target: 'donor-reject', label: 'Insufficient' },
  { id: 'age-net-pass', source: 'age-on-network', target: 'send-porting-request', label: 'Sufficient' },
  
  { id: 'corporate-fail', source: 'corporate-profile', target: 'donor-reject', label: 'Corporate Member' },
  { id: 'corporate-pass', source: 'corporate-profile', target: 'send-porting-request', label: 'Individual' },
  
  { id: 'payment-fail', source: 'outstanding-payment', target: 'donor-reject', label: 'Outstanding' },
  { id: 'payment-pass', source: 'outstanding-payment', target: 'send-porting-request', label: 'Clear' },
  
  { id: 'special-fail', source: 'special-number', target: 'donor-reject', label: 'Special Number' },
  { id: 'special-pass', source: 'special-number', target: 'send-porting-request', label: 'Regular Number' },
  
  { id: 'legal-fail', source: 'legal-obligations', target: 'donor-reject', label: 'Legal Issues' },
  { id: 'legal-pass', source: 'legal-obligations', target: 'send-porting-request', label: 'Clear' },
  
  // Final decision
  { id: 'request-decision', source: 'send-porting-request', target: 'donor-decision' },
  { id: 'decision-accept', source: 'donor-decision', target: 'porting-accepted', label: 'Accept' },
  { id: 'decision-reject', source: 'donor-decision', target: 'porting-rejected', label: 'Reject' },
  
  // Final outcomes
  { id: 'accepted-end', source: 'porting-accepted', target: 'end-success' },
  { id: 'rejected-end', source: 'porting-rejected', target: 'end-failure' },
];
