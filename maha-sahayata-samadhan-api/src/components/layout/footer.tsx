import React from 'react';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Globe, 
  Facebook, 
  Twitter, 
  Youtube,
  ExternalLink,
  FileText,
  HelpCircle,
  MessageSquare,
  Users
} from 'lucide-react';
import maharashtraEmblem from '@/assets/maharashtra-emblem.png';

export function Footer() {
  const currentYear = new Date().getFullYear();
  const lastUpdated = new Date().toLocaleDateString('en-IN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          
          {/* Department Information */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src={maharashtraEmblem} 
                alt="Maharashtra Government"
                className="h-12 w-12 object-contain"
              />
              <div>
                <h3 className="font-bold text-lg">पशुसंवर्धन विभाग</h3>
                <p className="text-sm text-secondary-foreground/80">Animal Husbandry Department</p>
              </div>
            </div>
            <p className="text-sm mb-4 text-secondary-foreground/80">
              महाराष्ट्र शासनाच्या पशुसंवर्धन विभागामार्फत शेतकऱ्यांच्या उत्पन्नवाढीसाठी विविध योजना राबवल्या जातात.
            </p>
            <p className="text-sm text-secondary-foreground/80">
              Various schemes are implemented through Maharashtra Government's Animal Husbandry Department for farmers' income enhancement.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links / त्वरित दुवे</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#schemes" className="hover:text-primary transition-colors flex items-center">
                  <FileText className="h-3 w-3 mr-2" />
                  Schemes / योजना
                </a>
              </li>
              <li>
                <a href="#eligibility" className="hover:text-primary transition-colors flex items-center">
                  <Users className="h-3 w-3 mr-2" />
                  Eligibility / पात्रता
                </a>
              </li>
              <li>
                <a href="#apply" className="hover:text-primary transition-colors flex items-center">
                  <FileText className="h-3 w-3 mr-2" />
                  Apply Online / ऑनलाइन अर्ज
                </a>
              </li>
              <li>
                <a href="#status" className="hover:text-primary transition-colors flex items-center">
                  <FileText className="h-3 w-3 mr-2" />
                  Track Status / स्थिती तपासा
                </a>
              </li>
              <li>
                <a href="#downloads" className="hover:text-primary transition-colors flex items-center">
                  <FileText className="h-3 w-3 mr-2" />
                  Downloads / डाउनलोड्स
                </a>
              </li>
            </ul>
          </div>

          {/* Support & Help */}
          <div>
            <h4 className="font-semibold mb-4">Support / सहाय्य</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#faq" className="hover:text-primary transition-colors flex items-center">
                  <HelpCircle className="h-3 w-3 mr-2" />
                  FAQ / वारंवार विचारले जाणारे प्रश्न
                </a>
              </li>
              <li>
                <a href="#feedback" className="hover:text-primary transition-colors flex items-center">
                  <MessageSquare className="h-3 w-3 mr-2" />
                  Feedback / प्रतिक्रिया
                </a>
              </li>
              <li>
                <a href="#grievance" className="hover:text-primary transition-colors flex items-center">
                  <MessageSquare className="h-3 w-3 mr-2" />
                  Grievance / तक्रार निवारण
                </a>
              </li>
              <li>
                <a href="#sitemap" className="hover:text-primary transition-colors flex items-center">
                  <Globe className="h-3 w-3 mr-2" />
                  Site Map / साइट मॅप
                </a>
              </li>
              <li>
                <a href="https://www.india.gov.in" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors flex items-center">
                  <ExternalLink className="h-3 w-3 mr-2" />
                  National Portal / राष्ट्रीय पोर्टल
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="font-semibold mb-4">Contact / संपर्क</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 mt-0.5 text-primary" />
                <div>
                  <p className="font-medium">पशुसंवर्धन आयुक्तालय</p>
                  <p className="text-secondary-foreground/80">Commissioner of Animal Husbandry</p>
                  <p className="text-secondary-foreground/80">पुणे, महाराष्ट्र - 411001</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-primary" />
                <div>
                  <p>Helpline: <strong>1800-123-4567</strong></p>
                  <p className="text-xs text-secondary-foreground/80">Mon-Fri, 9 AM - 6 PM</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-primary" />
                <div>
                  <p>help@mahaah.gov.in</p>
                  <p className="text-xs text-secondary-foreground/80">Online support available</p>
                </div>
              </div>

              {/* Social Media */}
              <div className="pt-2">
                <p className="font-medium mb-2">Follow Us / आम्हाला फॉलो करा</p>
                <div className="flex space-x-2">
                  <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                    <Facebook className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                    <Twitter className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                    <Youtube className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-sm text-secondary-foreground/80">
            <p>
              © {currentYear} महाराष्ट्र शासन, पशुसंवर्धन विभाग | Government of Maharashtra, Animal Husbandry Department
            </p>
            <p className="mt-1">
              Last Updated: {lastUpdated} | शेवटची अपडेट: {lastUpdated}
            </p>
          </div>

          <div className="flex flex-wrap gap-4 text-sm">
            <a href="#privacy" className="hover:text-primary transition-colors">
              Privacy Policy / गोपनीयता धोरण
            </a>
            <a href="#terms" className="hover:text-primary transition-colors">
              Terms of Use / वापर अटी
            </a>
            <a href="#accessibility" className="hover:text-primary transition-colors">
              Accessibility / प्रवेशयोग्यता
            </a>
            <a href="#copyright" className="hover:text-primary transition-colors">
              Copyright / कॉपीराइट
            </a>
          </div>
        </div>

        {/* Government Links */}
        <div className="mt-6 pt-6 border-t border-secondary-foreground/20">
          <div className="flex flex-wrap justify-center gap-4 text-xs text-secondary-foreground/80">
            <a href="https://www.maharashtra.gov.in" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
              Maharashtra.gov.in
            </a>
            <a href="https://www.india.gov.in" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
              India.gov.in
            </a>
            <a href="https://digitalindia.gov.in" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
              Digital India
            </a>
            <a href="https://www.mygov.in" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
              MyGov.in
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}