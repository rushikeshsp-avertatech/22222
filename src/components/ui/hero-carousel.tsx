import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, CheckCircle, FileText, Users } from 'lucide-react';
import { cn } from '@/lib/utils';
import heroDairyScheme from '@/assets/hero-dairy-scheme.jpg';

const heroSlides = [
  {
    id: 1,
    title: 'दुग्ध विकास प्रकल्प टप्पा 2',
    subtitle: 'Dugdh Vikas Project Phase 2 (2024-25 to 2026-27)',
    description: 'विदर्भ व मराठवाडा भागातील दुग्धव्यवसायाचा विकास. ₹328.42 कोटी प्रकल्प, 19 जिल्हे',
    descriptionEn: 'Development of dairy business in Vidarbha and Marathwada regions. ₹328.42 crore project covering 19 districts',
    image: heroDairyScheme,
    ctaButtons: [
      { text: 'पात्रता तपासा / Check Eligibility', variant: 'default' as const, href: '#eligibility' },
      { text: 'डॅशबोर्ड पहा / View Dashboard', variant: 'secondary' as const, href: '#dashboard' }
    ]
  },
  {
    id: 2,
    title: 'दुधाळ जनावरे वाटप योजना',
    subtitle: 'Livestock Distribution Component',
    description: 'उच्च दुग्धउत्पादक गाई-म्हशींचे वाटप. ५०% अनुदान, ₹50,000 पर्यंत',
    descriptionEn: 'High-yielding dairy cattle distribution. 50% subsidy up to ₹50,000',
    image: heroDairyScheme,
    ctaButtons: [
      { text: 'अधिक माहिती / More Info', variant: 'secondary' as const, href: '#components' },
      { text: 'पात्रता तपासा / Check Eligibility', variant: 'default' as const, href: '#eligibility' }
    ]
  },
  {
    id: 3,
    title: 'IVF कालवडी वाटप कार्यक्रम',
    subtitle: 'IVF Heifer Distribution Program',
    description: 'उन्नत प्रजनन तंत्राद्वारे IVF कालवडींचे वाटप. ७५% अनुदान, ₹1.08 लाख पर्यंत',
    descriptionEn: 'IVF heifer distribution through advanced breeding technology. 75% subsidy up to ₹1.08 lakh',
    image: heroDairyScheme,
    ctaButtons: [
      { text: 'घटक माहिती / Component Info', variant: 'secondary' as const, href: '#components' },
      { text: 'अर्ज प्रक्रिया / Application Process', variant: 'default' as const, href: '#eligibility' }
    ]
  }
];

export function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  const currentHero = heroSlides[currentSlide];

  return (
     
    <section className="relative h-[600px] overflow-hidden bg-gradient-hero">
      {/* Background Image */}
      
      <div className="absolute inset-0">
        <img 
          src={currentHero.image}
          alt={currentHero.title}
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-secondary/60" />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 h-full flex items-start pt-27  sm:items-center sm:pt-0">
        <div className="max-w-3xl text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 leading-tight">
            {currentHero.title}
          </h1>
          <h2 className="text-2xl md:text-3xl font-medium mb-6 text-white/90">
            {currentHero.subtitle}
          </h2>
          <p className="text-xl mb-4 leading-relaxed">
            {currentHero.description}
          </p>
          <p className="text-lg mb-8 text-white/80 leading-relaxed">
            {currentHero.descriptionEn}
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            {currentHero.ctaButtons.map((button, index) => (
              <Button
                key={index}
                variant={button.variant}
                size="lg"
                className={cn(
                  "text-lg px-8 py-3 font-semibold",
                  button.variant === 'default' 
                    ? "bg-white text-primary hover:bg-white/90 shadow-lg" 
                    : "bg-white/10 text-white border-white/30 hover:bg-white/20"
                )}
                asChild
              >
                <a href={button.href}>{button.text}</a>
              </Button>
            ))}
          </div>

          {/* Quick Stats */}
          <div className="flex flex-wrap gap-6 text-sm">
            <div className="flex items-center space-x-2">
              <CheckCircle className="h-5 w-5 text-success" />
              <span>प्रकल्प: सक्रिय / Project: Active</span>
            </div>
            <div className="flex items-center space-x-2">
              <Users className="h-5 w-5 text-info" />
              <span>लाभार्थी: 50,000+ / Beneficiaries: 50,000+</span>
            </div>
            <div className="flex items-center space-x-2">
              <FileText className="h-5 w-5 text-warning" />
              <span>घटक: 9 उपलब्ध / Components: 9 Available</span>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <Button
        variant="ghost"
        size="sm"
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white border-white/20"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6" />
      </Button>
      <Button
        variant="ghost"
        size="sm"
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white border-white/20"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6" />
      </Button>

      {/* Slide Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-2">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={cn(
              "w-3 h-3 rounded-full transition-all duration-300",
              index === currentSlide 
                ? "bg-white scale-125" 
                : "bg-white/40 hover:bg-white/60"
            )}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}