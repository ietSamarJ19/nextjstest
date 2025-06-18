import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';

interface ProgramCardProps {
  title: string;
  description: string;
  branches: string[];
  type?: 'undergraduate' | 'postgraduate' | 'doctoral';
}

const ProgramCard: React.FC<ProgramCardProps> = ({ 
  title, 
  description, 
  branches, 
  type = 'undergraduate' 
}) => {
  const getTypeBadge = () => {
    switch (type) {
      case 'postgraduate':
        return <Badge variant="secondary" className="bg-blue-100 text-blue-800 hover:bg-blue-200">Postgraduate</Badge>;
      case 'doctoral':
        return <Badge variant="secondary" className="bg-purple-100 text-purple-800 hover:bg-purple-200">Doctoral</Badge>;
      default:
        return <Badge variant="secondary" className="bg-green-100 text-green-800 hover:bg-green-200">Undergraduate</Badge>;
    }
  };

  const getCardStyle = () => {
    switch (type) {
      case 'postgraduate':
        return 'border-l-4 border-l-blue-500';
      case 'doctoral':
        return 'border-l-4 border-l-purple-500';
      default:
        return 'border-l-4 border-l-green-500';
    }
  };

  return (
    <Card className={`mb-6 ${getCardStyle()} hover:shadow-md transition-shadow`}>
      <CardHeader className="pb-4">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <CardTitle className="text-xl font-semibold text-foreground mb-2">
              {title}
            </CardTitle>
            {getTypeBadge()}
          </div>
        </div>
        <CardDescription className="text-base text-muted-foreground mt-3">
          {description}
        </CardDescription>
      </CardHeader>
      <Separator className="mb-4" />
      <CardContent className="pt-0">
        <div className="space-y-3">
          {branches.map((branch, index) => (
            <div key={index} className="flex items-start space-x-3 p-2 rounded-md hover:bg-accent/50 transition-colors">
              <div className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0" />
              <span className="text-sm text-foreground leading-relaxed">{branch}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default ProgramCard;
