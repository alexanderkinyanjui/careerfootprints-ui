export * from './courses';
export * from './careers';

// If you need a combined data structure, use the exported types
import type { Course } from './courses';
import type { Career } from './careers';

export const mockData: {
  courses: Course[];
  careers: Career[];
} = {
  courses: mockCourses,
  careers: mockCareers
}; 