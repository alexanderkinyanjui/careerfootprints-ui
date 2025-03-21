import { LucideIcon } from 'lucide-react';
import { Card } from './card';
import { Button } from './button';
import { Clock } from 'lucide-react';
import Link from 'next/link';

interface AssessmentCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  duration: string;
  href?: string;
}

export function AssessmentCard({ 
  title, 
  description, 
  icon: Icon,
  duration,
  href = '#'
}: AssessmentCardProps) {
  return (
    <Card className="group hover:shadow-lg transition-all duration-300">
      <div className="p-6">
        <div className="h-12 w-12 rounded-lg bg-primary-50 flex items-center justify-center mb-4 group-hover:bg-primary-100 transition-colors">
          <Icon className="h-6 w-6 text-primary-600" />
        </div>
        <h3 className="text-lg font-semibold mb-2 group-hover:text-primary-600 transition-colors">
          {title}
        </h3>
        <p className="text-gray-600 mb-4">
          {description}
        </p>
        <div className="flex items-center justify-between">
          <div className="flex items-center text-sm text-gray-500">
            <Clock className="h-4 w-4 mr-1" />
            {duration}
          </div>
          <Button asChild variant="outline" className="hover:bg-primary-50">
            <Link href={href}>
              Start Assessment
            </Link>
          </Button>
        </div>
      </div>
    </Card>
  );
} 