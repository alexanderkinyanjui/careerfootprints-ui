'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Course } from '@/data/mock/courses';
import { 
  Card,
  CardContent,
  CardHeader,
  CardTitle 
} from '@/components/ui/card';

interface CourseFormProps {
  course?: Course;
  onSubmit: (data: Partial<Course>) => void;
  onCancel: () => void;
}

export function CourseForm({ course, onSubmit, onCancel }: CourseFormProps) {
  const [formData, setFormData] = useState<Partial<Course>>(course || {
    title: '',
    university: '',
    faculty: '',
    level: 'Bachelors',
    description: '',
    duration: '',
    learning_mode: 'Campus',
    entry_requirements: [],
    modules: [],
    fee_structure: {
      total: 0,
      details: ''
    },
    career_paths: [],
    enrollment_cycle: {
      start_date: '',
      end_date: ''
    }
  });

  return (
    <div className="max-w-4xl mx-auto p-6">
      <Card>
        <CardHeader>
          <CardTitle>{course ? 'Edit Course' : 'Add New Course'}</CardTitle>
        </CardHeader>
        <CardContent>
          <form className="space-y-6" onSubmit={(e) => {
            e.preventDefault();
            onSubmit(formData);
          }}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium">Course Title</label>
                <Input
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  placeholder="Enter course title"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">University</label>
                <Input
                  value={formData.university}
                  onChange={(e) => setFormData({ ...formData, university: e.target.value })}
                  placeholder="Enter university name"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Level</label>
                <Select
                  value={formData.level}
                  onValueChange={(value) => setFormData({ ...formData, level: value as Course['level'] })}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select level" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Bachelors">Bachelor's</SelectItem>
                    <SelectItem value="Masters">Master's</SelectItem>
                    <SelectItem value="Doctorate">Doctorate</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Learning Mode</label>
                <Select
                  value={formData.learning_mode}
                  onValueChange={(value) => setFormData({ ...formData, learning_mode: value as Course['learning_mode'] })}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select mode" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Online">Online</SelectItem>
                    <SelectItem value="Campus">Campus</SelectItem>
                    <SelectItem value="Hybrid">Hybrid</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Description</label>
              <Textarea
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                placeholder="Enter course description"
                rows={4}
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Total Fee</label>
              <Input
                type="number"
                value={formData.fee_structure?.total}
                onChange={(e) => setFormData({
                  ...formData,
                  fee_structure: {
                    ...formData.fee_structure,
                    total: Number(e.target.value)
                  }
                })}
                placeholder="Enter total fee"
              />
            </div>

            <div className="flex justify-end gap-4">
              <Button variant="outline" onClick={onCancel}>
                Cancel
              </Button>
              <Button type="submit">
                {course ? 'Update Course' : 'Add Course'}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
} 