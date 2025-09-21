import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Globe } from 'lucide-react';
import { cn } from '@/lib/utils';

interface LanguageToggleProps {
  className?: string;
}

export function LanguageToggle({ className }: LanguageToggleProps) {
  const [language, setLanguage] = useState<'mr' | 'en'>('mr');

  const toggleLanguage = () => {
    const newLang = language === 'mr' ? 'en' : 'mr';
    setLanguage(newLang);
    // Here you would typically update the language context/state
    document.documentElement.lang = newLang === 'mr' ? 'mr' : 'en';
  };

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleLanguage}
      className={cn("flex items-center space-x-1", className)}
      aria-label={`Switch to ${language === 'mr' ? 'English' : 'Marathi'}`}
    >
      <Globe className="h-4 w-4" />
      <span className="font-medium">
        {language === 'mr' ? 'English' : 'मराठी'}
      </span>
    </Button>
  );
}