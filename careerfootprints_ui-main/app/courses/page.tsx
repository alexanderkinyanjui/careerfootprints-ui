'use client';

import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Search,
  GraduationCap,
  BookOpen,
  Clock,
  Filter,
  X,
  SlidersHorizontal,
  Star,
  Calendar
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { courses } from '@/data/mock/courses';
import Link from 'next/link';

type FilterType = {
  level: string;
  university: string;
  duration: string;
  field: string;
};

export default function CoursesPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilters, setActiveFilters] = useState<FilterType>({
    level: '',
    university: '',
    duration: '',
    field: ''
  });

  const levels = ['Undergraduate', 'Postgraduate', 'Diploma', 'Certificate'];
  const universities = ['University of Nairobi', 'Strathmore University', 'JKUAT', 'KU'];
  const durations = ['1 year', '2 years', '3 years', '4 years', '5 years'];
  const fields = ['STEM', 'Business', 'Arts', 'Medicine', 'Education'];

  const clearFilters = () => {
    setActiveFilters({
      level: '',
      university: '',
      duration: '',
      field: ''
    });
  };

  const hasActiveFilters = Object.values(activeFilters).some(value => value !== '');

  return (
    <div className="container mx-auto p-6 space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Explore Courses</h1>
        <p className="mt-2 text-gray-600">
          Discover and compare university courses across Kenya
        </p>
      </div>

      {/* Search and Filter Section */}
      <Card className="p-6">
        <div className="space-y-6">
          {/* Search Bar */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <Input
              placeholder="Search courses by name, university, or field..."
              className="pl-10 pr-4 h-12"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          {/* Filter Controls */}
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <SlidersHorizontal className="h-4 w-4" />
              <span>Filter by:</span>
            </div>

            <Select
              value={activeFilters.level}
              onValueChange={(value) => setActiveFilters({ ...activeFilters, level: value })}
            >
              <SelectTrigger className="w-[160px]">
                <SelectValue placeholder="Level" />
              </SelectTrigger>
              <SelectContent>
                {levels.map((level) => (
                  <SelectItem key={level} value={level}>{level}</SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select
              value={activeFilters.university}
              onValueChange={(value) => setActiveFilters({ ...activeFilters, university: value })}
            >
              <SelectTrigger className="w-[200px]">
                <SelectValue placeholder="University" />
              </SelectTrigger>
              <SelectContent>
                {universities.map((uni) => (
                  <SelectItem key={uni} value={uni}>{uni}</SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select
              value={activeFilters.duration}
              onValueChange={(value) => setActiveFilters({ ...activeFilters, duration: value })}
            >
              <SelectTrigger className="w-[140px]">
                <SelectValue placeholder="Duration" />
              </SelectTrigger>
              <SelectContent>
                {durations.map((duration) => (
                  <SelectItem key={duration} value={duration}>{duration}</SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select
              value={activeFilters.field}
              onValueChange={(value) => setActiveFilters({ ...activeFilters, field: value })}
            >
              <SelectTrigger className="w-[140px]">
                <SelectValue placeholder="Field" />
              </SelectTrigger>
              <SelectContent>
                {fields.map((field) => (
                  <SelectItem key={field} value={field}>{field}</SelectItem>
                ))}
              </SelectContent>
            </Select>

            {hasActiveFilters && (
              <Button
                variant="ghost"
                size="sm"
                onClick={clearFilters}
                className="text-gray-500 hover:text-gray-700"
              >
                <X className="h-4 w-4 mr-1" />
                Clear filters
              </Button>
            )}
          </div>

          {/* Active Filters */}
          {hasActiveFilters && (
            <div className="flex flex-wrap gap-2">
              {Object.entries(activeFilters).map(([key, value]) => (
                value && (
                  <Badge
                    key={key}
                    variant="secondary"
                    className="px-3 py-1"
                  >
                    {value}
                    <X
                      className="h-3 w-3 ml-2 cursor-pointer"
                      onClick={() => setActiveFilters({ ...activeFilters, [key]: '' })}
                    />
                  </Badge>
                )
              ))}
            </div>
          )}
        </div>
      </Card>

      {/* Course Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course, i) => (
          <Card key={i} className="overflow-hidden hover:shadow-lg transition-shadow">
            <div className="p-6 space-y-4">
              {/* Header with Learning Mode */}
              <div className="flex items-start justify-between">
                <div className="flex-grow">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-2 py-1 bg-primary-50 text-primary-700 text-xs rounded-full">
                      {course.level}
                    </span>
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
                  <h3 className="font-semibold text-gray-900 line-clamp-2">
                    {course.title}
                  </h3>
                  <p className="text-sm text-gray-600 mt-1">
                    {course.university}
                  </p>
                </div>
                <Button variant="ghost" size="icon" className="text-primary-600">
                  <Star className="h-5 w-5" />
                </Button>
              </div>

              {/* Key Info */}
              <div className="space-y-2">
                <div className="flex items-center text-sm text-gray-600">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span>Next intake: {course.intake_dates[0]}</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Clock className="h-4 w-4 mr-2" />
                  <span>{course.duration}</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <BookOpen className="h-4 w-4 mr-2" />
                  <span>{course.field}</span>
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-1">
                {course.tags.slice(0, 3).map((tag, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 bg-gray-50 text-gray-600 text-xs rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <Separator />

              {/* Footer */}
              <div className="flex items-center justify-between pt-2">
                <div>
                  <p className="text-xs text-gray-500">Course Fee</p>
                  <p className="text-sm font-medium text-gray-900">{course.fee}</p>
                </div>
                <Button size="sm" asChild>
                  <Link href={`/courses/${course.id}`}>
                    View Details
                  </Link>
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
} 