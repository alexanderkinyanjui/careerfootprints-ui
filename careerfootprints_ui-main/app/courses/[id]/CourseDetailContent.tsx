'use client';

import { useEffect, useState } from 'react';
import { Course } from '@/data/mock/courses';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { LoadingSpinner } from '@/components/ui/loading-spinner';
import Link from 'next/link';
import { 
  Clock, 
  GraduationCap, 
  MapPin, 
  Calendar,
  CheckCircle2,
  Wallet,
  BookOpen,
  Building2,
  ArrowRight,
  FileText,
  Award,
  Star,
  Building,
  BriefcaseIcon,
  AlertCircle
} from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useAuth } from '@/hooks/useAuth';
import { courses } from '@/data/mock/courses';
import { Separator } from '@/components/ui/separator';

interface CourseDetailContentProps {
  course: Course;
}

export function CourseDetailContent({ course }: CourseDetailContentProps) {
  const { user } = useAuth();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        // In production, this would be an API call
        const foundCourse = courses.find(c => c.id === course.id);
        if (foundCourse) {
          setLoading(false);
        }
      } catch (error) {
        console.error('Error fetching course:', error);
      }
    };

    fetchCourse();
  }, [course.id]);

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="container mx-auto p-6 space-y-8">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <Badge variant="secondary">{course.level}</Badge>
            <Badge variant="outline">{course.learning_mode}</Badge>
          </div>
          <h1 className="text-3xl font-bold text-gray-900">{course.title}</h1>
          <p className="mt-2 text-lg text-gray-600">{course.university}</p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline" size="icon">
            <Star className="h-5 w-5" />
          </Button>
          <Button size="lg">Apply Now</Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { icon: Clock, label: 'Duration', value: course.duration },
              { icon: Calendar, label: 'Next Intake', value: course.intake_dates[0] },
              { icon: Wallet, label: 'Fee', value: course.fee }
            ].map((stat, i) => (
              <Card key={i} className="p-4">
                <stat.icon className="h-5 w-5 text-primary-500 mb-2" />
                <p className="text-sm text-gray-500">{stat.label}</p>
                <p className="font-medium text-gray-900">{stat.value}</p>
              </Card>
            ))}
          </div>

          {/* Overview */}
          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-4">Course Overview</h2>
            <p className="text-gray-600 leading-relaxed">{course.description}</p>
          </Card>

          {/* Requirements */}
          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-4">Entry Requirements</h2>
            <div className="space-y-2">
              {course.requirements.split(',').map((req, i) => (
                <div key={i} className="flex items-start gap-2 text-gray-600">
                  <CheckCircle2 className="h-5 w-5 text-primary-500 mt-0.5" />
                  <span>{req.trim()}</span>
                </div>
              ))}
            </div>
          </Card>

          {/* Career Prospects */}
          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-4">Career Prospects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {course.career_prospects.map((prospect, index) => (
                <div key={index} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                  <BriefcaseIcon className="h-5 w-5 text-primary-500" />
                  <span className="text-gray-700">{prospect}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Key Dates */}
          <Card className="p-6">
            <h3 className="font-semibold mb-4">Important Dates</h3>
            <div className="space-y-4">
              <div>
                <label className="text-sm text-gray-500">Application Deadline</label>
                <div className="flex items-center gap-2 mt-1">
                  <AlertCircle className="h-5 w-5 text-amber-500" />
                  <p className="font-medium text-gray-900">{course.application_deadline}</p>
                </div>
              </div>
              <Separator />
              <div>
                <label className="text-sm text-gray-500">Intake Dates</label>
                <div className="space-y-2 mt-1">
                  {course.intake_dates.map((date, index) => (
                    <div key={index} className="flex items-center gap-2 text-gray-600">
                      <Calendar className="h-4 w-4" />
                      <span>{date}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Card>

          {/* Tags */}
          <Card className="p-6">
            <h3 className="font-semibold mb-4">Course Tags</h3>
            <div className="flex flex-wrap gap-2">
              {course.tags.map((tag, index) => (
                <Badge key={index} variant="secondary">
                  {tag}
                </Badge>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
} 