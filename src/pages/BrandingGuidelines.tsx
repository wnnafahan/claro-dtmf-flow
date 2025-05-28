import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { CheckCircle, XCircle, Download, Share2, Eye, Copy } from 'lucide-react';
import { toast } from 'sonner';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

const BrandingGuidelines = () => {
  const [activeExample, setActiveExample] = useState('correct');
  const [isGeneratingPDF, setIsGeneratingPDF] = useState(false);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    toast.success('Copied to clipboard!');
  };

  const downloadPDF = async () => {
    setIsGeneratingPDF(true);
    toast.info('Generating PDF... This may take a moment.');

    try {
      // Create a new PDF document
      const pdf = new jsPDF('p', 'mm', 'a4');
      
      // Get the main content container
      const element = document.querySelector('.pdf-content');
      if (!element) {
        toast.error('Could not find content to export');
        return;
      }

      // Convert the element to canvas
      const canvas = await html2canvas(element as HTMLElement, {
        scale: 2,
        useCORS: true,
        allowTaint: true,
        logging: false,
        height: (element as HTMLElement).scrollHeight,
        width: (element as HTMLElement).scrollWidth
      });

      const imgData = canvas.toDataURL('image/png');
      
      // Calculate dimensions to fit the PDF page
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
      const imgWidth = canvas.width;
      const imgHeight = canvas.height;
      const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
      const imgX = (pdfWidth - imgWidth * ratio) / 2;
      const imgY = 0;

      // Add the image to PDF
      pdf.addImage(imgData, 'PNG', imgX, imgY, imgWidth * ratio, imgHeight * ratio);
      
      // Save the PDF
      pdf.save('brand-guidelines.pdf');
      toast.success('PDF downloaded successfully!');
    } catch (error) {
      console.error('Error generating PDF:', error);
      toast.error('Failed to generate PDF. Please try again.');
    } finally {
      setIsGeneratingPDF(false);
    }
  };

  const colorPalette = [
    {
      name: 'Primary Blue',
      hex: '#2563EB',
      rgb: 'R: 37 G: 99 B: 235',
      cmyk: 'C: 84 M: 58 Y: 0 K: 8'
    },
    {
      name: 'Secondary Navy',
      hex: '#1E293B',
      rgb: 'R: 30 G: 41 B: 59',
      cmyk: 'C: 49 M: 31 Y: 0 K: 77'
    },
    {
      name: 'Accent Green',
      hex: '#10B981',
      rgb: 'R: 16 G: 185 B: 129',
      cmyk: 'C: 91 M: 0 Y: 30 K: 27'
    }
  ];

  const logoSizes = [
    { size: '60px', description: 'Minimum size for digital use', usage: 'Small icons, favicons' },
    { size: '150px', description: 'Medium applications', usage: 'Website headers, business cards' },
    { size: '200px', description: 'Large applications', usage: 'Letterheads, presentations' },
    { size: '300px', description: 'Large format', usage: 'Banners, large print materials' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Brand Guidelines</h1>
              <p className="text-gray-600 mt-1">Comprehensive brand identity standards</p>
            </div>
            <div className="flex gap-3">
              <Button variant="outline" className="flex items-center gap-2">
                <Share2 size={16} />
                Share
              </Button>
              <Button 
                onClick={downloadPDF} 
                disabled={isGeneratingPDF}
                className="flex items-center gap-2"
              >
                <Download size={16} />
                {isGeneratingPDF ? 'Generating...' : 'Download PDF'}
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-8 pdf-content">
        <Tabs defaultValue="logo" className="w-full">
          <TabsList className="grid w-full grid-cols-5 mb-8">
            <TabsTrigger value="logo">Logo Usage</TabsTrigger>
            <TabsTrigger value="colors">Colors</TabsTrigger>
            <TabsTrigger value="typography">Typography</TabsTrigger>
            <TabsTrigger value="examples">Do's & Don'ts</TabsTrigger>
            <TabsTrigger value="assets">Assets</TabsTrigger>
          </TabsList>

          {/* Logo Usage Tab */}
          <TabsContent value="logo" className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Eye size={20} />
                  Primary Logo
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-gray-100 rounded-lg p-8 text-center mb-6">
                  <div className="w-48 h-24 bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg mx-auto flex items-center justify-center text-white font-bold text-xl">
                    YOUR LOGO
                  </div>
                </div>
                <p className="text-gray-600 text-center">
                  Always use master artwork when reproducing the logo. Never recreate under any circumstances.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Logo Sizes & Clear Space</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-4">Minimum Sizes</h4>
                    <div className="space-y-3">
                      {logoSizes.map((size, index) => (
                        <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                          <div>
                            <span className="font-medium">{size.size}</span>
                            <p className="text-sm text-gray-600">{size.description}</p>
                          </div>
                          <Badge variant="outline">{size.usage}</Badge>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-4">Clear Space Guidelines</h4>
                    <div className="bg-gray-100 p-6 rounded-lg">
                      <div className="border-2 border-dashed border-gray-400 p-8 text-center">
                        <div className="w-24 h-12 bg-blue-600 rounded mx-auto mb-4"></div>
                        <p className="text-sm text-gray-600">
                          Minimum clear space = 0.5x logo width on all sides
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Colors Tab */}
          <TabsContent value="colors" className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>Primary Color Palette</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-6">
                  {colorPalette.map((color, index) => (
                    <div key={index} className="text-center">
                      <div 
                        className="w-full h-32 rounded-lg mb-4 cursor-pointer transition-transform hover:scale-105"
                        style={{ backgroundColor: color.hex }}
                        onClick={() => copyToClipboard(color.hex)}
                      ></div>
                      <h4 className="font-semibold mb-2">{color.name}</h4>
                      <div className="space-y-1 text-sm">
                        <div className="flex justify-between">
                          <span>HEX:</span>
                          <span className="font-mono cursor-pointer hover:text-blue-600" 
                                onClick={() => copyToClipboard(color.hex)}>
                            {color.hex}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span>RGB:</span>
                          <span className="font-mono text-xs">{color.rgb}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>CMYK:</span>
                          <span className="font-mono text-xs">{color.cmyk}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                  <p className="text-sm text-yellow-800">
                    <strong>Note:</strong> Click on any color or hex code to copy it to your clipboard.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Typography Tab */}
          <TabsContent value="typography" className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>Typography Standards</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">Primary Font: Inter</h3>
                    <p className="text-gray-600 mb-4">Use for headings, body text, and general content</p>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <h4 className="text-3xl font-bold">Heading 1 - Bold</h4>
                        <h5 className="text-2xl font-semibold">Heading 2 - Semibold</h5>
                        <h6 className="text-xl font-medium">Heading 3 - Medium</h6>
                        <p className="text-base">Body text - Regular</p>
                        <p className="text-sm text-gray-600">Caption text - Small</p>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-semibold mb-2">Font Weights</h4>
                        <ul className="space-y-1 text-sm">
                          <li>Light: 300</li>
                          <li>Regular: 400</li>
                          <li>Medium: 500</li>
                          <li>Semibold: 600</li>
                          <li>Bold: 700</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Examples Tab */}
          <TabsContent value="examples" className="space-y-8">
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-green-200">
                <CardHeader className="bg-green-50">
                  <CardTitle className="flex items-center gap-2 text-green-800">
                    <CheckCircle size={20} />
                    Correct Usage
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="space-y-4">
                    <div className="bg-white p-6 border rounded-lg text-center">
                      <div className="w-32 h-16 bg-blue-600 rounded mx-auto mb-2"></div>
                      <p className="text-sm text-green-600">✓ Proper proportions maintained</p>
                    </div>
                    <div className="bg-gray-100 p-6 border rounded-lg text-center">
                      <div className="w-32 h-16 bg-blue-600 rounded mx-auto mb-2"></div>
                      <p className="text-sm text-green-600">✓ Good contrast on light background</p>
                    </div>
                    <div className="bg-white p-6 border rounded-lg text-center">
                      <div className="p-4 border-2 border-dashed border-gray-300">
                        <div className="w-24 h-12 bg-blue-600 rounded mx-auto"></div>
                      </div>
                      <p className="text-sm text-green-600 mt-2">✓ Adequate clear space</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-red-200">
                <CardHeader className="bg-red-50">
                  <CardTitle className="flex items-center gap-2 text-red-800">
                    <XCircle size={20} />
                    Incorrect Usage
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="space-y-4">
                    <div className="bg-white p-6 border rounded-lg text-center">
                      <div className="w-40 h-12 bg-blue-600 rounded mx-auto mb-2"></div>
                      <p className="text-sm text-red-600">✗ Stretched/distorted proportions</p>
                    </div>
                    <div className="bg-blue-900 p-6 border rounded-lg text-center">
                      <div className="w-32 h-16 bg-blue-600 rounded mx-auto mb-2"></div>
                      <p className="text-sm text-red-600">✗ Poor contrast - hard to read</p>
                    </div>
                    <div className="bg-white p-6 border rounded-lg text-center">
                      <div className="w-24 h-12 bg-blue-600 rounded mx-auto border-2 border-gray-400"></div>
                      <p className="text-sm text-red-600 mt-2">✗ Added border/outline</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Assets Tab */}
          <TabsContent value="assets" className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>Brand Assets Download</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {[
                    { name: 'Logo Pack (PNG)', size: '2.3 MB', format: 'ZIP' },
                    { name: 'Logo Vector (SVG)', size: '156 KB', format: 'SVG' },
                    { name: 'Color Palette', size: '45 KB', format: 'ASE' },
                    { name: 'Brand Guidelines PDF', size: '1.8 MB', format: 'PDF' },
                    { name: 'Social Media Kit', size: '5.2 MB', format: 'ZIP' },
                    { name: 'Presentation Template', size: '3.1 MB', format: 'PPTX' }
                  ].map((asset, index) => (
                    <div key={index} className="border rounded-lg p-4 hover:bg-gray-50 transition-colors">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-medium">{asset.name}</h4>
                        <Badge variant="outline">{asset.format}</Badge>
                      </div>
                      <p className="text-sm text-gray-600 mb-3">{asset.size}</p>
                      <Button size="sm" className="w-full">
                        <Download size={14} className="mr-2" />
                        Download
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-2">For Brand Guidelines Questions:</h4>
                    <p className="text-gray-600">brand@company.com</p>
                    <p className="text-gray-600">+1 (555) 123-4567</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Asset Requests:</h4>
                    <p className="text-gray-600">assets@company.com</p>
                    <p className="text-gray-600">Response within 24 hours</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default BrandingGuidelines;
