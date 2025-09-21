import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  FileText, 
  Download, 
  Eye, 
  AlertTriangle,
  CheckCircle,
  Calendar,
  FileSpreadsheet,
  FileImage
} from 'lucide-react';

const downloads = [
  {
    id: 1,
    title: 'गोसंवर्धन योजना मार्गदर्शक तत्त्वे',
    titleEn: 'Cattle Development Scheme Guidelines',
    type: 'PDF',
    size: '2.5 MB',
    date: '2024-01-15',
    accessible: true,
    language: 'Bilingual',
    category: 'Guidelines',
    icon: <FileText className="h-5 w-5" />
  },
  {
    id: 2,
    title: 'GR क्रमांक AHD/2024/01/001',
    titleEn: 'Government Resolution No. AHD/2024/01/001',
    type: 'PDF',
    size: '1.8 MB',
    date: '2024-01-12',
    accessible: true,
    language: 'Marathi/English',
    category: 'Government Orders',
    icon: <FileText className="h-5 w-5" />
  },
  {
    id: 3,
    title: 'अर्जाचा नमुना - डेअरी कॅटल सप्लाय',
    titleEn: 'Application Form - Dairy Cattle Supply',
    type: 'PDF',
    size: '450 KB',
    date: '2024-01-10',
    accessible: false,
    language: 'Bilingual',
    category: 'Application Forms',
    icon: <FileText className="h-5 w-5" />
  },
  {
    id: 4,
    title: 'दस्तऐवजांची चेकलिस्ट',
    titleEn: 'Documents Checklist',
    type: 'Excel',
    size: '125 KB',
    date: '2024-01-08',
    accessible: true,
    language: 'Bilingual',
    category: 'Checklists',
    icon: <FileSpreadsheet className="h-5 w-5" />
  },
  {
    id: 5,
    title: 'जिल्हानिहाय कोटा वितरण',
    titleEn: 'District-wise Quota Distribution',
    type: 'PDF',
    size: '900 KB',
    date: '2024-01-05',
    accessible: true,
    language: 'Bilingual',
    category: 'Quotas & Targets',
    icon: <FileText className="h-5 w-5" />
  },
  {
    id: 6,
    title: 'प्रशिक्षण कार्यक्रमाचे फोटो',
    titleEn: 'Training Program Photos',
    type: 'ZIP',
    size: '15.2 MB',
    date: '2024-01-03',
    accessible: true,
    language: 'Visual',
    category: 'Media',
    icon: <FileImage className="h-5 w-5" />
  }
];

const categories = [
  'All Categories',
  'Guidelines',
  'Government Orders',
  'Application Forms',
  'Checklists',
  'Quotas & Targets',
  'Media'
];

export function DownloadsSection() {
  const [selectedCategory, setSelectedCategory] = React.useState('All Categories');

  const filteredDownloads = selectedCategory === 'All Categories' 
    ? downloads 
    : downloads.filter(download => download.category === selectedCategory);

  const getFileTypeColor = (type: string) => {
    switch (type.toLowerCase()) {
      case 'pdf': return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300';
      case 'excel': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300';
      case 'zip': return 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300';
    }
  };

  return (
    <section id="downloads" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            डाउनलोड्स
          </h2>
          <p className="text-xl text-muted-foreground mb-2">
            Downloads & Documents
          </p>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            योजनेशी संबंधित सर्व महत्वाचे दस्तऐवज, मार्गदर्शक तत्त्वे आणि अर्जाचे नमुने डाउनलोड करा
            <br />
            Download all important documents, guidelines, and application forms related to the scheme
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory(category)}
              className="mb-2"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Downloads Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredDownloads.map((download) => (
            <Card key={download.id} className="gov-card h-full">
              <CardHeader className="pb-3">
                <div className="flex items-start space-x-3">
                  <div className="p-2 bg-primary/10 rounded-lg text-primary">
                    {download.icon}
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-base leading-tight mb-2">
                      {download.title}
                    </CardTitle>
                    <p className="text-sm text-muted-foreground">
                      {download.titleEn}
                    </p>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="pt-0">
                {/* File Details */}
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge className={getFileTypeColor(download.type)}>
                    {download.type}
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    {download.size}
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    {download.language}
                  </Badge>
                </div>

                {/* Date and Accessibility */}
                <div className="flex items-center space-x-2 mb-4 text-xs text-muted-foreground">
                  <Calendar className="h-3 w-3" />
                  <span>Updated: {new Date(download.date).toLocaleDateString('en-IN')}</span>
                </div>

                {/* Accessibility Notice */}
                <div className="mb-4">
                  {download.accessible ? (
                    <div className="flex items-center space-x-2 text-xs text-success">
                      <CheckCircle className="h-3 w-3" />
                      <span>Screen reader friendly</span>
                    </div>
                  ) : (
                    <div className="bg-warning/10 border border-warning/20 rounded p-2 mb-2">
                      <div className="flex items-center space-x-2 text-xs text-warning mb-1">
                        <AlertTriangle className="h-3 w-3" />
                        <span>Not accessible</span>
                      </div>
                      <p className="text-xs text-muted-foreground">
                        HTML version available below
                      </p>
                    </div>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2">
                  <Button size="sm" className="flex-1">
                    <Download className="h-3 w-3 mr-1" />
                    Download
                  </Button>
                  <Button variant="outline" size="sm">
                    <Eye className="h-3 w-3" />
                  </Button>
                </div>

                {/* Alternative Format */}
                {!download.accessible && (
                  <Button 
                    variant="link" 
                    size="sm" 
                    className="mt-2 text-xs p-0 h-auto"
                  >
                    View HTML version (Accessible)
                  </Button>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Help Text */}
        <div className="mt-12 text-center">
          <Card className="max-w-4xl mx-auto p-6 bg-info/5 border-info/20">
            <div className="flex items-start space-x-3">
              <AlertTriangle className="h-5 w-5 text-info mt-0.5" />
              <div className="text-left">
                <h3 className="font-semibold mb-2">Document Accessibility Notice</h3>
                <p className="text-sm text-muted-foreground mb-2">
                  सर्व PDF दस्तऐवज स्क्रीन रीडर सुसंगत नाहीत. जर तुम्हाला प्रवेशयोग्य स्वरूपाची आवश्यकता असेल तर कृपया HTML आवृत्ती वापरा किंवा आमच्याशी संपर्क साधा.
                </p>
                <p className="text-sm text-muted-foreground">
                  Not all PDF documents are screen reader compatible. If you need an accessible format, please use the HTML version or contact us.
                </p>
                <div className="mt-3">
                  <Button variant="outline" size="sm">
                    Contact for Alternative Formats
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}