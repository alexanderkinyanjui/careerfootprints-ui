import { Metadata } from 'next';
import { courses } from '@/data/mock/courses';
import { notFound } from 'next/navigation';
import { CourseDetailContent } from './CourseDetailContent';

interface CoursePageProps {
  params: {
    id: string;
  };
}

export async function generateMetadata({ params }: CoursePageProps): Promise<Metadata> {
  const course = courses.find(c => c.id === params.id);
  
  if (!course) {
    return {
      title: 'Course Not Found',
      description: 'The requested course could not be found'
    };
  }

  return {
    title: `${course.title} | CareerFootprints`,
    description: course.description
  };
}

export default async function CoursePage({ params }: CoursePageProps) {
  const course = courses.find(c => c.id === params.id);

  if (!course) {
    notFound();
  }

  return <CourseDetailContent course={course} />;
} 