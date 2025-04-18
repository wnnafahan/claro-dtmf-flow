
import { Node, Edge } from '@xyflow/react';

export const nodes: Node[] = [
  {
    id: 'main',
    type: 'default',
    position: { x: 350, y: 0 },
    data: { label: 'Welcome to Claro!\nYou\'re Our Priority' },
    style: { textAlign: 'center', width: 200 }
  },
  // Main Menu Options
  {
    id: 'option1',
    type: 'default',
    position: { x: 350, y: 100 },
    data: { label: 'Billing and Balance' },
    style: { width: 150 }
  },
  {
    id: 'option2',
    type: 'default',
    position: { x: 150, y: 100 },
    data: { label: 'Current Plans' },
    style: { width: 150 }
  },
  {
    id: 'option3',
    type: 'default',
    position: { x: 550, y: 100 },
    data: { label: 'Requests & Claims' },
    style: { width: 150 }
  },
  {
    id: 'option4',
    type: 'default',
    position: { x: 750, y: 100 },
    data: { label: 'Technical Visit' },
    style: { width: 150 }
  },
  {
    id: 'option5',
    type: 'default',
    position: { x: -50, y: 100 },
    data: { label: 'Wi-Fi Password' },
    style: { width: 150 }
  },
  // Billing Flow
  {
    id: 'postpaid-check',
    type: 'default',
    position: { x: 350, y: 200 },
    data: { label: 'Is Postpaid?' },
    style: { width: 150 }
  },
  {
    id: 'debt-collector',
    type: 'default',
    position: { x: 350, y: 300 },
    data: { label: 'Has Debt Collector?' },
    style: { width: 150 }
  },
  {
    id: 'agency-contact',
    type: 'default',
    position: { x: 150, y: 400 },
    data: { label: 'Contact Agency\n(Play Audio & SMS)' },
    style: { width: 150 }
  },
  {
    id: 'billing-menu',
    type: 'default',
    position: { x: 550, y: 400 },
    data: { label: 'Billing Options Menu' },
    style: { width: 150 }
  },
  // Payment Status
  {
    id: 'payment-status',
    type: 'default',
    position: { x: 550, y: 500 },
    data: { label: 'Payment Status Check' },
    style: { width: 150 }
  },
  {
    id: 'status-enrouted',
    type: 'default',
    position: { x: 350, y: 600 },
    data: { label: 'Enrouted' },
    style: { width: 150 }
  },
  {
    id: 'status-suspended',
    type: 'default',
    position: { x: 550, y: 600 },
    data: { label: 'Suspended' },
    style: { width: 150 }
  },
  {
    id: 'status-error',
    type: 'default',
    position: { x: 750, y: 600 },
    data: { label: 'Errors' },
    style: { width: 150 }
  }
];

export const edges: Edge[] = [
  // Main Menu Connections
  { id: 'main-1', source: 'main', target: 'option1' },
  { id: 'main-2', source: 'main', target: 'option2' },
  { id: 'main-3', source: 'main', target: 'option3' },
  { id: 'main-4', source: 'main', target: 'option4' },
  { id: 'main-5', source: 'main', target: 'option5' },
  // Billing Flow
  { id: 'billing-1', source: 'option1', target: 'postpaid-check' },
  { id: 'postpaid-1', source: 'postpaid-check', target: 'debt-collector' },
  { 
    id: 'debt-1', 
    source: 'debt-collector', 
    target: 'agency-contact',
    label: 'Yes'
  },
  { 
    id: 'debt-2', 
    source: 'debt-collector', 
    target: 'billing-menu',
    label: 'No'
  },
  // Payment Status Flow
  { id: 'billing-status', source: 'billing-menu', target: 'payment-status' },
  { 
    id: 'status-1', 
    source: 'payment-status', 
    target: 'status-enrouted',
    label: 'Enrouted'
  },
  { 
    id: 'status-2', 
    source: 'payment-status', 
    target: 'status-suspended',
    label: 'Suspended'
  },
  { 
    id: 'status-3', 
    source: 'payment-status', 
    target: 'status-error',
    label: 'Error'
  }
];
