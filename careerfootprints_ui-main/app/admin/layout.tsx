'use client';

import { useAuth } from '@/hooks/useAuth';
import { redirect } from 'next/navigation';
import { 
  LayoutGrid, 
  Users, 
  BookOpen, 
  Settings,
  BarChart2
} from 'lucide-react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';

const adminNavItems = [
  { icon: LayoutGrid, label: 'Dashboard', href: '/admin' },
  { icon: BookOpen, label: 'Courses', href: '/admin/courses' },
  { icon: Users, label: 'Users', href: '/admin/users' },
  { icon: BarChart2, label: 'Analytics', href: '/admin/analytics' },
  { icon: Settings, label: 'Settings', href: '/admin/settings' },
];

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { user, isAdmin } = useAuth();
  const pathname = usePathname();

  if (!user || !isAdmin) {
    redirect('/login');
  }

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Admin Sidebar */}
      <div className="w-64 bg-white border-r border-gray-200">
        <div className="p-6">
          <h2 className="text-lg font-semibold text-gray-900">Admin Panel</h2>
          <p className="text-sm text-gray-500">Manage your platform</p>
        </div>
        <nav className="px-4 space-y-1">
          {adminNavItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex items-center gap-3 px-3 py-2 rounded-lg transition-colors",
                  isActive 
                    ? "bg-primary-50 text-primary-600" 
                    : "text-gray-600 hover:bg-gray-50"
                )}
              >
                <item.icon className="h-5 w-5" />
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        {children}
      </div>
    </div>
  );
} 