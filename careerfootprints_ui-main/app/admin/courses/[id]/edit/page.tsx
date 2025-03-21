'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Course } from '@/data/mock/courses';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { useAuth } from '@/hooks/useAuth';

export default function EditCourse({ params }: { params: { id: string } }) {
  const router = useRouter();
  const { isAdmin } = useAuth();
  const [course, setCourse] = useState<Course | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // In real app, fetch from API
    const mockCourse = courses.find(c => c.id === params.id);
    setCourse(mockCourse || null);
    setLoading(false);
  }, [params.id]);

  if (!isAdmin) {
    router.push('/courses');
    return null;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!course) {
    return <div>Course not found</div>;
  }

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Edit Course</h1>
      <CourseForm 
        initialData={course}
        onSubmit={async (data) => {
          // TODO: Implement update functionality
          console.log('Update course:', data);
          router.push('/courses');
        }}
      />
    </div>
  );
} 