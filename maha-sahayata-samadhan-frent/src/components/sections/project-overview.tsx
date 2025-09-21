import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin, Users, IndianRupee, Target } from 'lucide-react';

export function ProjectOverview() {
  const keyFeatures = [
    {
      icon: <Calendar className="h-5 w-5" />,
      title: 'प्रकल्प कालावधी',
      titleEn: 'Project Duration',
      value: '2024-25 ते 2026-27',
      valueEn: '2024-25 to 2026-27'
    },
    {
      icon: <IndianRupee className="h-5 w-5" />,
      title: 'एकूण निधी',
      titleEn: 'Total Fund',
      value: '₹328.42 कोटी',
      valueEn: '₹328.42 Crore'
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      title: 'कार्यक्षेत्र',
      titleEn: 'Coverage Area',
      value: '19 जिल्हे',
      valueEn: '19 Districts'
    },
    {
      icon: <Users className="h-5 w-5" />,
      title: 'लक्ष्य लाभार्थी',
      titleEn: 'Target Beneficiaries',
      value: '50,000+ शेतकरी',
      valueEn: '50,000+ Farmers'
    }
  ];

  const objectives = [
    {
      title: 'दुग्ध उत्पादन वाढविणे',
      titleEn: 'Increase Milk Production',
      description: 'उच्च गुणवत्तेच्या जनावरांचे वाटप करून दुग्ध उत्पादन वाढविणे',
      descriptionEn: 'Increase milk production through distribution of high-quality animals'
    },
    {
      title: 'शेतकऱ्यांचे उत्पन्न वाढविणे',
      titleEn: 'Enhance Farmer Income',
      description: 'आधुनिक तंत्रज्ञान व प्रशिक्षणाद्वारे शेतकऱ्यांचे उत्पन्न वाढविणे',
      descriptionEn: 'Enhance farmer income through modern technology and training'
    },
    {
      title: 'रोजगाराच्या संधी निर्माण करणे',
      titleEn: 'Create Employment',
      description: 'दुग्धव्यवसायातून रोजगाराच्या नवीन संधी निर्माण करणे',
      descriptionEn: 'Create new employment opportunities through dairy business'
    }
  ];

  const boardMembers = [
    {
      name: "श्री देवेंद्र फडणवीस",
      position: "Hon. Chief Minister of Maharashtra Government",
      photo: "https://api.mahagosevaayog.org/v1/file/image/fadanvis.png/",
    },
    {
      name: "श्री एकनाथ शिंदे",
      position: "Hon. Deputy Chief Minister of Maharashtra Government",
      photo: "https://api.mahagosevaayog.org/v1/file/image/shinde.jpeg/",
    },
    {
      name: "श्री अजित पवार",
      position: "Hon. Deputy Chief Minister of Maharashtra Government",
      photo: "https://api.mahagosevaayog.org/v1/file/image/pawar.jpeg/",
    },
    {
      name: "मा. ना. श्रीमती. पंकजाताई मुंडे",
      position: "Hon. Minister for Animal Husbandry, Environment & Climate Change",
      photo: "https://api.mahagosevaayog.org/v1/file/image/munde.jpg/",
    } 
  ];

  const boardMembersSecond = [
    {
      name: "डॉ. रामस्वामी एन.",
      position: "Hon. Additional Chief Secretary, Animal Husbandry And Dairy Development",
      photo: "https://api.mahagosevaayog.org/v1/file/image/ramaswami.jpg/",
    },
    {
      name: "श्री प्रवीणकुमार देवरे",
      position: "Hon. Commissioner Department of Animal Husbandry Maharashtra Government",
      photo: "https://api.mahagosevaayog.org/v1/file/image/pravinkumar1733290676319.png/",
    }
    
  ];

  return (
    <>
    <section className="py-16 bg-background" id="leadership">
        <div className="container mx-auto px-4">
          {/* Heading */}
         

          {/* First row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
            {boardMembers.map((member, index) => (
              <Card
                key={index}
                className="text-center flex flex-col items-center p-4 hover:shadow-md transition-shadow"
              >
                <CardHeader className="flex flex-col items-center">
                  <img
                    src={member.photo}
                    alt={member.name}
                    className="w-36 h-36 object-cover rounded-lg mb-3"
                  />
                </CardHeader>
                <CardContent>
                  <h5 className="font-semibold">{member.name}</h5>
                  <p className="text-sm text-muted-foreground">{member.position}</p>
                </CardContent>
              </Card>
            ))}
          </div>


<section className="py-16 bg-background" id="leadership">
  <div className="container mx-auto px-4">
    {/* 2-column layout */}
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 justify-center">
      {/* Left side (heading + description) */}
      <div className="text-left max-w-lg">
        <h2 className="text-4xl font-bold mb-4">आमचे नेतृत्त्व</h2>
        <p className="text-muted-foreground mb-4">
          यशस्वी मार्गदर्शन करणारे मंत्री महोदय, अध्यक्ष महोदय, सचिव महोदय  , व
          व्यवस्थापकीय संचालक हे महाराष्ट्रातील गायींच्या आर्थिक प्रगतीसाठी
          अथक प्रयत्नशील आहेत. नॅशनल डेअरी डेव्हलपमेंट बोर्ड ह्यांच्या  नेतृत्वामुळे ग्रामीण भागात गोपालन
          क्षेत्रात सशक्त बदल घडून येत आहेत.
        </p>
        <a
          
          className="inline-block bg-red-600 text-white px-6 py-2 rounded-full shadow hover:bg-red-700 transition"
        >
          अधिक माहिती
        </a>
      </div>

      {/* Right side (cards) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
        {boardMembersSecond.map((member, index) => (
          <Card
            key={index}
            className="text-center flex flex-col items-center p-4 hover:shadow-md transition-shadow"
          >
            <CardHeader className="flex flex-col items-center">
              <img
                src={member.photo}
                alt={member.name}
                className="w-36 h-36 object-cover rounded-lg mb-3"
              />
            </CardHeader>
            <CardContent>
              <h5 className="font-semibold">{member.name}</h5>
              <p className="text-sm text-muted-foreground">{member.position}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  </div>
</section>

        </div>
      </section>
      {/* Project Overview */}
      <section id="overview" className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">प्रकल्पाचा आढावा</h2>
            <p className="text-xl text-muted-foreground mb-2">Project Overview</p>
            <p className="text-muted-foreground max-w-4xl mx-auto">
              महाराष्ट्राच्या विदर्भ आणि मराठवाडा भागातील दुग्धव्यवसायाचा विकास करण्यासाठी राबविण्यात येणारा महत्वाकांक्षी प्रकल्प
              <br />
              An ambitious project being implemented for the development of dairy business in Vidarbha and Marathwada regions of Maharashtra
            </p>
          </div>

          {/* Key Features */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {keyFeatures.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-md transition-shadow">
                <CardHeader className="pb-3">
                  <div className="flex justify-center mb-2">
                    <div className="p-2 bg-primary/10 rounded-full text-primary">
                      {feature.icon}
                    </div>
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                  <p className="text-sm text-muted-foreground">{feature.titleEn}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-xl font-bold text-primary">{feature.value}</p>
                  <p className="text-sm text-muted-foreground">{feature.valueEn}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Project Objectives */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-center mb-8">प्रकल्पाचे उद्दिष्टे / Project Objectives</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {objectives.map((objective, index) => (
                <Card key={index} className="hover:shadow-md transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <Target className="h-5 w-5 text-primary" />
                      {objective.title}
                    </CardTitle>
                    <p className="text-sm text-muted-foreground">{objective.titleEn}</p>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-2">{objective.description}</p>
                    <p className="text-sm text-muted-foreground italic">{objective.descriptionEn}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Coverage Areas */}
          <Card className="bg-muted/30">
            <CardHeader>
              <CardTitle className="text-xl flex items-center gap-2">
                <MapPin className="h-5 w-5 text-primary" />
                कार्यक्षेत्र / Coverage Areas
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3 text-primary">विदर्भ भाग / Vidarbha Region</h4>
                  <div className="flex flex-wrap gap-2">
                    {['नागपूर', 'अकोला', 'अमरावती', 'बुलढाणा', 'चंद्रपूर', 'गडचिरोली', 'गोंदिया', 'वर्धा', 'वाशिम', 'यवतमाळ'].map((district, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {district}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-3 text-primary">मराठवाडा भाग / Marathwada Region</h4>
                  <div className="flex flex-wrap gap-2">
                    {['औरंगाबाद', 'जालना', 'परभणी', 'हिंगोली', 'नांदेड', 'लातूर', 'उस्मानाबाद', 'बीड', 'धुळे'].map((district, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {district}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Leadership Section */}
      
    </>
  );
}
