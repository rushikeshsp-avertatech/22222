import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import { ArrowRight, IndianRupee, Users, Calendar } from 'lucide-react';

interface SchemeCardProps {
  title: string;
  titleEn: string;
  description: string;
  descriptionEn: string;
  subsidyAmount: string;
  subsidyPercentage: string;
  eligibilityChips: string[];
  beneficiaryCount?: string;
  deadline?: string;
  icon: React.ReactNode;
  className?: string;
}

export function SchemeCard({
  title,
  titleEn,
  description,
  descriptionEn,
  subsidyAmount,
  subsidyPercentage,
  eligibilityChips,
  beneficiaryCount,
  deadline,
  icon,
  className
}: SchemeCardProps) {
  return (
    <Card className={cn("gov-card gov-card-hover h-full", className)}>
      <CardHeader className="pb-4">
        <div className="flex items-start space-x-3">
          <div className="p-2 bg-primary/10 rounded-lg text-primary">
            {icon}
          </div>
          <div className="flex-1">
            <CardTitle className="text-lg font-semibold mb-1">
              {title}
            </CardTitle>
            <p className="text-sm text-muted-foreground font-medium">
              {titleEn}
            </p>
          </div>
        </div>
      </CardHeader>

      <CardContent className="pt-0">
        <p className="text-sm mb-2 leading-relaxed">
          {description}
        </p>
        <p className="text-xs text-muted-foreground mb-4 leading-relaxed">
          {descriptionEn}
        </p>

        {/* Subsidy Information */}
        <div className="bg-success/5 border border-success/20 rounded-lg p-3 mb-4">
          <div className="flex items-center space-x-2 mb-1">
            <IndianRupee className="h-4 w-4 text-success" />
            <span className="font-semibold text-success">Subsidy Amount</span>
          </div>
          <p className="text-lg font-bold text-secondary">
            {subsidyAmount}
          </p>
          <p className="text-sm text-muted-foreground">
            Up to {subsidyPercentage} government assistance
          </p>
        </div>

        {/* Additional Info */}
        {(beneficiaryCount || deadline) && (
          <div className="flex justify-between text-xs text-muted-foreground mb-4">
            {beneficiaryCount && (
              <div className="flex items-center space-x-1">
                <Users className="h-3 w-3" />
                <span>{beneficiaryCount}</span>
              </div>
            )}
            {deadline && (
              <div className="flex items-center space-x-1">
                <Calendar className="h-3 w-3" />
                <span>Deadline: {deadline}</span>
              </div>
            )}
          </div>
        )}

        {/* Eligibility Chips */}
        <div className="space-y-2">
          <p className="text-xs font-medium text-muted-foreground">
            Eligibility / पात्रता:
          </p>
          <div className="flex flex-wrap gap-1">
            {eligibilityChips.map((chip, index) => (
              <Badge 
                key={index}
                variant="secondary"
                className="text-xs px-2 py-1"
              >
                {chip}
              </Badge>
            ))}
          </div>
        </div>
      </CardContent>

      <CardFooter className="pt-4">
        <div className="flex gap-2 w-full">
          <Button variant="outline" size="sm" className="flex-1">
            Learn More
          </Button>
          <Button size="sm" className="flex-1">
            Apply Now
            <ArrowRight className="h-3 w-3 ml-1" />
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}