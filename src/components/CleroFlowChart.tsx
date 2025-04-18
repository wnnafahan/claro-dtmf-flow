
import React from 'react';

const CleroFlowChart = () => {
  return (
    <div className="min-h-screen bg-white p-8">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Main Title */}
        <h1 className="text-3xl font-semibold text-center text-gray-800 mb-12">
          "Welcome to Claro! You're Our Priority"
        </h1>

        {/* Main Menu */}
        <div className="flex justify-center">
          <div className="bg-blue-50 p-6 rounded-lg shadow-sm w-full max-w-2xl">
            <h2 className="text-xl font-medium text-gray-700 mb-4">Main Menu Options</h2>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-center">
                <span className="bg-blue-100 px-2 py-1 rounded mr-3">1</span>
                <span>Billing and Balance</span>
              </li>
              <li className="flex items-center">
                <span className="bg-blue-100 px-2 py-1 rounded mr-3">2</span>
                <span>Know Your Current Plans</span>
              </li>
              <li className="flex items-center">
                <span className="bg-blue-100 px-2 py-1 rounded mr-3">3</span>
                <span>Requests, Complaints and Claims</span>
              </li>
              <li className="flex items-center">
                <span className="bg-blue-100 px-2 py-1 rounded mr-3">4</span>
                <span>Technical Visit</span>
              </li>
              <li className="flex items-center">
                <span className="bg-blue-100 px-2 py-1 rounded mr-3">5</span>
                <span>Wi-Fi Password</span>
              </li>
              <li className="flex items-center">
                <span className="bg-blue-100 px-2 py-1 rounded mr-3">9</span>
                <span>Repeat Menu</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Billing and Balance Flow */}
        <div className="mt-12 space-y-6">
          <h3 className="text-xl font-medium text-gray-700">Option 1: Billing and Balance Flow</h3>
          
          {/* Postpaid Section */}
          <div className="bg-gray-50 p-6 rounded-lg">
            <h4 className="text-lg font-medium text-gray-600 mb-4">Postpaid Customer Flow</h4>
            
            {/* Debt Collector Agency Check */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-4 rounded shadow-sm">
                <h5 className="font-medium text-gray-600 mb-2">With Debt Collector Agency</h5>
                <p className="text-sm text-gray-500">Play audio and send SMS with agency contact</p>
                <div className="mt-2 text-sm text-gray-400">
                  Option 9: Return to main menu
                </div>
              </div>
              
              <div className="bg-white p-4 rounded shadow-sm">
                <h5 className="font-medium text-gray-600 mb-2">Without Debt Collector Agency</h5>
                <ul className="text-sm text-gray-500 space-y-2">
                  <li>1. Invoice information/payment link</li>
                  <li>2. Recent payment (2 days)</li>
                  <li>3. Older payment (3+ days)</li>
                  <li>4. Repeat information</li>
                  <li>0. Return to main menu</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Payment Section */}
          <div className="bg-gray-50 p-6 rounded-lg">
            <h4 className="text-lg font-medium text-gray-600 mb-4">Payment Options Flow</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-4 rounded shadow-sm">
                <h5 className="font-medium text-gray-600 mb-2">With Equipment Balance</h5>
                <ul className="text-sm text-gray-500 space-y-2">
                  <li>1. Payment references</li>
                  <li>2. Make payment</li>
                  <li>0. Main menu</li>
                  <li>9. Repeat menu</li>
                </ul>
              </div>
              
              <div className="bg-white p-4 rounded shadow-sm">
                <h5 className="font-medium text-gray-600 mb-2">Without Equipment Balance</h5>
                <ul className="text-sm text-gray-500 space-y-2">
                  <li>1. Make payment</li>
                  <li>0. Main menu</li>
                  <li>9. Repeat menu</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Payment Verification */}
          <div className="bg-gray-50 p-6 rounded-lg">
            <h4 className="text-lg font-medium text-gray-600 mb-4">Payment Verification Status</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-4 rounded shadow-sm">
                <h5 className="font-medium text-gray-600 mb-2">Enrouted</h5>
                <p className="text-sm text-gray-500">Play status message</p>
                <div className="mt-2 text-sm text-gray-400">
                  Options: 9 (Main menu) or 0 (End call)
                </div>
              </div>
              
              <div className="bg-white p-4 rounded shadow-sm">
                <h5 className="font-medium text-gray-600 mb-2">Suspended</h5>
                <p className="text-sm text-gray-500">Send reconnection SMS and play audio</p>
                <div className="mt-2 text-sm text-gray-400">
                  Options: 9 (Main menu) or 0 (End call)
                </div>
              </div>
              
              <div className="bg-white p-4 rounded shadow-sm">
                <h5 className="font-medium text-gray-600 mb-2">Errors</h5>
                <p className="text-sm text-gray-500">Check postpaid city migration</p>
                <p className="text-sm text-gray-400">Send WhatsApp if Technology {'>'} 2</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CleroFlowChart;
