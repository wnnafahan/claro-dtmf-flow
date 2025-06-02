
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from '@/components/ui/table';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line,
  Area,
  AreaChart
} from 'recharts';
import { 
  ChartContainer, 
  ChartTooltip, 
  ChartTooltipContent 
} from '@/components/ui/chart';
import { 
  Activity, 
  TrendingUp, 
  Users, 
  Clock, 
  CheckCircle, 
  XCircle, 
  Phone, 
  AlertCircle,
  Download,
  RefreshCw,
  Calendar,
  Filter
} from 'lucide-react';

const ClaroReports = () => {
  const [selectedTimeframe, setSelectedTimeframe] = useState('today');
  const [isLiveMode, setIsLiveMode] = useState(true);

  // Sample data for charts
  const intentAccuracyData = [
    { category: 'Billing & Balance', accuracy: 96.1, color: '#2563EB' },
    { category: 'Technical Support', accuracy: 91.3, color: '#10B981' },
    { category: 'Plan Information', accuracy: 95.7, color: '#F59E0B' },
    { category: 'PQR (Complaints)', accuracy: 88.9, color: '#EF4444' },
    { category: 'Wi-Fi Password', accuracy: 97.2, color: '#8B5CF6' }
  ];

  const callDistributionData = [
    { name: 'Billing & Balance', value: 42.3, calls: 1205, color: '#2563EB' },
    { name: 'Technical Support', value: 23.1, calls: 658, color: '#10B981' },
    { name: 'Plan Information', value: 18.7, calls: 532, color: '#F59E0B' },
    { name: 'PQR/Complaints', value: 11.2, calls: 319, color: '#EF4444' },
    { name: 'Wi-Fi Password', value: 4.7, calls: 134, color: '#8B5CF6' }
  ];

  const hourlyTrendData = [
    { hour: '08:00', calls: 145, accuracy: 94.2 },
    { hour: '09:00', calls: 287, accuracy: 95.1 },
    { hour: '10:00', calls: 356, accuracy: 93.8 },
    { hour: '11:00', calls: 398, accuracy: 94.7 },
    { hour: '12:00', calls: 334, accuracy: 92.9 },
    { hour: '13:00', calls: 298, accuracy: 95.3 },
    { hour: '14:00', calls: 412, accuracy: 94.1 },
    { hour: '15:00', calls: 367, accuracy: 93.6 },
    { hour: '16:00', calls: 289, accuracy: 95.8 },
    { hour: '17:00', calls: 198, accuracy: 94.4 }
  ];

  const recentCallsData = [
    { time: '14:32:15', msisdn: '573XXX...XX', intent: 'Balance Check', route: 'DTMF 1', status: 'success', confidence: 0.95 },
    { time: '14:31:47', msisdn: '573XXX...XX', intent: 'Tech Support', route: 'DTMF 4', status: 'success', confidence: 0.89 },
    { time: '14:30:22', msisdn: '573XXX...XX', intent: 'Plan Info', route: 'DTMF 2', status: 'success', confidence: 0.92 },
    { time: '14:29:38', msisdn: '573XXX...XX', intent: 'Complaint', route: 'Agent', status: 'success', confidence: 0.87 },
    { time: '14:28:55', msisdn: '573XXX...XX', intent: 'Wi-Fi Password', route: 'DTMF 3', status: 'success', confidence: 0.96 },
    { time: '14:27:12', msisdn: '573XXX...XX', intent: 'Unrecognized', route: 'Clarification', status: 'retry', confidence: 0.23 }
  ];

  const speechRecognitionData = [
    { quality: 'Excellent (SNR >20dB)', accuracy: 97.1, percentage: 35 },
    { quality: 'Good (SNR 15-20dB)', accuracy: 93.6, percentage: 28 },
    { quality: 'Fair (SNR 10-15dB)', accuracy: 87.2, percentage: 24 },
    { quality: 'Poor (SNR <10dB)', accuracy: 74.8, percentage: 13 }
  ];

  const comparisonData = [
    { metric: 'Avg Call Duration', traditional: '185s', aiPowered: '142s', improvement: '-23.2%' },
    { metric: 'Misrouting Rate', traditional: '18.3%', aiPowered: '6.7%', improvement: '-63.4%' },
    { metric: 'Customer Satisfaction', traditional: '3.2/5', aiPowered: '4.1/5', improvement: '+28.1%' },
    { metric: 'Agent Transfer Rate', traditional: '34.7%', aiPowered: '22.1%', improvement: '-36.3%' },
    { metric: 'Call Abandonment', traditional: '12.8%', aiPowered: '7.4%', improvement: '-42.2%' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                Claro Colombia: Conversational IVR - Reports
              </h1>
              <p className="text-gray-600 mt-1">
                Real-time analytics and performance monitoring
              </p>
            </div>
            <div className="flex items-center gap-3">
              <Badge variant={isLiveMode ? "default" : "secondary"} className="flex items-center gap-1">
                <div className={`w-2 h-2 rounded-full ${isLiveMode ? 'bg-green-400' : 'bg-gray-400'}`}></div>
                {isLiveMode ? 'LIVE' : 'OFFLINE'}
              </Badge>
              <Button variant="outline" size="sm">
                <Calendar className="w-4 h-4 mr-2" />
                {selectedTimeframe === 'today' ? 'Today' : 'Last 7 Days'}
              </Button>
              <Button variant="outline" size="sm">
                <Filter className="w-4 h-4 mr-2" />
                Filters
              </Button>
              <Button size="sm">
                <Download className="w-4 h-4 mr-2" />
                Export
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">
        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="grid w-full grid-cols-6 mb-8">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="intent">Intent Analysis</TabsTrigger>
            <TabsTrigger value="performance">Performance</TabsTrigger>
            <TabsTrigger value="customer">Customer Experience</TabsTrigger>
            <TabsTrigger value="technical">Technical Metrics</TabsTrigger>
            <TabsTrigger value="comparison">AI vs Traditional</TabsTrigger>
          </TabsList>

          {/* Overview Dashboard */}
          <TabsContent value="overview" className="space-y-6">
            {/* KPI Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Intent Accuracy</CardTitle>
                  <TrendingUp className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-green-600">94.2%</div>
                  <p className="text-xs text-muted-foreground">+2.1% from yesterday</p>
                  <Progress value={94.2} className="mt-2" />
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Calls Processed</CardTitle>
                  <Phone className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">2,847</div>
                  <p className="text-xs text-muted-foreground">23 active now</p>
                  <div className="text-sm text-green-600 mt-1">95.9% success rate</div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Avg Response Time</CardTitle>
                  <Clock className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">28.3s</div>
                  <p className="text-xs text-muted-foreground">-5.2s from target</p>
                  <div className="text-sm text-green-600 mt-1">Within SLA</div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">System Health</CardTitle>
                  <Activity className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-green-600">99.8%</div>
                  <p className="text-xs text-muted-foreground">Uptime today</p>
                  <div className="text-sm text-blue-600 mt-1">All services online</div>
                </CardContent>
              </Card>
            </div>

            {/* Main Charts */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Intent Distribution */}
              <Card>
                <CardHeader>
                  <CardTitle>Intent Distribution - Today</CardTitle>
                </CardHeader>
                <CardContent>
                  <ChartContainer
                    config={{
                      calls: { label: "Calls", color: "#2563EB" }
                    }}
                    className="h-[300px]"
                  >
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={callDistributionData}
                          cx="50%"
                          cy="50%"
                          innerRadius={60}
                          outerRadius={120}
                          paddingAngle={5}
                          dataKey="value"
                        >
                          {callDistributionData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                          ))}
                        </Pie>
                        <ChartTooltip content={<ChartTooltipContent />} />
                      </PieChart>
                    </ResponsiveContainer>
                  </ChartContainer>
                  <div className="mt-4 space-y-2">
                    {callDistributionData.map((item, index) => (
                      <div key={index} className="flex items-center justify-between text-sm">
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }}></div>
                          <span>{item.name}</span>
                        </div>
                        <span className="font-medium">{item.value}% ({item.calls})</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Hourly Trends */}
              <Card>
                <CardHeader>
                  <CardTitle>Hourly Call Volume & Accuracy</CardTitle>
                </CardHeader>
                <CardContent>
                  <ChartContainer
                    config={{
                      calls: { label: "Calls", color: "#2563EB" },
                      accuracy: { label: "Accuracy %", color: "#10B981" }
                    }}
                    className="h-[300px]"
                  >
                    <ResponsiveContainer width="100%" height="100%">
                      <AreaChart data={hourlyTrendData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="hour" />
                        <YAxis yAxisId="left" />
                        <YAxis yAxisId="right" orientation="right" />
                        <ChartTooltip content={<ChartTooltipContent />} />
                        <Area
                          yAxisId="left"
                          type="monotone"
                          dataKey="calls"
                          stackId="1"
                          stroke="#2563EB"
                          fill="#2563EB"
                          fillOpacity={0.6}
                        />
                        <Line
                          yAxisId="right"
                          type="monotone"
                          dataKey="accuracy"
                          stroke="#10B981"
                          strokeWidth={2}
                        />
                      </AreaChart>
                    </ResponsiveContainer>
                  </ChartContainer>
                </CardContent>
              </Card>
            </div>

            {/* Recent Activity */}
            <Card>
              <CardHeader>
                <CardTitle>Recent Call Activity</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Time</TableHead>
                      <TableHead>MSISDN</TableHead>
                      <TableHead>Intent</TableHead>
                      <TableHead>Route</TableHead>
                      <TableHead>Confidence</TableHead>
                      <TableHead>Status</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {recentCallsData.map((call, index) => (
                      <TableRow key={index}>
                        <TableCell className="font-mono text-sm">{call.time}</TableCell>
                        <TableCell>{call.msisdn}</TableCell>
                        <TableCell>{call.intent}</TableCell>
                        <TableCell>
                          <Badge variant="outline">{call.route}</Badge>
                        </TableCell>
                        <TableCell>
                          <span className={`font-mono ${call.confidence > 0.8 ? 'text-green-600' : 'text-orange-600'}`}>
                            {(call.confidence * 100).toFixed(1)}%
                          </span>
                        </TableCell>
                        <TableCell>
                          {call.status === 'success' ? (
                            <CheckCircle className="h-4 w-4 text-green-600" />
                          ) : (
                            <AlertCircle className="h-4 w-4 text-orange-600" />
                          )}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Intent Analysis */}
          <TabsContent value="intent" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Intent Recognition Accuracy by Category</CardTitle>
              </CardHeader>
              <CardContent>
                <ChartContainer
                  config={{
                    accuracy: { label: "Accuracy %", color: "#2563EB" }
                  }}
                  className="h-[400px]"
                >
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={intentAccuracyData} layout="horizontal">
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis type="number" domain={[80, 100]} />
                      <YAxis dataKey="category" type="category" width={120} />
                      <ChartTooltip content={<ChartTooltipContent />} />
                      <Bar dataKey="accuracy" fill="#2563EB" />
                    </BarChart>
                  </ResponsiveContainer>
                </ChartContainer>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Speech Recognition Performance</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {speechRecognitionData.map((item, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium">{item.quality}</span>
                        <span className="text-sm text-gray-600">{item.accuracy}%</span>
                      </div>
                      <Progress value={item.accuracy} className="h-2" />
                      <div className="text-xs text-gray-500">{item.percentage}% of calls</div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Call Flow Efficiency</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                      <span className="text-sm font-medium">Successfully Routed</span>
                      <span className="text-lg font-bold text-green-600">95.9%</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                      <span className="text-sm font-medium">Avg. Interaction Time</span>
                      <span className="text-lg font-bold text-blue-600">28.3s</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-orange-50 rounded-lg">
                      <span className="text-sm font-medium">Calls Requiring Retry</span>
                      <span className="text-lg font-bold text-orange-600">11.0%</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-red-50 rounded-lg">
                      <span className="text-sm font-medium">Call Abandonment</span>
                      <span className="text-lg font-bold text-red-600">3.1%</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* AI vs Traditional Comparison */}
          <TabsContent value="comparison" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>AI-Powered Flow vs Traditional DTMF Performance</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Metric</TableHead>
                      <TableHead>Traditional DTMF</TableHead>
                      <TableHead>AI-Powered Flow</TableHead>
                      <TableHead>Improvement</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {comparisonData.map((row, index) => (
                      <TableRow key={index}>
                        <TableCell className="font-medium">{row.metric}</TableCell>
                        <TableCell>{row.traditional}</TableCell>
                        <TableCell>{row.aiPowered}</TableCell>
                        <TableCell>
                          <Badge 
                            variant={row.improvement.startsWith('+') ? "default" : "destructive"}
                            className={row.improvement.startsWith('+') ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}
                          >
                            {row.improvement}
                          </Badge>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Placeholder tabs for other sections */}
          <TabsContent value="performance">
            <Card>
              <CardHeader>
                <CardTitle>Performance Metrics</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Detailed performance analytics will be displayed here.</p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="customer">
            <Card>
              <CardHeader>
                <CardTitle>Customer Experience Analytics</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Customer experience metrics and satisfaction data will be shown here.</p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="technical">
            <Card>
              <CardHeader>
                <CardTitle>Technical System Metrics</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Technical performance data, API metrics, and system health information will be displayed here.</p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default ClaroReports;
