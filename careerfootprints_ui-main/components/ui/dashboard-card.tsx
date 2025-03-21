import { LucideIcon } from 'lucide-react';
import { Card } from '@/components/ui/card';

interface DashboardCardProps {
  title: string;
  value: string | number;
  description?: string;
  icon: LucideIcon;
  trend?: {
    value: string;
    positive: boolean;
  };
}

export function DashboardCard({
  title,
  value,
  description,
  icon: Icon,
  trend
}: DashboardCardProps) {
  return (
    <Card className="p-6">
      <div className="flex items-center justify-between mb-4">
        <div className="p-2 bg-primary-50 rounded-lg">
          <Icon className="h-5 w-5 text-primary-500" />
        </div>
        {trend && (
          <div className={`text-sm flex items-center ${trend.positive ? 'text-green-600' : 'text-red-600'}`}>
            {trend.value}
          </div>
        )}
      </div>
      <h3 className="text-2xl font-bold text-gray-900 mb-1">
        {value}
      </h3>
      <p className="text-sm text-gray-500">{title}</p>
      {description && (
        <p className="mt-2 text-sm text-gray-600">{description}</p>
      )}
    </Card>
  );
} 