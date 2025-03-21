export const personalityQuestions = [
  {
    id: 1,
    question: "How do you prefer to work on projects?",
    options: [
      { value: "independent", label: "Independently", trait: "autonomy" },
      { value: "team", label: "As part of a team", trait: "collaboration" },
      { value: "mixed", label: "A mix of both", trait: "adaptability" }
    ]
  },
  {
    id: 2,
    question: "When solving problems, you typically:",
    options: [
      { value: "analytical", label: "Analyze data and facts", trait: "analytical" },
      { value: "creative", label: "Think outside the box", trait: "creativity" },
      { value: "practical", label: "Focus on practical solutions", trait: "pragmatic" }
    ]
  },
  {
    id: 3,
    question: "In a leadership role, you prefer to:",
    options: [
      { value: "directive", label: "Give clear directions", trait: "leadership" },
      { value: "collaborative", label: "Make decisions as a team", trait: "teamwork" },
      { value: "delegative", label: "Delegate and trust others", trait: "empowerment" }
    ]
  },
  // Add more relevant questions...
];

export interface AssessmentResult {
  traits: Record<string, number>;
  recommendedCareers: string[];
  suggestedCourses: string[];
} 