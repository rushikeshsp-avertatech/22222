import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { 
  BarChart3, 
  TrendingUp, 
  Users, 
  IndianRupee, 
  MapPin, 
  Calendar,
  Download,
  Eye
} from 'lucide-react';

export function DashboardSection() {
  const statistics = [
    {
      title: 'एकूण अर्ज संख्या',
      titleEn: 'Total Applications',
      value: '47,832',
      change: '+12%',
      changeType: 'positive',
      icon: <Users className="h-5 w-5" />
    },
    {
      title: 'मंजूर अर्ज',
      titleEn: 'Approved Applications',
      value: '38,465',
      change: '+8%',
      changeType: 'positive',
      icon: <TrendingUp className="h-5 w-5" />
    },
    {
      title: 'वितरीत अनुदान',
      titleEn: 'Subsidy Disbursed',
      value: '₹142.8 कोटी',
      change: '43.5%',
      changeType: 'neutral',
      icon: <IndianRupee className="h-5 w-5" />
    },
    {
      title: 'प्रशिक्षित शेतकरी',
      titleEn: 'Trained Farmers',
      value: '12,450',
      change: '+15%',
      changeType: 'positive',
      icon: <Calendar className="h-5 w-5" />
    }
  ];

  const componentWiseData = [
    { component: 'दुधाळ जनावरे वाटप', applications: 18500, approved: 15200, percentage: 82 },
    { component: 'IVF कालवडी वाटप', applications: 2800, approved: 2100, percentage: 75 },
    { component: 'प्रजनन पूरक खाद्य', applications: 8900, approved: 7650, percentage: 86 },
    { component: 'फॅट/SNF वाढविणारे', applications: 5600, approved: 4800, percentage: 86 },
    { component: 'चारा बियाणे वाटप', applications: 12300, approved: 10500, percentage: 85 }
  ];

  const districtWiseTop5 = [
    { district: 'नागपूर', applications: 5420, approved: 4580 },
    { district: 'अमरावती', applications: 4890, approved: 4120 },
    { district: 'अकोला', applications: 4560, approved: 3890 },
    { district: 'औरंगाबाद', applications: 4230, approved: 3650 },
    { district: 'लातूर', applications: 3980, approved: 3420 }
  ];

  return (
    <section id="dashboard" className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            डॅशबोर्ड व आकडेवारी
          </h2>
          <p className="text-xl text-muted-foreground mb-2">
            Dashboard & Analytics
          </p>
          <p className="text-muted-foreground max-w-4xl mx-auto">
            दुग्ध विकास प्रकल्प टप्पा 2 ची वास्तविक वेळेतील प्रगती व आकडेवारी
            <br />
            Real-time progress and statistics of Dugdh Vikas Project Phase 2
          </p>
        </div>

        {/* Key Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {statistics.map((stat, index) => (
            <Card key={index} className="hover:shadow-md transition-shadow">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  {stat.title}
                </CardTitle>
                <div className="p-1 bg-primary/10 rounded text-primary">
                  {stat.icon}
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-primary">
                  {stat.value}
                </div>
                <p className="text-xs text-muted-foreground mb-1">
                  {stat.titleEn}
                </p>
                <div className="flex items-center">
                  <Badge 
                    variant={stat.changeType === 'positive' ? 'default' : 'secondary'} 
                    className="text-xs"
                  >
                    {stat.change}
                  </Badge>
                  <span className="text-xs text-muted-foreground ml-2">
                    मागील महिन्यापेक्षा
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Component-wise Progress */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BarChart3 className="h-5 w-5 text-primary" />
                घटकनिहाय प्रगती / Component-wise Progress
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {componentWiseData.map((item, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="font-medium">{item.component}</span>
                      <span className="text-muted-foreground">
                        {item.approved.toLocaleString()} / {item.applications.toLocaleString()}
                      </span>
                    </div>
                    <Progress value={item.percentage} className="h-2" />
                    <div className="flex justify-between text-xs text-muted-foreground">
                      <span>मंजूर दर: {item.percentage}%</span>
                      <span>प्रलंबित: {(item.applications - item.approved).toLocaleString()}</span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* District-wise Top 5 */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-primary" />
                जिल्हानिहाय अग्रणी 5 / Top 5 Districts
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {districtWiseTop5.map((district, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                        <span className="text-sm font-bold text-primary">#{index + 1}</span>
                      </div>
                      <div>
                        <p className="font-medium">{district.district}</p>
                        <p className="text-sm text-muted-foreground">
                          मंजूर: {district.approved.toLocaleString()}
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-primary">
                        {district.applications.toLocaleString()}
                      </p>
                      <p className="text-xs text-muted-foreground">एकूण अर्ज</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Action Buttons */}
        <div className="text-center">
          <div className="flex justify-center gap-4 mb-4">
            <button className="flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors">
              <Eye className="h-4 w-4" />
              संपूर्ण डॅशबोर्ड पहा / View Full Dashboard
            </button>
            <button className="flex items-center gap-2 bg-secondary text-secondary-foreground px-6 py-3 rounded-lg hover:bg-secondary/90 transition-colors">
              <Download className="h-4 w-4" />
              डेटा डाउनलोड करा / Download Data
            </button>
          </div>
          <p className="text-sm text-muted-foreground">
            अद्यतनीकरण: दररोज सकाळी 8:00 वाजता / Updated: Daily at 8:00 AM
          </p>
        </div>
      </div>
    </section>
  );
}