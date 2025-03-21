'use client';

import { useEffect, useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  BarChart,
  BookOpen,
  GraduationCap,
  Download,
  Share2 
} from 'lucide-react';
import { CourseCard } from '@/components/CourseCard';
import { courses } from '@/data/mock/courses';

export default function AssessmentResults() {
  const [results, setResults] = useState<AssessmentResult | null>(null);

  useEffect(() => {
    // In real app, fetch from API or context
    const mockResults = {
      traits: {
        analytical: 85,
        creativity: 65,
        leadership: 75,
        teamwork: 80,
        adaptability: 70
      },
      recommendedCareers: [
        "Data Analyst",
        "Project Manager",
        "Business Consultant"
      ],
      suggestedCourses: courses.slice(0, 3).map(c => c.id)
    };
    setResults(mockResults);
  }, []);

  if (!results) return <div>Loading...</div>;

  return (
    <div className="max-w-7xl mx-auto py-8">
      <div className="mb-8 flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold mb-2">Your Assessment Results</h1>
          <p className="text-gray-600">
            Based on your responses, here's a personalized analysis of your career preferences
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            <Download className="h-4 w-4 mr-2" />
            Download Report
          </Button>
          <Button variant="outline" size="sm">
            <Share2 className="h-4 w-4 mr-2" />
            Share Results
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Personality Traits */}
          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-6 flex items-center">
              <BarChart className="h-5 w-5 mr-2 text-primary-500" />
              Your Key Traits
            </h2>
            <div className="space-y-4">
              {Object.entries(results.traits).map(([trait, score]) => (
                <div key={trait}>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium capitalize">{trait}</span>
                    <span className="text-sm text-gray-500">{score}%</span>
                  </div>
                  <div className="h-2 bg-gray-100 rounded-full">
                    <div 
                      className="h-2 bg-primary-500 rounded-full"
                      style={{ width: `${score}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Recommended Courses */}
          <div>
            <h2 className="text-xl font-semibold mb-6 flex items-center">
              <BookOpen className="h-5 w-5 mr-2 text-primary-500" />
              Recommended Courses
            </h2>
            <div className="grid gap-6">
              {courses
                .filter(course => results.suggestedCourses.includes(course.id))
                .map(course => (
                  <CourseCard key={course.id} course={course} />
                ))
              }
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-6 flex items-center">
              <GraduationCap className="h-5 w-5 mr-2 text-primary-500" />
              Career Recommendations
            </h2>
            <div className="space-y-3">
              {results.recommendedCareers.map((career, index) => (
                <div 
                  key={index}
                  className="p-3 rounded-lg border border-primary-100 bg-primary-50"
                >
                  <span className="text-gray-700">{career}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
} 