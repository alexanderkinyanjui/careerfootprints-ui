'use client';

import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';

const questions = [
  {
    id: 1,
    question: "How do you prefer to work on projects?",
    options: [
      { value: "independent", label: "Independently" },
      { value: "team", label: "As part of a team" },
      { value: "mixed", label: "A mix of both" }
    ]
  },
  // Add more questions...
];

export default function PersonalityAssessment() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});

  const progress = (currentQuestion / questions.length) * 100;

  const handleAnswer = (value: string) => {
    setAnswers(prev => ({ ...prev, [currentQuestion]: value }));
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(prev => prev - 1);
    }
  };

  const handleSubmit = () => {
    // Process answers and redirect to results
    console.log(answers);
  };

  return (
    <div className="max-w-2xl mx-auto py-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold mb-2">Personality Assessment</h1>
        <p className="text-gray-600 mb-4">
          Question {currentQuestion + 1} of {questions.length}
        </p>
        <Progress value={progress} className="h-2" />
      </div>

      <Card className="p-6">
        <h2 className="text-xl font-semibold mb-6">
          {questions[currentQuestion].question}
        </h2>

        <RadioGroup
          value={answers[currentQuestion]}
          onValueChange={handleAnswer}
          className="space-y-4"
        >
          {questions[currentQuestion].options.map((option) => (
            <div key={option.value} className="flex items-center space-x-2">
              <RadioGroupItem value={option.value} id={option.value} />
              <Label htmlFor={option.value}>{option.label}</Label>
            </div>
          ))}
        </RadioGroup>

        <div className="flex justify-between mt-8">
          <Button
            variant="outline"
            onClick={handlePrevious}
            disabled={currentQuestion === 0}
          >
            Previous
          </Button>
          {currentQuestion === questions.length - 1 ? (
            <Button onClick={handleSubmit}>
              Submit
            </Button>
          ) : (
            <Button 
              onClick={handleNext}
              disabled={!answers[currentQuestion]}
            >
              Next
            </Button>
          )}
        </div>
      </Card>
    </div>
  );
} 