import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { 
  Search, 
  Filter,
  SlidersHorizontal,
  X 
} from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Badge } from '@/components/ui/badge';

interface CourseSearchProps {
  onSearch: (term: string) => void;
  onFilter: (filters: CourseFilters) => void;
}

export interface CourseFilters {
  level?: string;
  faculty?: string;
  duration?: string;
  mode?: string;
}

export function CourseSearch({ onSearch, onFilter }: CourseSearchProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState<CourseFilters>({});
  const [activeFilters, setActiveFilters] = useState<string[]>([]);

  const handleSearch = (value: string) => {
    setSearchTerm(value);
    onSearch(value);
  };

  const handleFilterChange = (key: keyof CourseFilters, value: string) => {
    const newFilters = { ...filters, [key]: value };
    setFilters(newFilters);
    onFilter(newFilters);
    
    if (value && !activeFilters.includes(value)) {
      setActiveFilters([...activeFilters, value]);
    }
  };

  const removeFilter = (filter: string) => {
    setActiveFilters(activeFilters.filter(f => f !== filter));
    const newFilters = { ...filters };
    Object.keys(newFilters).forEach(key => {
      if (newFilters[key as keyof CourseFilters] === filter) {
        delete newFilters[key as keyof CourseFilters];
      }
    });
    setFilters(newFilters);
    onFilter(newFilters);
  };

  return (
    <div className="space-y-4">
      <div className="flex gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
          <Input
            placeholder="Search courses by name, university or faculty..."
            value={searchTerm}
            onChange={(e) => handleSearch(e.target.value)}
            className="pl-10"
          />
        </div>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline">
              <SlidersHorizontal className="h-5 w-5 mr-2" />
              Filters
            </Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Filter Courses</SheetTitle>
            </SheetHeader>
            <div className="space-y-4 mt-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Level</label>
                <Select onValueChange={(value) => handleFilterChange('level', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select level" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="bachelors">Bachelor's</SelectItem>
                    <SelectItem value="masters">Master's</SelectItem>
                    <SelectItem value="doctorate">Doctorate</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              {/* Add more filter options */}
            </div>
          </SheetContent>
        </Sheet>
      </div>

      {/* Active Filters */}
      {activeFilters.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {activeFilters.map((filter) => (
            <Badge
              key={filter}
              variant="secondary"
              className="flex items-center gap-1"
            >
              {filter}
              <X
                className="h-3 w-3 cursor-pointer"
                onClick={() => removeFilter(filter)}
              />
            </Badge>
          ))}
        </div>
      )}
    </div>
  );
} 