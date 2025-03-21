export const sidebarLinks = [
  {
    imgURL: "/icons/home.svg",
    route: "/",
    label: "Home",
  },
  {
    imgURL: "/icons/courses.svg",
    route: "/programs",
    label: "Courses",
  },
  {
    imgURL: "/icons/careers.svg",
    route: "/careers",
    label: "Careers",
  }
];

export const userTypes = [
  'University Student',
  'Recent Graduate',
  'Career Professional',
  'Employer/Recruiter',
  'Educator/Trainer',
  'Entrepreneur'
] as const

export type UserType = typeof userTypes[number]

export interface SignUpFormData {
  firstName: string;
  lastName: string;
  email: string;
  userType: UserType;
  dateOfBirth: string;
  password: string;
}

export interface signInProps {
  email: string
  password: string
}

export interface signUpProps {
  firstname: string,
  lastname: string,
  email: string,
  userType: UserType,
  dateOfBirth: string,
  password: string
}

export interface User {
  id: string,
  email: string,
  firstname: string,
  lastname: string,
  user_type: UserType,
  date_of_birth: string,
  created_at: string
}

export interface TransactionsQueryParams {
  poolId?: string;
  search?: string;
  page?: number;
  pageSize?: number;
}

export interface CreatePoolParams {
  name: string;
  description: string;
  target_amount: number;
  end_date: Date;
}

