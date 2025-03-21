import { Course } from '@/data/mock/courses';
import Link from 'next/link';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Clock, GraduationCap, MapPin, ArrowRight } from 'lucide-react';

interface CourseCardProps {
  course: Course;
  isAdmin?: boolean;
}

export function CourseCard({ course }: CourseCardProps) {
  return (
    <Card className="group hover:shadow-lg transition-all duration-300 hover:border-primary-200">
      <CardHeader>
        <div className="flex items-start justify-between">
          <div>
            <Badge variant="outline" className="mb-2 bg-primary-50 text-primary-600 border-primary-200">
              {course.faculty}
            </Badge>
            <CardTitle className="text-lg line-clamp-2 group-hover:text-primary-600 transition-colors">
              {course.title}
            </CardTitle>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex items-center text-sm text-gray-500">
            <MapPin className="h-4 w-4 mr-2 text-primary-500" />
            {course.university}
          </div>
          <div className="flex items-center text-sm text-gray-500">
            <Clock className="h-4 w-4 mr-2 text-primary-500" />
            {course.duration}
          </div>
          <div className="flex items-center text-sm text-gray-500">
            <GraduationCap className="h-4 w-4 mr-2 text-primary-500" />
            {course.learning_mode}
          </div>
          
          <p className="text-sm text-gray-600 line-clamp-3">
            {course.description}
          </p>

          <div className="mt-4">
            <p className="text-sm font-medium mb-2">Career Paths:</p>
            <div className="flex flex-wrap gap-1">
              {course.career_paths.slice(0, 3).map((path, index) => (
                <Badge key={index} variant="secondary" className="bg-secondary-50 text-secondary-600 border-secondary-200">
                  {path}
                </Badge>
              ))}
              {course.career_paths.length > 3 && (
                <Badge variant="secondary" className="bg-secondary-50 text-secondary-600 border-secondary-200">
                  +{course.career_paths.length - 3} more
                </Badge>
              )}
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between items-center">
        <div>
          <p className="text-sm text-gray-500">Total Fee</p>
          <p className="text-lg font-semibold text-primary-600">
            KES {course.fee_structure.total.toLocaleString()}
          </p>
        </div>
        <Link 
          href={`/courses/${course.id}`}
          className="flex items-center text-sm text-primary-600 hover:text-primary-700 font-medium"
        >
          Learn More
          <ArrowRight className="ml-1 h-4 w-4" />
        </Link>
      </CardFooter>
    </Card>
  );
} 