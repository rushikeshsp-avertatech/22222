import React from 'react';
import { SchemeCard } from '@/components/ui/scheme-card';
import { 
  Beef, 
  Egg, 
  Wheat, 
  Scissors, 
  Stethoscope, 
  GraduationCap,
  Milk,
  Sprout,
  Package
} from 'lucide-react';

const schemeComponents = [
  {
    title: 'दुधाळ जनावरे वाटप',
    titleEn: 'Livestock Distribution',
    description: 'उच्च दुग्धउत्पादक गाई-म्हशींचे वाटप योजना',
    descriptionEn: 'High-yielding dairy cattle distribution scheme',
    subsidyAmount: '₹50,000',
    subsidyPercentage: '50%',
    eligibilityChips: ['लहान शेतकरी', '2 हेक्टरपेक्षा कमी', 'पहिल्यांदा'],
    beneficiaryCount: '15,000 लाभार्थी',
    deadline: 'मार्च 2027',
    icon: <Beef className="h-5 w-5" />
  },
  {
    title: 'भृण प्रत्यारोपण/IVF कालवडी वाटप',
    titleEn: 'IVF/ET Heifer Distribution',
    description: 'उन्नत प्रजनन तंत्राद्वारे IVF कालवडींचे वाटप',
    descriptionEn: 'IVF heifer distribution through advanced breeding technology',
    subsidyAmount: '₹1,08,000',
    subsidyPercentage: '75%',
    eligibilityChips: ['प्रगतशील शेतकरी', 'किमान 5 जनावरे', 'प्रशिक्षण पूर्ण'],
    beneficiaryCount: '3,000 लाभार्थी',
    deadline: 'फेब्रुवारी 2027',
    icon: <Egg className="h-5 w-5" />
  },
  {
    title: 'प्रजनन पूरक खाद्य',
    titleEn: 'Fertility Feed',
    description: 'प्रजनन क्षमता वाढवणारे पशुआहार वितरण',
    descriptionEn: 'Fertility-enhancing cattle feed distribution',
    subsidyAmount: '₹25,000',
    subsidyPercentage: '40%',
    eligibilityChips: ['नोंदणीकृत शेतकरी', 'किमान 3 जनावरे', 'संकलन केंद्र सदस्य'],
    icon: <Wheat className="h-5 w-5" />
  },
  {
    title: 'फॅट/SNF वाढविणारे खाद्य पूरक',
    titleEn: 'Fat/SNF Enhancers',
    description: 'दुधाची गुणवत्ता सुधारणारे खाद्य पूरक',
    descriptionEn: 'Feed supplements to improve milk quality',
    subsidyAmount: '₹20,000',
    subsidyPercentage: '35%',
    eligibilityChips: ['डेअरी सहकारी सदस्य', 'किमान 200L/दिवस', 'गुणवत्ता तपासणी'],
    icon: <Milk className="h-5 w-5" />
  },
  {
    title: 'बहुउपयोगी चारा/बी-बियाणे वाटप',
    titleEn: 'Fodder Crop Inputs',
    description: 'उन्नत चारा पिकांचे बियाणे व रोपे वितरण',
    descriptionEn: 'Distribution of improved fodder crop seeds and sets',
    subsidyAmount: '₹15,000',
    subsidyPercentage: '50%',
    eligibilityChips: ['जमीन मालक', 'किमान 1 एकर', 'सिंचन सुविधा'],
    icon: <Sprout className="h-5 w-5" />
  },
  {
    title: 'कडबाकुट्टी यंत्र',
    titleEn: 'Chaff Cutters',
    description: 'चारा कापणी यंत्र खरेदीसाठी अनुदान',
    descriptionEn: 'Grant for purchasing fodder cutting machines',
    subsidyAmount: '₹30,000',
    subsidyPercentage: '50%',
    eligibilityChips: ['गट/व्यक्तिगत', 'किमान 5 जनावरे', 'तांत्रिक प्रशिक्षण'],
    icon: <Scissors className="h-5 w-5" />
  },
  {
    title: 'मुरघास वाटप',
    titleEn: 'Silage Distribution',
    description: 'चारा संरक्षण तंत्र साठी अनुदान योजना',
    descriptionEn: 'Subsidy scheme for fodder preservation technology',
    subsidyAmount: '₹40,000',
    subsidyPercentage: '45%',
    eligibilityChips: ['व्यावसायिक शेतकरी', 'साठवण सुविधा', 'तांत्रिक ज्ञान'],
    icon: <Package className="h-5 w-5" />
  },
  {
    title: 'वंध्यत्व निराकरण उपचार',
    titleEn: 'Infertility Treatment',
    description: 'पशुधनाच्या प्रजनन समस्यांवर उपचार शिबिर',
    descriptionEn: 'Treatment camps for livestock reproductive issues',
    subsidyAmount: 'मोफत सेवा',
    subsidyPercentage: '100%',
    eligibilityChips: ['सर्व शेतकरी', 'नोंदणीकृत जनावरे', 'पशुवैद्य सल्ला'],
    icon: <Stethoscope className="h-5 w-5" />
  },
  {
    title: 'शेतकरी प्रशिक्षण',
    titleEn: 'Farmer Training',
    description: 'आधुनिक दुग्धव्यवसाय तंत्र प्रशिक्षण',
    descriptionEn: 'Modern dairy farming techniques training',
    subsidyAmount: 'मोफत प्रशिक्षण',
    subsidyPercentage: '100%',
    eligibilityChips: ['सर्व इच्छुक', '18+ वय', 'मूलभूत साक्षरता'],
    icon: <GraduationCap className="h-5 w-5" />
  }
];

export function SchemeComponents() {
  return (
    <section id="schemes" className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            घटक व अनुदान माहिती
          </h2>
          <p className="text-xl text-muted-foreground mb-2">
            Components & Subsidies Information
          </p>
          <p className="text-muted-foreground max-w-4xl mx-auto">
            दुग्ध विकास प्रकल्प टप्पा 2 अंतर्गत उपलब्ध 9 घटकांची संपूर्ण माहिती, अनुदान तपशील आणि पात्रता निकष
            <br />
            Complete information about all 9 components available under Dugdh Vikas Project Phase 2, subsidy details and eligibility criteria
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {schemeComponents.map((component, index) => (
            <SchemeCard
              key={index}
              {...component}
            />
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-sm text-muted-foreground mb-4">
            सर्व घटकांसाठी पात्रता तपासा आणि आवश्यक कागदपत्रांची यादी पहा
            <br />
            Check eligibility for all components and view required documents list
          </p>
          <div className="flex justify-center gap-4">
            <a 
              href="#eligibility"
              className="btn-gov-secondary"
            >
              पात्रता तपासा / Check Eligibility
            </a>
            <a 
              href="#dashboard"
              className="btn-gov-primary"
            >
              डॅशबोर्ड पहा / View Dashboard
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}