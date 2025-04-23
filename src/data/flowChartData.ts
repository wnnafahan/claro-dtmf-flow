
import { Node, Edge } from '@xyflow/react';

export const nodes: Node[] = [
  // Main Menu
  {
    id: 'main',
    type: 'default',
    position: { x: 600, y: 0 },
    data: { label: 'Welcome to Claro!\nYou\'re Our Priority' },
    style: { textAlign: 'center', width: 200 }
  },
  // Main Menu Options
  {
    id: 'option1',
    type: 'default',
    position: { x: 600, y: 100 },
    data: { label: 'Billing and Balance' },
    style: { width: 150 }
  },
  {
    id: 'option2',
    type: 'default',
    position: { x: 100, y: 100 },
    data: { label: 'Current Plans' },
    style: { width: 150 }
  },
  {
    id: 'option3',
    type: 'default',
    position: { x: 900, y: 100 },
    data: { label: 'Requests & Claims' },
    style: { width: 150 }
  },
  {
    id: 'option4',
    type: 'default',
    position: { x: 1100, y: 100 },
    data: { label: 'Technical Visit' },
    style: { width: 150 }
  },
  {
    id: 'option5',
    type: 'default',
    position: { x: 300, y: 100 },
    data: { label: 'Wi-Fi Password' },
    style: { width: 150 }
  },
  {
    id: 'option6',
    type: 'default',
    position: { x: -100, y: 100 },
    data: { label: 'Repeat Menu' },
    style: { width: 150 }
  },
  
  // Subscriber Type Check
  {
    id: 'subscriber-type',
    type: 'default',
    position: { x: 600, y: 200 },
    data: { label: 'Is Subscriber Postpaid?' },
    style: { width: 150 }
  },
  
  // Balance Type Check for Postpaid
  {
    id: 'balance-type',
    type: 'default',
    position: { x: 600, y: 300 },
    data: { label: 'Is Balance Type M?' },
    style: { width: 150 }
  },
  
  // Agency Check for Balance Type M
  {
    id: 'debt-collector',
    type: 'default',
    position: { x: 600, y: 400 },
    data: { label: 'Has Debt Collector Agency?' },
    style: { width: 150 }
  },
  
  // Agency Contact
  {
    id: 'agency-contact',
    type: 'default',
    position: { x: 400, y: 500 },
    data: { label: 'Contact Agency\n(Play Audio & SMS)' },
    style: { width: 170 }
  },
  
  // Billing Menu (No Debt Collector)
  {
    id: 'billing-menu',
    type: 'default',
    position: { x: 800, y: 500 },
    data: { label: 'Billing Options Menu' },
    style: { width: 160 }
  },
  
  // DTMF Options for Billing Menu
  {
    id: 'billing-option1',
    type: 'default',
    position: { x: 600, y: 600 },
    data: { label: 'Invoice/Payment Info' },
    style: { width: 150 }
  },
  {
    id: 'billing-option2',
    type: 'default',
    position: { x: 800, y: 600 },
    data: { label: 'Payment 2 Days Ago' },
    style: { width: 150 }
  },
  {
    id: 'billing-option3',
    type: 'default',
    position: { x: 1000, y: 600 },
    data: { label: 'Payment >3 Days Ago' },
    style: { width: 150 }
  },
  {
    id: 'billing-option4',
    type: 'default',
    position: { x: 1200, y: 600 },
    data: { label: 'Repeat Information' },
    style: { width: 150 }
  },
  {
    id: 'billing-option0',
    type: 'default',
    position: { x: 400, y: 600 },
    data: { label: 'Back to Main Menu' },
    style: { width: 150 }
  },
  
  // Dynamic Menu Check
  {
    id: 'customer-equipment',
    type: 'default',
    position: { x: 600, y: 700 },
    data: { label: 'Customer Has Equipment\nand Bill Balance?' },
    style: { width: 170 }
  },
  
  // Dynamic Option 1
  {
    id: 'dynamic-option1',
    type: 'default',
    position: { x: 400, y: 800 },
    data: { label: 'Dynamic Option 1 Menu' },
    style: { width: 170 }
  },
  
  // Dynamic Option 2
  {
    id: 'dynamic-option2',
    type: 'default',
    position: { x: 800, y: 800 },
    data: { label: 'Dynamic Option 2 Menu' },
    style: { width: 170 }
  },
  
  // Payment Status Check
  {
    id: 'payment-status',
    type: 'default',
    position: { x: 800, y: 700 },
    data: { label: 'Payment Status Check' },
    style: { width: 160 }
  },
  
  // Payment Status Types
  {
    id: 'status-enrouted',
    type: 'default',
    position: { x: 600, y: 900 },
    data: { label: 'Enrouted' },
    style: { width: 150 }
  },
  {
    id: 'status-suspended',
    type: 'default',
    position: { x: 800, y: 900 },
    data: { label: 'Suspended' },
    style: { width: 150 }
  },
  {
    id: 'status-errors',
    type: 'default',
    position: { x: 1000, y: 900 },
    data: { label: 'Errors' },
    style: { width: 150 }
  },
  
  // City Migration Check
  {
    id: 'city-migrated',
    type: 'default',
    position: { x: 1000, y: 1000 },
    data: { label: 'Is City Migrated?' },
    style: { width: 150 }
  },
  
  // Technology Check
  {
    id: 'technology-check',
    type: 'default',
    position: { x: 1000, y: 1100 },
    data: { label: 'Technology > 2?' },
    style: { width: 150 }
  },
  
  // WhatsApp Notification
  {
    id: 'whatsapp-notification',
    type: 'default',
    position: { x: 1000, y: 1200 },
    data: { label: 'Send WhatsApp & Play Audio' },
    style: { width: 180 }
  },
  
  // More Than 3 Days Payment
  {
    id: 'payment-3days',
    type: 'default',
    position: { x: 1000, y: 700 },
    data: { label: 'Play Audio TTS' },
    style: { width: 150 }
  },
  
  // City and Tech Check
  {
    id: 'city-tech-check',
    type: 'default',
    position: { x: 1000, y: 800 },
    data: { label: 'City Migrated & Tech > 2?' },
    style: { width: 170 }
  },
  
  // WhatsApp Response
  {
    id: 'whatsapp-response',
    type: 'default',
    position: { x: 850, y: 900 },
    data: { label: 'Answer via WhatsApp' },
    style: { width: 150 }
  },
  
  // SMS Response
  {
    id: 'sms-response',
    type: 'default',
    position: { x: 1150, y: 900 },
    data: { label: 'Send SMS' },
    style: { width: 150 }
  },
  
  // Non-Postpaid Customer Type
  {
    id: 'nonpostpaid-check',
    type: 'default',
    position: { x: 200, y: 300 },
    data: { label: 'Is MyHome Customer?' },
    style: { width: 150 }
  },
  
  // Agency Check for MyHome
  {
    id: 'myhome-agency',
    type: 'default',
    position: { x: 200, y: 400 },
    data: { label: 'Agency Assigned?' },
    style: { width: 150 }
  },
  
  // MyHome With Agency Options
  {
    id: 'myhome-agency-options',
    type: 'default',
    position: { x: 50, y: 500 },
    data: { label: 'MyHome Agency Options' },
    style: { width: 160 }
  },
  
  // MyHome Without Agency Options
  {
    id: 'myhome-no-agency',
    type: 'default',
    position: { x: 350, y: 500 },
    data: { label: 'MyHome No Agency Options' },
    style: { width: 180 }
  },
  
  // Current Plans Flow
  {
    id: 'has-cellphone',
    type: 'default',
    position: { x: 100, y: 200 },
    data: { label: 'Customer Has Cell Phone?' },
    style: { width: 160 }
  },
  
  // Cell Phone Options
  {
    id: 'cell-options',
    type: 'default',
    position: { x: 0, y: 300 },
    data: { label: 'Send SMS Options' },
    style: { width: 150 }
  },
  
  // Get MSISDN
  {
    id: 'get-msisdn',
    type: 'default',
    position: { x: 200, y: 300 },
    data: { label: 'Get MSISDN' },
    style: { width: 150 }
  },
  
  // Transfer to Agent
  {
    id: 'transfer-agent',
    type: 'default',
    position: { x: 900, y: 200 },
    data: { label: 'Transfer to Agent\n(VDN 440022)' },
    style: { width: 180 }
  },
  
  // Technical Visit Flow
  {
    id: 'tech-visit-flow',
    type: 'default',
    position: { x: 1100, y: 200 },
    data: { label: 'Technical Visit Flow' },
    style: { width: 150 }
  },
  
  // WiFi Password Flow
  {
    id: 'wifi-password',
    type: 'default',
    position: { x: 300, y: 200 },
    data: { label: 'Waiting for VPN Connection' },
    style: { width: 180 }
  },
  
  // End Call
  {
    id: 'end-call',
    type: 'default',
    position: { x: 500, y: 1000 },
    data: { label: 'End Call & Route to Survey' },
    style: { width: 170 }
  },
  
  // Balance Type Not M
  {
    id: 'balance-not-m',
    type: 'default',
    position: { x: 400, y: 400 },
    data: { label: 'End Call & Route to Survey' },
    style: { width: 170 }
  }
];

export const edges: Edge[] = [
  // Main Menu Connections
  { id: 'main-1', source: 'main', target: 'option1' },
  { id: 'main-2', source: 'main', target: 'option2' },
  { id: 'main-3', source: 'main', target: 'option3' },
  { id: 'main-4', source: 'main', target: 'option4' },
  { id: 'main-5', source: 'main', target: 'option5' },
  { id: 'main-6', source: 'main', target: 'option6' },
  
  // Option 1 (Billing and Balance) Flow
  { id: 'billing-flow-1', source: 'option1', target: 'subscriber-type' },
  
  // Subscriber Type Check
  { 
    id: 'postpaid-yes', 
    source: 'subscriber-type', 
    target: 'balance-type',
    label: 'Yes'
  },
  { 
    id: 'postpaid-no', 
    source: 'subscriber-type', 
    target: 'nonpostpaid-check',
    label: 'No'
  },
  
  // Balance Type Check
  { 
    id: 'balance-m-yes', 
    source: 'balance-type', 
    target: 'debt-collector',
    label: 'Yes'
  },
  { 
    id: 'balance-m-no', 
    source: 'balance-type', 
    target: 'balance-not-m',
    label: 'No'
  },
  
  // Debt Collector Check
  { 
    id: 'debt-yes', 
    source: 'debt-collector', 
    target: 'agency-contact',
    label: 'Yes'
  },
  { 
    id: 'debt-no', 
    source: 'debt-collector', 
    target: 'billing-menu',
    label: 'No'
  },
  
  // Billing Menu Options
  { id: 'billing-opt1', source: 'billing-menu', target: 'billing-option1' },
  { id: 'billing-opt2', source: 'billing-menu', target: 'billing-option2' },
  { id: 'billing-opt3', source: 'billing-menu', target: 'billing-option3' },
  { id: 'billing-opt4', source: 'billing-menu', target: 'billing-option4' },
  { id: 'billing-opt0', source: 'billing-menu', target: 'billing-option0' },
  
  // Billing Option 1 (Invoice/Payment Info)
  { id: 'billing-1-flow', source: 'billing-option1', target: 'customer-equipment' },
  
  // Customer Equipment Check
  { 
    id: 'equipment-yes', 
    source: 'customer-equipment', 
    target: 'dynamic-option1',
    label: 'Yes'
  },
  { 
    id: 'equipment-no', 
    source: 'customer-equipment', 
    target: 'dynamic-option2',
    label: 'No'
  },
  
  // Billing Option 2 (Payment 2 Days Ago)
  { id: 'billing-2-flow', source: 'billing-option2', target: 'payment-status' },
  
  // Payment Status Check
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
    target: 'status-errors',
    label: 'Error'
  },
  
  // Status Errors Flow
  { id: 'errors-flow', source: 'status-errors', target: 'city-migrated' },
  
  // City Migrated Check
  { 
    id: 'city-yes', 
    source: 'city-migrated', 
    target: 'technology-check',
    label: 'Yes'
  },
  
  // Technology Check
  { 
    id: 'tech-yes', 
    source: 'technology-check', 
    target: 'whatsapp-notification',
    label: 'Yes'
  },
  
  // Billing Option 3 (Payment >3 Days Ago)
  { id: 'billing-3-flow', source: 'billing-option3', target: 'payment-3days' },
  
  // 3+ Days Payment Flow
  { id: '3days-flow', source: 'payment-3days', target: 'city-tech-check' },
  
  // City & Tech Check for >3 Days
  { 
    id: 'city-tech-yes', 
    source: 'city-tech-check', 
    target: 'whatsapp-response',
    label: 'Yes'
  },
  { 
    id: 'city-tech-no', 
    source: 'city-tech-check', 
    target: 'sms-response',
    label: 'No'
  },
  
  // Enroute and Suspended to End Call
  { id: 'enrouted-end', source: 'status-enrouted', target: 'end-call' },
  { id: 'suspended-end', source: 'status-suspended', target: 'end-call' },
  
  // Non-Postpaid Flow
  { id: 'myhome-flow', source: 'nonpostpaid-check', target: 'myhome-agency' },
  
  // MyHome Agency Check
  { 
    id: 'myhome-agency-yes', 
    source: 'myhome-agency', 
    target: 'myhome-agency-options',
    label: 'Yes'
  },
  { 
    id: 'myhome-agency-no', 
    source: 'myhome-agency', 
    target: 'myhome-no-agency',
    label: 'No'
  },
  
  // Option 2 (Current Plans) Flow
  { id: 'plans-flow', source: 'option2', target: 'has-cellphone' },
  
  // Cell Phone Check
  { 
    id: 'cellphone-yes', 
    source: 'has-cellphone', 
    target: 'cell-options',
    label: 'Yes'
  },
  { 
    id: 'cellphone-no', 
    source: 'has-cellphone', 
    target: 'get-msisdn',
    label: 'No'
  },
  
  // Option 3 (Requests & Claims)
  { id: 'requests-flow', source: 'option3', target: 'transfer-agent' },
  
  // Option 4 (Technical Visit)
  { id: 'techvisit-flow', source: 'option4', target: 'tech-visit-flow' },
  
  // Option 5 (Wi-Fi Password)
  { id: 'wifi-flow', source: 'option5', target: 'wifi-password' },
];
