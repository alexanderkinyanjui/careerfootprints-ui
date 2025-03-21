'use client';

import { useAuth } from '@/hooks/useAuth';
import { DashboardCard } from '@/components/ui/dashboard-card';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Star, 
  GraduationCap, 
  BookOpen,
  Clock,
  ArrowRight,
  Search,
  History,
  BrainCircuit,
  ChevronRight,
  CheckCircle2,
  Calendar
} from 'lucide-react';
import Link from 'next/link';

export default function Dashboard() {
  const { user } = useAuth();

  const stats = [
    {
      title: 'Starred Courses',
      value: '5',
      icon: Star,
      trend: {
        value: '2 with deadlines soon',
        positive: true
      }
    },
    {
      title: 'Recently Viewed',
      value: '8',
      icon: History,
      trend: {
        value: 'This week',
        positive: true
      }
    },
    {
      title: 'Matching Courses',
      value: '12',
      icon: CheckCircle2,
      trend: {
        value: 'Based on your profile',
        positive: true
      }
    }
  ];

  const starredCourses = [
    {
      title: "Master's in Data Science",
      university: "University of Nairobi",
      status: "Applications Open",
      deadline: "2024 Intake closes in 2 months",
      fee: "KES 580,000 per year",
      duration: "2 years",
      requirements: "Bachelor's in related field, CGPA 2.7",
      tags: ["STEM", "Postgraduate"]
    },
    {
      title: "Bachelor of Computer Science",
      university: "Strathmore University",
      status: "High Priority",
      deadline: "Early admission closes in 1 month",
      fee: "KES 485,000 per year",
      duration: "4 years",
      requirements: "C+ in Mathematics and English",
      tags: ["STEM", "Undergraduate"]
    },
    {
      title: "Bachelor of Business Information Technology",
      university: "JKUAT",
      status: "Apply Soon",
      deadline: "Regular admission closes in 3 weeks",
      fee: "KES 420,000 per year",
      duration: "4 years",
      requirements: "C+ in Mathematics and English",
      tags: ["Business", "Technology"]
    }
  ];

  const courses = [
    {
      id: 1,
      title: "Master's in Data Science",
      university: "University of Nairobi",
      learning_mode: "Online",
      duration: "2 years",
      intake_dates: ["January 2024", "July 2024"],
      level: "Postgraduate"
    },
    {
      id: 2,
      title: "Bachelor of Computer Science",
      university: "Strathmore University",
      learning_mode: "Hybrid",
      duration: "4 years",
      intake_dates: ["January 2024", "July 2024"],
      level: "Undergraduate"
    },
    {
      id: 3,
      title: "Bachelor of Business Information Technology",
      university: "JKUAT",
      learning_mode: "On-campus",
      duration: "4 years",
      intake_dates: ["January 2024", "July 2024"],
      level: "Undergraduate"
    }
  ];

  return (
    <div className="container mx-auto p-6 space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Welcome back, {user?.email}</h1>
        <p className="text-gray-600">Track your university course interests and applications</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((stat) => (
          <DashboardCard key={stat.title} {...stat} />
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          {/* Starred Courses */}
          <Card className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold">Starred Courses</h2>
              <Button variant="ghost" size="sm" asChild>
                <Link href="/courses">View All<ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
            </div>
            <div className="space-y-4">
              {starredCourses.map((course, i) => (
                <div key={i} className="p-4 rounded-lg hover:bg-gray-50 border border-gray-100">
                  <div className="flex items-start gap-4">
                    <div className="h-10 w-10 rounded-lg bg-primary-50 flex items-center justify-center flex-shrink-0">
                      <BookOpen className="h-5 w-5 text-primary-500" />
                    </div>
                    <div className="flex-grow">
                      <div className="flex items-center justify-between">
                        <p className="text-sm font-medium text-gray-900">{course.title}</p>
                        <span className={`text-xs px-2 py-1 rounded-full ${
                          course.status === 'High Priority' 
                            ? 'bg-red-100 text-red-700'
                            : course.status === 'Apply Soon'
                            ? 'bg-amber-100 text-amber-700'
                            : 'bg-green-100 text-green-700'
                        }`}>
                          {course.status}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600">{course.university}</p>
                      <div className="mt-2 flex flex-wrap gap-2 text-xs">
                        <span className="text-amber-600 flex items-center">
                          <Clock className="h-3 w-3 mr-1" />
                          {course.deadline}
                        </span>
                        <span className="text-gray-500">•</span>
                        <span className="text-gray-600">{course.fee}</span>
                        <span className="text-gray-500">•</span>
                        <span className="text-gray-600">{course.duration}</span>
                      </div>
                      <div className="mt-2 flex gap-2">
                        {course.tags.map((tag, index) => (
                          <span key={index} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Recommended Courses */}
          <Card className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold">Recommended Courses</h2>
              <Button variant="ghost" size="sm" asChild>
                <Link href="/courses">
                  View All
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="space-y-4">
              {courses.slice(0, 3).map((course, i) => (
                <div key={i} className="flex items-start gap-4 p-4 rounded-lg border border-gray-100 hover:bg-gray-50">
                  <div className="h-10 w-10 rounded-lg bg-primary-50 flex items-center justify-center">
                    <GraduationCap className="h-5 w-5 text-primary-500" />
                  </div>
                  <div className="flex-grow min-w-0">
                    <div className="flex items-center gap-2">
                      <h3 className="font-medium text-gray-900 truncate">
                        {course.title}
                      </h3>
                      <span className={`px-2 py-1 text-xs rounded-full ${
                        course.learning_mode === 'Online' 
                          ? 'bg-blue-50 text-blue-700'
                          : course.learning_mode === 'Hybrid'
                          ? 'bg-purple-50 text-purple-700'
                          : 'bg-green-50 text-green-700'
                      }`}>
                        {course.learning_mode}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 mb-1">{course.university}</p>
                    <div className="flex items-center gap-4 text-sm">
                      <span className="text-gray-500 flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {course.duration}
                      </span>
                      <span className="text-gray-500 flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        Next intake: {course.intake_dates[0]}
                      </span>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm" asChild>
                    <Link href={`/courses/${course.id}`}>
                      View
                    </Link>
                  </Button>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Right column */}
        <div className="space-y-6">
          {/* Career Aptitude Test CTA */}
          <Card className="p-6 bg-gradient-to-br from-primary-50 to-secondary-50 border-none">
            <div className="flex items-center gap-4 mb-4">
              <div className="h-12 w-12 rounded-full bg-primary-100 flex items-center justify-center">
                <BrainCircuit className="h-6 w-6 text-primary-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Career Aptitude Test</h3>
                <p className="text-sm text-gray-600">Coming Soon!</p>
              </div>
            </div>
            <p className="text-sm text-gray-600 mb-4">
              Take our comprehensive aptitude test to discover courses that match your interests and abilities.
            </p>
            <Button className="w-full" variant="outline">
              Get Notified
            </Button>
          </Card>

          {/* Recently Viewed */}
          <Card className="p-6">
            <h3 className="font-semibold mb-4">Recently Viewed</h3>
            <div className="space-y-3">
              {starredCourses.map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-sm">
                  <History className="h-4 w-4 text-gray-400" />
                  <div>
                    <p className="font-medium text-gray-900">{item.title}</p>
                    <p className="text-gray-500 text-xs">{item.university}</p>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Profile Completion */}
          <Card className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-semibold">Complete Your Profile</h2>
              <Button variant="ghost" size="sm" asChild>
                <Link href="/profile">
                  Edit
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Academic Background</span>
                  <span className="font-medium">80%</span>
                </div>
                <div className="h-2 bg-gray-100 rounded-full">
                  <div className="h-2 bg-primary-500 rounded-full w-4/5" />
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Required Documents</span>
                  <span className="font-medium">40%</span>
                </div>
                <div className="h-2 bg-gray-100 rounded-full">
                  <div className="h-2 bg-primary-500 rounded-full w-2/5" />
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
} 