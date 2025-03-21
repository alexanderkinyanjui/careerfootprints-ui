export type UserType = 
  | 'University Student'
  | 'Recent Graduate'
  | 'Career Professional'
  | 'Employer/Recruiter'
  | 'Educator/Trainer'
  | 'Entrepreneur'
  | 'Other';

export interface RegistrationData {
  email: string;
  password: string;
  userType: UserType;
  fullName: string;
  phone?: string;
} 