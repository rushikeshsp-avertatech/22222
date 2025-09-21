import React, { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Bell, Calendar, FileText, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const updates = [
  {
    id: 1,
    type: 'notice',
    priority: 'high',
    title: 'योजनेसाठी अर्ज करण्याची अंतिम मुदत वाढवण्यात आली',
    titleEn: 'Application deadline extended for the scheme',
    date: '2024-01-15',
    description: 'गोसंवर्धन योजनेसाठी अर्ज करण्याची अंतिम मुदत 31 मार्च 2025 पर्यंत वाढवण्यात आली आहे.',
    category: 'Deadline Extension'
  },
  {
    id: 2,
    type: 'announcement',
    priority: 'medium',
    title: 'नवीन डेअरी कॅटल सप्लाय केंद्र सुरू',
    titleEn: 'New Dairy Cattle Supply Centers launched',
    date: '2024-01-12',
    description: 'पुणे आणि नाशिक जिल्ह्यात नवीन डेअरी कॅटल सप्लाय केंद्रे सुरू करण्यात आली आहेत.',
    category: 'New Centers'
  },
  {
    id: 3,
    type: 'schedule',
    priority: 'medium',
    title: 'आयव्हीएफ कार्यक्रमाचे वेळापत्रक जाहीर',
    titleEn: 'IVF Program schedule announced',
    date: '2024-01-10',
    description: 'फेब्रुवारी 2024 मध्ये आयव्हीएफ गर्भित वासराची वितरणाचे वेळापत्रक जाहीर करण्यात आले.',
    category: 'Schedule'
  },
  {
    id: 4,
    type: 'training',
    priority: 'low',
    title: 'प्रशिक्षण कार्यक्रमाची नोंदणी सुरू',
    titleEn: 'Training program registration open',
    date: '2024-01-08',
    description: 'आधुनिक पशुसंवर्धन तंत्रांच्या प्रशिक्षण कार्यक्रमासाठी नोंदणी सुरू आहे.',
    category: 'Training'
  },
  {
    id: 5,
    type: 'guidelines',
    priority: 'medium',
    title: 'नवीन मार्गदर्शक तत्त्वे अपडेट',
    titleEn: 'New guidelines updated',
    date: '2024-01-05',
    description: 'योजनेच्या नवीन मार्गदर्शक तत्त्वे आणि GR क्रमांक 2024/01/05 अपडेट करण्यात आले.',
    category: 'Guidelines'
  }
];

export function UpdatesTicker() {
  const [currentUpdate, setCurrentUpdate] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentUpdate((prev) => (prev + 1) % updates.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'bg-destructive text-destructive-foreground';
      case 'medium': return 'bg-warning text-warning-foreground';
      case 'low': return 'bg-info text-info-foreground';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'notice': return <Bell className="h-4 w-4" />;
      case 'schedule': return <Calendar className="h-4 w-4" />;
      case 'guidelines': return <FileText className="h-4 w-4" />;
      default: return <Bell className="h-4 w-4" />;
    }
  };

  return (
    <section className="py-12 bg-secondary/10">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-2xl font-bold mb-2">
                नवीनतम अपडेट्स
              </h2>
              <p className="text-muted-foreground">
                Latest Updates & Announcements
              </p>
            </div>
            <Button variant="outline" size="sm">
              View All Updates
              <ArrowRight className="h-4 w-4 ml-1" />
            </Button>
          </div>

          {/* Ticker Display */}
          <div className="bg-primary/5 border-l-4 border-primary p-4 rounded-lg mb-6">
            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0 p-2 bg-primary/10 rounded-lg text-primary">
                {getTypeIcon(updates[currentUpdate].type)}
              </div>
              <div className="flex-1">
                <div className="flex items-center space-x-2 mb-2">
                  <Badge 
                    className={cn("text-xs", getPriorityColor(updates[currentUpdate].priority))}
                  >
                    {updates[currentUpdate].category}
                  </Badge>
                  <span className="text-xs text-muted-foreground">
                    {new Date(updates[currentUpdate].date).toLocaleDateString('en-IN')}
                  </span>
                </div>
                <h3 className="font-semibold mb-1">
                  {updates[currentUpdate].title}
                </h3>
                <p className="text-sm text-muted-foreground mb-1">
                  {updates[currentUpdate].titleEn}
                </p>
                <p className="text-sm">
                  {updates[currentUpdate].description}
                </p>
              </div>
            </div>
          </div>

          {/* Update Indicators */}
          <div className="flex justify-center space-x-2 mb-8">
            {updates.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentUpdate(index)}
                className={cn(
                  "w-2 h-2 rounded-full transition-all duration-300",
                  index === currentUpdate 
                    ? "bg-primary scale-125" 
                    : "bg-muted hover:bg-primary/50"
                )}
                aria-label={`Go to update ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Recent Updates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {updates.slice(0, 3).map((update) => (
            <Card key={update.id} className="p-4 hover:shadow-md transition-shadow">
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 p-1.5 bg-muted rounded text-muted-foreground">
                  {getTypeIcon(update.type)}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center space-x-2 mb-1">
                    <Badge variant="secondary" className="text-xs">
                      {update.category}
                    </Badge>
                  </div>
                  <h4 className="font-medium text-sm leading-tight mb-1">
                    {update.title}
                  </h4>
                  <p className="text-xs text-muted-foreground">
                    {new Date(update.date).toLocaleDateString('en-IN')}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}