
// Define nodes for the flowchart
export const nodes = [
  {
    id: 'start',
    type: 'start',
    position: { x: 500, y: 30 },
    data: { label: 'Start' },
  },
  {
    id: 'check-order-type',
    type: 'decision',
    position: { x: 445, y: 120 },
    data: { label: 'Check Order Type' },
  },
  {
    id: 'activation',
    type: 'process',
    position: { x: 250, y: 230 },
    data: { label: 'Activation' },
    style: { width: 180 }
  },
  {
    id: 'resubmission',
    type: 'process',
    position: { x: 650, y: 230 },
    data: { label: 'Re-Submission' },
    style: { width: 180 }
  },
  {
    id: 'check-status-activation',
    type: 'decision',
    position: { x: 245, y: 320 },
    data: { label: 'Check Status' },
  },
  {
    id: 'accepted-activation',
    type: 'process',
    position: { x: 150, y: 450 },
    data: { label: 'Accepted' },
    style: { width: 150 }
  },
  {
    id: 'rejected-activation',
    type: 'process',
    position: { x: 350, y: 450 },
    data: { label: 'Rejected' },
    style: { width: 150 }
  },
  {
    id: 'notify-api-accepted',
    type: 'process',
    position: { x: 100, y: 520 },
    data: { label: 'Notify through (esaffinalstat4dscm) API' },
    style: { width: 250 }
  },
  {
    id: 'notify-both-accepted',
    type: 'process',
    position: { x: 100, y: 580 },
    data: { label: 'Notify Both Retailer & Web Portal User' },
    style: { width: 250 }
  },
  {
    id: 'disable-resubmission',
    type: 'process',
    position: { x: 100, y: 640 },
    data: { label: 'Disable Web portal Re-submission' },
    style: { width: 250 }
  },
  {
    id: 'notify-api-rejected',
    type: 'process',
    position: { x: 350, y: 520 },
    data: { label: 'Notify through (esaffinalstat4dscm) API' },
    style: { width: 250 }
  },
  {
    id: 'notify-both-rejected',
    type: 'process',
    position: { x: 350, y: 580 },
    data: { label: 'Notify Both Retailer & Web Portal User' },
    style: { width: 250 }
  },
  {
    id: 'enable-resubmission',
    type: 'process',
    position: { x: 350, y: 640 },
    data: { label: 'Enable Web portal & Retailer Re-submission' },
    style: { width: 250 }
  },
  {
    id: 'check-portal',
    type: 'decision',
    position: { x: 645, y: 320 },
    data: { label: 'Check Portal' },
  },
  {
    id: 'retailer-app-1',
    type: 'process',
    position: { x: 550, y: 450 },
    data: { label: 'Retailer App' },
    style: { width: 150 }
  },
  {
    id: 'web-portal',
    type: 'process',
    position: { x: 750, y: 450 },
    data: { label: 'Web Portal' },
    style: { width: 150 }
  },
  {
    id: 'check-status-retailer-1',
    type: 'decision',
    position: { x: 545, y: 520 },
    data: { label: 'Check Status' },
  },
  {
    id: 'check-status-web',
    type: 'decision',
    position: { x: 745, y: 520 },
    data: { label: 'Check Status' },
  },
  {
    id: 'accepted-retailer-1',
    type: 'process',
    position: { x: 450, y: 600 },
    data: { label: 'Accepted' },
    style: { width: 150 }
  },
  {
    id: 'rejected-retailer-1',
    type: 'process',
    position: { x: 650, y: 600 },
    data: { label: 'Rejected' },
    style: { width: 150 }
  },
  {
    id: 'accepted-web',
    type: 'process',
    position: { x: 750, y: 600 },
    data: { label: 'Accepted' },
    style: { width: 150 }
  },
  {
    id: 'rejected-web',
    type: 'process',
    position: { x: 950, y: 600 },
    data: { label: 'Rejected' },
    style: { width: 150 }
  },
  {
    id: 'notify-api-retailer-1-accepted',
    type: 'process',
    position: { x: 400, y: 670 },
    data: { label: 'Notify through (esaffinalstat4dscm) API' },
    style: { width: 250 }
  },
  {
    id: 'notify-both-retailer-1-accepted',
    type: 'process',
    position: { x: 400, y: 730 },
    data: { label: 'Notify Both Retailer & Web Portal User' },
    style: { width: 250 }
  },
  {
    id: 'disable-resubmission-retailer-1',
    type: 'process',
    position: { x: 400, y: 790 },
    data: { label: 'Disable Web portal Re-submission' },
    style: { width: 250 }
  },
  {
    id: 'notify-api-retailer-1-rejected',
    type: 'process',
    position: { x: 680, y: 670 },
    data: { label: 'Notify through (esaffinalstat4dscm) API' },
    style: { width: 250 }
  },
  {
    id: 'notify-retailer-only',
    type: 'process',
    position: { x: 680, y: 730 },
    data: { label: 'Notify Retailer Only' },
    style: { width: 250 }
  },
  {
    id: 'enable-both-resubmission',
    type: 'process',
    position: { x: 680, y: 790 },
    data: { label: 'Enable Web portal & Retailer Re-submission' },
    style: { width: 250 }
  },
  // Web Portal flow
  {
    id: 'notify-api-web-accepted',
    type: 'process',
    position: { x: 750, y: 670 },
    data: { label: 'Notify through (esaffinalstat4dscm) API' },
    style: { width: 250 }
  },
  {
    id: 'notify-both-web-accepted',
    type: 'process',
    position: { x: 750, y: 730 },
    data: { label: 'Notify Both Retailer & Web Portal User' },
    style: { width: 250 }
  },
  {
    id: 'disable-resubmission-web',
    type: 'process',
    position: { x: 750, y: 790 },
    data: { label: 'Disable Web portal Re-submission' },
    style: { width: 250 }
  },
  {
    id: 'notify-api-web-rejected',
    type: 'process',
    position: { x: 950, y: 670 },
    data: { label: 'Notify through (esaffinalstat4dscm) API' },
    style: { width: 250 }
  },
  {
    id: 'notify-web-portal-only',
    type: 'process',
    position: { x: 950, y: 730 },
    data: { label: 'Notify Web Portal User Only' },
    style: { width: 250 }
  },
  {
    id: 'enable-web-resubmission',
    type: 'process',
    position: { x: 950, y: 790 },
    data: { label: 'Enable Web portal Re-submission' },
    style: { width: 250 }
  },
  {
    id: 'end',
    type: 'end',
    position: { x: 500, y: 880 },
    data: { label: 'End' },
  }
];

// Define edges (connections between nodes)
export const edges = [
  { id: 'start-check', source: 'start', target: 'check-order-type' },
  { id: 'check-activation', source: 'check-order-type', target: 'activation', label: 'Activation' },
  { id: 'check-resubmission', source: 'check-order-type', target: 'resubmission', label: 'Re-Submission' },
  
  // Activation flow
  { id: 'activation-check-status', source: 'activation', target: 'check-status-activation' },
  { id: 'status-accepted', source: 'check-status-activation', target: 'accepted-activation', label: 'Accepted' },
  { id: 'status-rejected', source: 'check-status-activation', target: 'rejected-activation', label: 'Rejected' },
  
  // Accepted activation flow
  { id: 'accepted-notify-api', source: 'accepted-activation', target: 'notify-api-accepted' },
  { id: 'notify-api-both', source: 'notify-api-accepted', target: 'notify-both-accepted' },
  { id: 'notify-both-disable', source: 'notify-both-accepted', target: 'disable-resubmission' },
  { id: 'disable-end', source: 'disable-resubmission', target: 'end' },
  
  // Rejected activation flow
  { id: 'rejected-notify-api', source: 'rejected-activation', target: 'notify-api-rejected' },
  { id: 'notify-api-both-rejected', source: 'notify-api-rejected', target: 'notify-both-rejected' },
  { id: 'notify-both-enable', source: 'notify-both-rejected', target: 'enable-resubmission' },
  { id: 'enable-end', source: 'enable-resubmission', target: 'end' },
  
  // Re-submission flow
  { id: 'resubmission-check-portal', source: 'resubmission', target: 'check-portal' },
  { id: 'portal-retailer', source: 'check-portal', target: 'retailer-app-1', label: 'Retailer App' },
  { id: 'portal-web', source: 'check-portal', target: 'web-portal', label: 'Web Portal' },
  
  // Retailer app flow
  { id: 'retailer-check-status', source: 'retailer-app-1', target: 'check-status-retailer-1' },
  { id: 'retailer-status-accepted', source: 'check-status-retailer-1', target: 'accepted-retailer-1', label: 'Accepted' },
  { id: 'retailer-status-rejected', source: 'check-status-retailer-1', target: 'rejected-retailer-1', label: 'Rejected' },
  
  // Accepted retailer flow
  { id: 'retailer-accepted-notify-api', source: 'accepted-retailer-1', target: 'notify-api-retailer-1-accepted' },
  { id: 'retailer-notify-api-both', source: 'notify-api-retailer-1-accepted', target: 'notify-both-retailer-1-accepted' },
  { id: 'retailer-notify-both-disable', source: 'notify-both-retailer-1-accepted', target: 'disable-resubmission-retailer-1' },
  { id: 'retailer-disable-end', source: 'disable-resubmission-retailer-1', target: 'end' },
  
  // Rejected retailer flow
  { id: 'retailer-rejected-notify-api', source: 'rejected-retailer-1', target: 'notify-api-retailer-1-rejected' },
  { id: 'retailer-notify-api-retailer', source: 'notify-api-retailer-1-rejected', target: 'notify-retailer-only' },
  { id: 'retailer-notify-retailer-enable', source: 'notify-retailer-only', target: 'enable-both-resubmission' },
  { id: 'retailer-enable-end', source: 'enable-both-resubmission', target: 'end' },
  
  // Web portal flow
  { id: 'web-check-status', source: 'web-portal', target: 'check-status-web' },
  { id: 'web-status-accepted', source: 'check-status-web', target: 'accepted-web', label: 'Accepted' },
  { id: 'web-status-rejected', source: 'check-status-web', target: 'rejected-web', label: 'Rejected' },
  
  // Accepted web portal flow
  { id: 'web-accepted-notify-api', source: 'accepted-web', target: 'notify-api-web-accepted' },
  { id: 'web-notify-api-both', source: 'notify-api-web-accepted', target: 'notify-both-web-accepted' },
  { id: 'web-notify-both-disable', source: 'notify-both-web-accepted', target: 'disable-resubmission-web' },
  { id: 'web-disable-end', source: 'disable-resubmission-web', target: 'end' },
  
  // Rejected web portal flow
  { id: 'web-rejected-notify-api', source: 'rejected-web', target: 'notify-api-web-rejected' },
  { id: 'web-notify-api-web', source: 'notify-api-web-rejected', target: 'notify-web-portal-only' },
  { id: 'web-notify-web-enable', source: 'notify-web-portal-only', target: 'enable-web-resubmission' },
  { id: 'web-enable-end', source: 'enable-web-resubmission', target: 'end' },
];
