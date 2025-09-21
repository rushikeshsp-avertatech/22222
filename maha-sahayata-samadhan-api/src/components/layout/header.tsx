import React from 'react';
import { AccessibilityBar } from '@/components/ui/accessibility-bar';
import { LanguageToggle } from '@/components/ui/language-toggle';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Search, Menu, Phone, Mail } from 'lucide-react';
import maharashtraEmblem from '@/assets/111.jpeg';
import animalHusbandryIcon from '@/assets/222.jpeg';
import animalHusbandryIcon1 from '@/assets/333.jfif';

export function Header() {
  return (
    <header className="w-full">
      {/* Accessibility Bar */}
      <AccessibilityBar />

      {/* Main Header */}
      <div className="bg-background border-b-2 border-primary">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Government Branding */}
            <div className="flex items-center space-x-4">
              <img
                src={maharashtraEmblem}
                alt="Government of Maharashtra Emblem"
                className="h-16 w-16 object-contain"
              />
              <div className="border-l-2 border-muted pl-4">
                <div className="flex gap-2">
                  <img
                    src={animalHusbandryIcon}
                    alt="Animal Husbandry Department"
                    className="h-12 w-12 object-contain"
                  />
                  <img
                    src={animalHusbandryIcon1}
                    alt="Animal Husbandry Department"
                    className="h-12 w-12 object-contain"
                  />
                </div>

                <div>
                  <h1 className="text-lg font-bold text-primary leading-tight">
                    पशुसंवर्धन विभाग<br />
                    <span className="text-sm text-muted-foreground">
                      Animal Husbandry Department
                    </span>
                  </h1>
                  <p className="text-xs text-muted-foreground">
                    महाराष्ट्र शासन | Government of Maharashtra
                  </p>
                </div>
              </div>

            </div>

            {/* Scheme Title */}
            <div className="hidden lg:block text-center">
              <h2 className="text-2xl font-bold text-secondary">
                नॅशनल डेअरी डेव्हलपमेंट बोर्ड
              </h2>
              <h2 className="text-secondary text-lg">
               अंतर्गत
              </h2>
              <p className="text-base text-muted-foreground">
                Dugdh Vikas Project Phase 2 (2024-25 to 2026-27)
              </p>
              <div className="flex items-center justify-center space-x-4 mt-1">
                <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">
                  ₹328.42 कोटी प्रकल्प
                </span>
                <span className="text-xs text-muted-foreground">
                  19 जिल्हे | Vidarbha & Marathwada
                </span>
              </div>
            </div>

            {/* Right Side Controls */}
            <div className="flex items-center space-x-3">
              <LanguageToggle />

              {/* Search */}
              <Button variant="ghost" size="sm" className="hidden md:flex">
                <Search className="h-4 w-4 mr-1" />
                Search
              </Button>

              {/* Contact Info */}
              <div className="hidden lg:block text-right text-xs">
                <div className="flex items-center text-muted-foreground mb-1">
                  <Phone className="h-3 w-3 mr-1" />
                  Helpline: 1800-123-4567
                </div>
                <div className="flex items-center text-muted-foreground">
                  <Mail className="h-3 w-3 mr-1" />
                  help@mahaah.gov.in
                </div>
              </div>

              {/* Mobile Menu */}
              <Button variant="ghost" className="lg:hidden">
                <Menu className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Bar */}
      {/* Navigation Bar */}
<nav className="bg-secondary text-secondary-foreground">
  <div className="container mx-auto px-4">
    <div className="flex items-center space-x-6 py-3 text-xs md:text-sm overflow-x-auto whitespace-nowrap scrollbar-hide">
      <a href="#" className="font-medium hover:text-primary transition-colors">
        मुख्यपृष्ठ / Home
      </a>
      <a href="#overview" className="font-medium hover:text-primary transition-colors">
        प्रकल्पाचा आढावा / Overview
      </a>
      <a href="#components" className="font-medium hover:text-primary transition-colors">
        घटक व अनुदान / Components
      </a>
      <a href="#eligibility" className="font-medium hover:text-primary transition-colors">
        पात्रता तपासा / Eligibility
      </a>
      <a href="#dashboard" className="font-medium hover:text-primary transition-colors">
        डॅशबोर्ड / Dashboard
      </a>
      <a href="#downloads" className="font-medium hover:text-primary transition-colors">
        शासकीय आदेश / GR Downloads
      </a>
      <a href="#contact" className="font-medium hover:text-primary transition-colors">
        संपर्क साधा / Contact
      </a>
    </div>
  </div>
</nav>

    </header>
  );
}