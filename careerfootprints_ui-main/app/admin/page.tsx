'use client';

import { Card } from '@/components/ui/card';
import { 
  Users,
  BookOpen,
  GraduationCap,
  TrendingUp,
  UserCheck,
  School
} from 'lucide-react';
import { courses } from '@/data/mock/courses';

const stats = [
  {
    label: 'Total Courses',
    value: courses.length,
    icon: BookOpen,
    trend: '+12%',
    color: 'text-primary-600',
    bg: 'bg-primary-50'
  },
  {
    label: 'Active Users',
    value: '2,845',
    icon: Users,
    trend: '+5.2%',
    color: 'text-blue-600',
    bg: 'bg-blue-50'
  },
  {
    label: 'Applications',
    value: '486',
    icon: GraduationCap,
    trend: '+8.1%',
    color: 'text-green-600',
    bg: 'bg-green-50'
  },
  {
    label: 'Universities',
    value: '24',
    icon: School,
    trend: '+2',
    color: 'text-purple-600',
    bg: 'bg-purple-50'
  }
];

export default function AdminDashboard() {
  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Dashboard Overview</h1>
        <p className="text-gray-500">Welcome to your admin dashboard</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat) => (
          <Card key={stat.label} className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className={`${stat.bg} p-3 rounded-lg`}>
                <stat.icon className={`h-6 w-6 ${stat.color}`} />
              </div>
              <div className="flex items-center text-sm text-green-600">
                <TrendingUp className="h-4 w-4 mr-1" />
                {stat.trend}
              </div>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-1">
              {stat.value}
            </h3>
            <p className="text-gray-500 text-sm">{stat.label}</p>
          </Card>
        ))}
      </div>

      {/* Recent Activity */}
      <Card className="p-6">
        <h2 className="text-lg font-semibold mb-4">Recent Activity</h2>
        <div className="space-y-4">
          {[1, 2, 3].map((_, i) => (
            <div key={i} className="flex items-center gap-4 p-3 rounded-lg hover:bg-gray-50">
              <div className="h-10 w-10 rounded-full bg-primary-50 flex items-center justify-center">
                <UserCheck className="h-5 w-5 text-primary-500" />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-900">
                  New course application
                </p>
                <p className="text-sm text-gray-500">
                  John Doe applied for Master's in Data Science
                </p>
              </div>
              <span className="ml-auto text-sm text-gray-500">2 hours ago</span>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
} 