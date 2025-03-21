'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { User, Target } from 'lucide-react';
import { AssessmentCard } from '@/components/ui/assessment-card';

export default function CareerAssessment() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const router = useRouter();

  // For demo, use static questions
  const questions = [
    // Add sample questions
  ];

  const handleComplete = () => {
    router.push('/assessment/results');
  };

  return (
    <div className="max-w-4xl mx-auto py-8">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold mb-4">Career Assessment</h1>
        <p className="text-gray-600">
          Discover your ideal career path through our comprehensive assessment
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <AssessmentCard
          title="Personality Assessment"
          description="Understand your work style and preferences"
          icon={User}
          duration="15 mins"
        />
        <AssessmentCard
          title="Skills Assessment"
          description="Evaluate your technical and soft skills"
          icon={Target}
          duration="20 mins"
        />
        {/* More assessment types */}
      </div>
    </div>
  );
} 