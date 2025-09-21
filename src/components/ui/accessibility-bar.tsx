import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Minus, Plus, Palette, Eye } from 'lucide-react';

interface AccessibilityBarProps {
  className?: string;
}

export function AccessibilityBar({ className }: AccessibilityBarProps) {
  const [fontSize, setFontSize] = useState(100);
  const [highContrast, setHighContrast] = useState(false);
  const [grayscale, setGrayscale] = useState(false);

  const adjustFontSize = (adjustment: number) => {
    const newSize = Math.max(75, Math.min(150, fontSize + adjustment));
    setFontSize(newSize);
    document.documentElement.style.fontSize = `${newSize}%`;
  };

  const toggleHighContrast = () => {
    setHighContrast(!highContrast);
    document.documentElement.classList.toggle('high-contrast');
  };

  const toggleGrayscale = () => {
    setGrayscale(!grayscale);
    document.documentElement.style.filter = grayscale ? 'none' : 'grayscale(100%)';
  };

  const resetAccessibility = () => {
    setFontSize(100);
    setHighContrast(false);
    setGrayscale(false);
    document.documentElement.style.fontSize = '100%';
    document.documentElement.style.filter = 'none';
    document.documentElement.classList.remove('high-contrast');
  };

  return (
   <div className={cn("bg-secondary text-secondary-foreground py-2 border-b", className)}>
  <div className="container mx-auto px-4">
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
      {/* First Line on Mobile: Accessibility + Text Size */}
      <div className="flex items-center justify-between sm:justify-start">
        <div className="flex items-center space-x-1">
          <a 
            href="#main-content" 
            className="skip-link"
            tabIndex={0}
          >
            Skip to main content / मुख्य सामग्रीवर जा
          </a>
          <span className="text-sm font-medium">
            Accessibility / प्रवेशयोग्यता:
          </span>
        </div>
        
        {/* Font Size Controls - Same line on mobile */}
        <div className="flex items-center space-x-1 border-r pr-2 sm:hidden">
          <span className="text-xs">Text Size:</span>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => adjustFontSize(-25)}
            className="h-6 w-6 p-0"
            aria-label="Decrease font size"
          >
            <Minus className="h-3 w-3" />
          </Button>
          <span className="text-xs font-medium w-8 text-center">
            A{fontSize === 75 ? '-' : fontSize === 150 ? '+' : ''}
          </span>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => adjustFontSize(25)}
            className="h-6 w-6 p-0"
            aria-label="Increase font size"
          >
            <Plus className="h-3 w-3" />
          </Button>
        </div>
      </div>
      
      {/* Second Line on Mobile: All Controls */}
      <div className="flex items-center justify-center sm:justify-end space-x-2">
        {/* Font Size Controls - Desktop only */}
        <div className="hidden sm:flex items-center space-x-1 border-r pr-2">
          <span className="text-xs">Text Size:</span>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => adjustFontSize(-25)}
            className="h-6 w-6 p-0"
            aria-label="Decrease font size"
          >
            <Minus className="h-3 w-3" />
          </Button>
          <span className="text-xs font-medium w-8 text-center">
            A{fontSize === 75 ? '-' : fontSize === 150 ? '+' : ''}
          </span>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => adjustFontSize(25)}
            className="h-6 w-6 p-0"
            aria-label="Increase font size"
          >
            <Plus className="h-3 w-3" />
          </Button>
        </div>

        {/* High Contrast */}
        <Button
          variant="ghost"
          size="sm"
          onClick={toggleHighContrast}
          className={cn("h-6 px-2 text-xs", highContrast && "bg-accent")}
          aria-label="Toggle high contrast"
        >
          <Palette className="h-3 w-3 mr-1" />
          <span className="hidden xs:inline">High Contrast</span>
          <span className="xs:hidden">Contrast</span>
        </Button>

        {/* Grayscale */}
        <Button
          variant="ghost"
          size="sm"
          onClick={toggleGrayscale}
          className={cn("h-6 px-2 text-xs", grayscale && "bg-accent")}
          aria-label="Toggle grayscale"
        >
          <Eye className="h-3 w-3 mr-1" />
          <span className="hidden xs:inline">Grayscale</span>
          <span className="xs:hidden">Gray</span>
        </Button>

        {/* Reset */}
        <Button
          variant="ghost"
          size="sm"
          onClick={resetAccessibility}
          className="h-6 px-2 text-xs"
          aria-label="Reset accessibility settings"
        >
          Reset
        </Button>
      </div>
    </div>
  </div>
</div>
  );
}