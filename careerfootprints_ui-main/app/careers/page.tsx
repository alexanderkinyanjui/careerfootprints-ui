'use client';

import { useState } from 'react';
import { CareerCard } from '@/components/CareerCard';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search, Filter } from 'lucide-react';

const mockCareers = [
  {
    title: "Software Engineer",
    description: "Design, develop and maintain software applications and systems",
    skills: ["JavaScript", "Python", "System Design", "Problem Solving"],
    salary_range: {
      min: 800000,
      max: 2500000
    },
    growth_rate: "15% annual",
    education: ["Bachelor's in Computer Science", "Related Technical Field"],
    related_courses: ["BSc Computer Science", "Software Engineering", "Information Technology"]
  },
  {
    title: "Data Analyst",
    description: "Analyze complex data sets to identify trends and patterns",
    skills: ["SQL", "Python", "Data Visualization", "Statistical Analysis"],
    salary_range: {
      min: 600000,
      max: 1800000
    },
    growth_rate: "12% annual",
    education: ["Bachelor's in Statistics", "Data Science", "Related Field"],
    related_courses: ["BSc Data Science", "Business Analytics", "Statistics"]
  }
  // Add more careers...
];

export default function CareersPage() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredCareers = mockCareers.filter(career =>
    career.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    career.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4">Explore Careers</h1>
        <p className="text-gray-600 mb-6">
          Discover career opportunities and find courses that align with your career goals
        </p>
        
        <div className="flex gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <Input
              placeholder="Search careers..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          <Button variant="outline">
            <Filter className="h-5 w-5 mr-2" />
            Filters
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredCareers.map((career, index) => (
          <CareerCard key={index} {...career} />
        ))}
      </div>
    </div>
  );
} 