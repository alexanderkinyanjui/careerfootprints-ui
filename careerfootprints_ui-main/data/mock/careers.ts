export interface Career {
  id: string;
  title: string;
  description: string;
  industry: string;
  required_skills: string[];
  recommended_courses: string[];
  salary_range: {
    min: number;
    max: number;
    currency: string;
  };
  job_outlook: string;
  growth_potential: string[];
  responsibilities: string[];
}

export const careers: Career[] = [
  {
    id: '1',
    title: 'Software Engineer',
    description: 'Design, develop and maintain software applications and systems.',
    industry: 'Technology & IT Services',
    required_skills: [
      'Programming',
      'Problem Solving',
      'Software Design',
      'Version Control',
      'Testing'
    ],
    recommended_courses: [
      'Computer Science',
      'Software Engineering',
      'Information Technology'
    ],
    salary_range: {
      min: 60000,
      max: 250000,
      currency: 'KES'
    },
    job_outlook: 'High demand with continued growth expected',
    growth_potential: [
      'Senior Software Engineer',
      'Technical Lead',
      'Software Architect',
      'Engineering Manager'
    ],
    responsibilities: [
      'Write clean, maintainable code',
      'Collaborate with cross-functional teams',
      'Debug and fix software issues',
      'Participate in code reviews'
    ]
  },
  {
    id: '2',
    title: 'Financial Analyst',
    description: 'Analyze financial data and market trends to guide business decisions.',
    industry: 'Financial Services',
    required_skills: [
      'Financial Modeling',
      'Data Analysis',
      'Excel',
      'Financial Reporting',
      'Business Acumen'
    ],
    recommended_courses: [
      'Finance',
      'Economics',
      'Business Administration',
      'Commerce'
    ],
    salary_range: {
      min: 50000,
      max: 200000,
      currency: 'KES'
    },
    job_outlook: 'Steady growth with increasing demand',
    growth_potential: [
      'Senior Financial Analyst',
      'Investment Manager',
      'Finance Manager',
      'CFO'
    ],
    responsibilities: [
      'Prepare financial reports',
      'Analyze market trends',
      'Develop financial models',
      'Present findings to stakeholders'
    ]
  }
]; 