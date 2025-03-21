export interface Course {
  id: string;
  title: string;
  university: string;
  level: string;
  duration: string;
  field: string;
  fee: string;
  description: string;
  requirements: string;
  career_prospects: string[];
  intake_dates: string[];
  application_deadline?: string;
  learning_mode: 'Full-time' | 'Part-time' | 'Online' | 'Hybrid';
  accreditation: string[];
  tags: string[];
}

export const courses: Course[] = [
  {
    id: '1',
    title: "Bachelor of Computer Science",
    university: "University of Nairobi",
    level: "Undergraduate",
    duration: "4 years",
    field: "STEM",
    fee: "KES 480,000 per year",
    description: "A comprehensive program covering software development, algorithms, and computer systems.",
    requirements: "C+ in KCSE, B in Mathematics and Physics",
    career_prospects: [
      "Software Developer",
      "Systems Analyst",
      "Data Scientist",
      "IT Consultant"
    ],
    intake_dates: ["September 2024", "January 2025"],
    application_deadline: "July 30, 2024",
    learning_mode: "Full-time",
    accreditation: ["CUE", "Computer Society of Kenya"],
    tags: ["STEM", "Technology", "Programming"]
  },
  {
    id: '2',
    title: "Master's in Data Science",
    university: "Strathmore University",
    level: "Postgraduate",
    duration: "2 years",
    field: "STEM",
    fee: "KES 580,000 per year",
    description: "Advanced program in data analysis, machine learning, and statistical computing.",
    requirements: "Bachelor's degree in related field, 2.7 GPA",
    career_prospects: [
      "Data Scientist",
      "Machine Learning Engineer",
      "Business Intelligence Analyst"
    ],
    intake_dates: ["September 2024"],
    application_deadline: "June 15, 2024",
    learning_mode: "Hybrid",
    accreditation: ["CUE", "Kenya Data Scientists Association"],
    tags: ["STEM", "Analytics", "AI"]
  },
  {
    id: '3',
    title: "Bachelor of Business Information Technology",
    university: "JKUAT",
    level: "Undergraduate",
    duration: "4 years",
    field: "Business & Technology",
    fee: "KES 420,000 per year",
    description: "Integration of business principles with information technology.",
    requirements: "C+ in KCSE, C+ in Mathematics",
    career_prospects: [
      "Business Analyst",
      "IT Project Manager",
      "Systems Administrator"
    ],
    intake_dates: ["September 2024", "January 2025"],
    application_deadline: "August 15, 2024",
    learning_mode: "Full-time",
    accreditation: ["CUE", "ICTA Kenya"],
    tags: ["Business", "Technology", "Management"]
  },
  {
    id: '4',
    title: "Bachelor of Medicine and Surgery",
    university: "University of Nairobi",
    level: "Undergraduate",
    duration: "6 years",
    field: "Medicine",
    fee: "KES 720,000 per year",
    description: "Comprehensive medical training program leading to medical practice.",
    requirements: "A- in KCSE, A in Biology and Chemistry",
    career_prospects: [
      "Medical Doctor",
      "Surgeon",
      "Medical Researcher",
      "Healthcare Administrator"
    ],
    intake_dates: ["September 2024"],
    application_deadline: "May 30, 2024",
    learning_mode: "Full-time",
    accreditation: ["CUE", "Kenya Medical Practitioners Board"],
    tags: ["Medicine", "Healthcare", "STEM"]
  },
  {
    id: '5',
    title: "Diploma in Digital Marketing",
    university: "KU",
    level: "Diploma",
    duration: "2 years",
    field: "Business",
    fee: "KES 280,000 per year",
    description: "Practical training in digital marketing strategies and tools.",
    requirements: "C in KCSE",
    career_prospects: [
      "Digital Marketing Specialist",
      "Social Media Manager",
      "Content Strategist"
    ],
    intake_dates: ["September 2024", "January 2025", "May 2025"],
    application_deadline: "Rolling admission",
    learning_mode: "Hybrid",
    accreditation: ["TVETA", "Digital Marketing Institute"],
    tags: ["Marketing", "Digital", "Business"]
  },
  {
    id: '6',
    title: "Bachelor of Education Arts",
    university: "KU",
    level: "Undergraduate",
    duration: "4 years",
    field: "Education",
    fee: "KES 360,000 per year",
    description: "Teacher training program specializing in arts subjects.",
    requirements: "C+ in KCSE, C+ in English",
    career_prospects: [
      "Secondary School Teacher",
      "Education Administrator",
      "Curriculum Developer"
    ],
    intake_dates: ["September 2024", "January 2025"],
    application_deadline: "July 15, 2024",
    learning_mode: "Full-time",
    accreditation: ["CUE", "Teachers Service Commission"],
    tags: ["Education", "Arts", "Teaching"]
  }
]; 