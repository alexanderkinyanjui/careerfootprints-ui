import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Briefcase, 
  TrendingUp, 
  GraduationCap,
  ArrowRight 
} from 'lucide-react';
import Link from 'next/link';

interface CareerCardProps {
  title: string;
  description: string;
  skills: string[];
  salary_range: {
    min: number;
    max: number;
  };
  growth_rate: string;
  education: string[];
  related_courses: string[];
}

export function CareerCard({
  title,
  description,
  skills,
  salary_range,
  growth_rate,
  education,
  related_courses
}: CareerCardProps) {
  return (
    <Card className="group hover:shadow-lg transition-all duration-300">
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div>
            <h3 className="text-xl font-semibold mb-2 group-hover:text-primary-600 transition-colors">
              {title}
            </h3>
            <p className="text-gray-600 line-clamp-2 mb-4">
              {description}
            </p>
          </div>
          <Briefcase className="h-6 w-6 text-primary-500" />
        </div>

        <div className="space-y-4">
          {/* Salary Range */}
          <div className="flex items-center text-sm">
            <TrendingUp className="h-4 w-4 mr-2 text-primary-500" />
            <span className="text-gray-600">
              KES {salary_range.min.toLocaleString()} - {salary_range.max.toLocaleString()} per year
            </span>
          </div>

          {/* Growth Rate */}
          <div className="flex items-center text-sm">
            <TrendingUp className="h-4 w-4 mr-2 text-primary-500" />
            <span className="text-gray-600">
              {growth_rate} growth rate
            </span>
          </div>

          {/* Required Education */}
          <div>
            <div className="flex items-center mb-2">
              <GraduationCap className="h-4 w-4 mr-2 text-primary-500" />
              <span className="text-sm text-gray-700 font-medium">Required Education</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {education.map((edu, index) => (
                <Badge 
                  key={index}
                  variant="secondary" 
                  className="bg-primary-50 text-primary-600 border-primary-200"
                >
                  {edu}
                </Badge>
              ))}
            </div>
          </div>

          {/* Skills */}
          <div>
            <p className="text-sm text-gray-700 font-medium mb-2">Key Skills</p>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, index) => (
                <Badge 
                  key={index}
                  variant="outline" 
                  className="bg-secondary-50 text-secondary-600 border-secondary-200"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </div>

          {/* Related Courses */}
          <div className="pt-4 border-t border-gray-100">
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">
                {related_courses.length} related courses available
              </span>
              <Button asChild variant="ghost" className="text-primary-600 hover:text-primary-700">
                <Link href={`/careers/${encodeURIComponent(title.toLowerCase())}`}>
                  View Details
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
} 