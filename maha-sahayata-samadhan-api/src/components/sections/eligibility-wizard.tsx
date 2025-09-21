import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  CheckCircle, 
  XCircle, 
  ArrowRight, 
  RefreshCw,
  MapPin,
  Users,
  Beef,
  GraduationCap
} from 'lucide-react';

export function EligibilityWizard() {
  const [currentStep, setCurrentStep] = useState(1);
  const [answers, setAnswers] = useState<Record<string, any>>({});
  const [showResult, setShowResult] = useState(false);

  const questions = [
    {
      id: 'district',
      question: 'तुमचा जिल्हा निवडा / Select your district',
      type: 'select',
      options: [
        'नागपूर', 'अकोला', 'अमरावती', 'बुलढाणा', 'चंद्रपूर', 'गडचिरोली', 
        'गोंदिया', 'वर्धा', 'वाशिम', 'यवतमाळ', 'औरंगाबाद', 'जालना', 
        'परभणी', 'हिंगोली', 'नांदेड', 'लातूर', 'उस्मानाबाद', 'बीड', 'धुळे'
      ],
      icon: <MapPin className="h-5 w-5" />
    },
    {
      id: 'category',
      question: 'तुमची श्रेणी कोणती? / What is your category?',
      type: 'radio',
      options: [
        { value: 'small', label: 'लहान शेतकरी / Small Farmer' },
        { value: 'marginal', label: 'सीमांत शेतकरी / Marginal Farmer' },
        { value: 'general', label: 'सामान्य शेतकरी / General Farmer' },
        { value: 'other', label: 'इतर / Other' }
      ],
      icon: <Users className="h-5 w-5" />
    },
    {
      id: 'animals',
      question: 'सध्या तुमच्याकडे किती दुधाळ जनावरे आहेत? / How many milch animals do you currently have?',
      type: 'radio',
      options: [
        { value: '0', label: '0 (कोणतेही नाही / None)' },
        { value: '1-3', label: '1-3 जनावरे / animals' },
        { value: '4-10', label: '4-10 जनावरे / animals' },
        { value: '10+', label: '10+ जनावरे / animals' }
      ],
      icon: <Beef className="h-5 w-5" />
    },
    {
      id: 'dairy_center',
      question: 'तुम्ही दूध संकलन केंद्राला दूध विकता का? / Do you sell milk to collection center?',
      type: 'radio',
      options: [
        { value: 'yes', label: 'होय, नियमित / Yes, regularly' },
        { value: 'sometimes', label: 'कधी कधी / Sometimes' },
        { value: 'no', label: 'नाही / No' }
      ],
      icon: <CheckCircle className="h-5 w-5" />
    },
    {
      id: 'training',
      question: 'तुम्ही याआधी पशुसंवर्धन प्रशिक्षण घेतले आहे का? / Have you taken animal husbandry training before?',
      type: 'radio',
      options: [
        { value: 'yes', label: 'होय / Yes' },
        { value: 'no', label: 'नाही / No' },
        { value: 'interested', label: 'नाही, पण इच्छुक आहे / No, but interested' }
      ],
      icon: <GraduationCap className="h-5 w-5" />
    }
  ];

  const handleAnswer = (questionId: string, value: any) => {
    setAnswers(prev => ({ ...prev, [questionId]: value }));
  };

  const calculateEligibility = () => {
    const eligibleComponents = [];
    
    // Livestock Distribution
    if (answers.category === 'small' || answers.category === 'marginal') {
      eligibleComponents.push({
        name: 'दुधाळ जनावरे वाटप',
        nameEn: 'Livestock Distribution',
        eligible: true,
        subsidy: '₹50,000 (50%)'
      });
    }
    
    // IVF Heifer
    if (answers.animals !== '0' && answers.dairy_center === 'yes') {
      eligibleComponents.push({
        name: 'IVF कालवडी वाटप',
        nameEn: 'IVF Heifer Distribution',
        eligible: true,
        subsidy: '₹1,08,000 (75%)'
      });
    }
    
    // Feed supplements
    if (answers.animals !== '0') {
      eligibleComponents.push({
        name: 'प्रजनन पूरक खाद्य',
        nameEn: 'Fertility Feed',
        eligible: true,
        subsidy: '₹25,000 (40%)'
      });
    }
    
    // Training
    if (answers.training === 'no' || answers.training === 'interested') {
      eligibleComponents.push({
        name: 'शेतकरी प्रशिक्षण',
        nameEn: 'Farmer Training',
        eligible: true,
        subsidy: 'मोफत / Free'
      });
    }

    return eligibleComponents;
  };

  const nextStep = () => {
    if (currentStep < questions.length) {
      setCurrentStep(currentStep + 1);
    } else {
      setShowResult(true);
    }
  };

  const resetWizard = () => {
    setCurrentStep(1);
    setAnswers({});
    setShowResult(false);
  };

  if (showResult) {
    const eligibleComponents = calculateEligibility();
    
    return (
      <section id="eligibility" className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">
                पात्रता निकाल / Eligibility Result
              </h2>
            </div>

            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-primary">
                  <CheckCircle className="h-6 w-6" />
                  तुम्ही खालील घटकांसाठी पात्र आहात / You are eligible for following components:
                </CardTitle>
              </CardHeader>
              <CardContent>
                {eligibleComponents.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {eligibleComponents.map((component, index) => (
                      <div key={index} className="p-4 bg-green-50 border border-green-200 rounded-lg">
                        <h4 className="font-semibold text-green-800 mb-1">
                          {component.name}
                        </h4>
                        <p className="text-sm text-green-600 mb-2">
                          {component.nameEn}
                        </p>
                        <Badge className="bg-green-100 text-green-800">
                          {component.subsidy}
                        </Badge>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <XCircle className="h-12 w-12 text-red-500 mx-auto mb-4" />
                    <p className="text-red-600 font-medium">
                      सध्या तुम्ही कोणत्याही घटकासाठी पात्र नाही
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Currently you are not eligible for any component
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>

            <div className="text-center">
              <div className="flex justify-center gap-4">
                <Button onClick={resetWizard} variant="outline">
                  <RefreshCw className="h-4 w-4 mr-2" />
                  पुन्हा तपासा / Check Again
                </Button>
                <Button className="bg-primary text-primary-foreground">
                  अधिक माहिती मिळवा / Get More Info
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  const currentQuestion = questions[currentStep - 1];

  return (
    <section id="eligibility" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">
              पात्रता तपासणी
            </h2>
            <p className="text-xl text-muted-foreground mb-2">
              Eligibility Check
            </p>
            <p className="text-muted-foreground">
              {currentStep} of {questions.length} प्रश्न / questions
            </p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-lg">
                {currentQuestion.icon}
                {currentQuestion.question}
              </CardTitle>
            </CardHeader>
            <CardContent>
              {currentQuestion.type === 'select' && (
                <select
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  value={answers[currentQuestion.id] || ''}
                  onChange={(e) => handleAnswer(currentQuestion.id, e.target.value)}
                >
                  <option value="">निवडा / Select</option>
                  {currentQuestion.options.map((option, index) => (
                    <option key={index} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              )}

              {currentQuestion.type === 'radio' && (
                <div className="space-y-3">
                  {currentQuestion.options.map((option, index) => (
                    <label key={index} className="flex items-center gap-3 p-3 border rounded-lg cursor-pointer hover:bg-muted/50">
                      <input
                        type="radio"
                        name={currentQuestion.id}
                        value={option.value}
                        checked={answers[currentQuestion.id] === option.value}
                        onChange={(e) => handleAnswer(currentQuestion.id, e.target.value)}
                        className="text-primary focus:ring-primary"
                      />
                      <span>{option.label}</span>
                    </label>
                  ))}
                </div>
              )}

              <div className="flex justify-between mt-6">
                <Button
                  variant="outline"
                  disabled={currentStep === 1}
                  onClick={() => setCurrentStep(currentStep - 1)}
                >
                  मागे / Back
                </Button>
                <Button
                  onClick={nextStep}
                  disabled={!answers[currentQuestion.id]}
                  className="bg-primary text-primary-foreground"
                >
                  {currentStep === questions.length ? 'निकाल पहा / View Result' : 'पुढे / Next'}
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}