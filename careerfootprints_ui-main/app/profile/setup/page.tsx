'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { notify } from '@/lib/notifications';
import {
  Phone,
  MapPin,
  GraduationCap,
  Briefcase,
  CheckCircle,
  ArrowRight,
  ArrowLeft
} from 'lucide-react';

interface ProfileFormData {
  personalInfo: {
    phone: string;
    location: string;
    bio: string;
  };
  education: {
    level: string;
    institution: string;
    field: string;
    graduationYear: string;
  };
  interests: {
    careerFields: string[];
    preferredRoles: string[];
    skillsToLearn: string[];
  };
}

const initialFormData: ProfileFormData = {
  personalInfo: {
    phone: '',
    location: '',
    bio: ''
  },
  education: {
    level: '',
    institution: '',
    field: '',
    graduationYear: ''
  },
  interests: {
    careerFields: [],
    preferredRoles: [],
    skillsToLearn: []
  }
};

export default function ProfileSetup() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<ProfileFormData>(initialFormData);
  const router = useRouter();

  const updateFormData = (section: keyof ProfileFormData, data: any) => {
    setFormData(prev => ({
      ...prev,
      [section]: { ...prev[section], ...data }
    }));
  };

  const handleComplete = async () => {
    try {
      // In production, save to API
      notify.success('Profile updated successfully!');
      router.push('/dashboard');
    } catch (error) {
      notify.error('Failed to update profile');
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      {/* Progress Indicator */}
      <div className="mb-8">
        <div className="flex items-center justify-between">
          {[1, 2, 3].map((num) => (
            <div key={num} className="flex items-center">
              <div className={`
                h-8 w-8 rounded-full flex items-center justify-center
                ${step >= num ? 'bg-primary-500 text-white' : 'bg-gray-100 text-gray-400'}
              `}>
                {step > num ? <CheckCircle className="h-5 w-5" /> : num}
              </div>
              {num < 3 && (
                <div className={`
                  h-1 w-16 mx-2
                  ${step > num ? 'bg-primary-500' : 'bg-gray-100'}
                `} />
              )}
            </div>
          ))}
        </div>
        <div className="flex justify-between mt-2 text-sm text-gray-600">
          <span>Personal Info</span>
          <span>Education</span>
          <span>Interests</span>
        </div>
      </div>

      <Card className="p-6">
        {step === 1 && (
          <div className="space-y-6">
            <h2 className="text-xl font-semibold">Personal Information</h2>
            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium">Phone Number</label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <Input
                    value={formData.personalInfo.phone}
                    onChange={(e) => updateFormData('personalInfo', { phone: e.target.value })}
                    className="pl-10"
                    placeholder="Enter your phone number"
                  />
                </div>
              </div>
              <div>
                <label className="text-sm font-medium">Location</label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <Input
                    value={formData.personalInfo.location}
                    onChange={(e) => updateFormData('personalInfo', { location: e.target.value })}
                    className="pl-10"
                    placeholder="City, Country"
                  />
                </div>
              </div>
              <div>
                <label className="text-sm font-medium">Bio</label>
                <Textarea
                  value={formData.personalInfo.bio}
                  onChange={(e) => updateFormData('personalInfo', { bio: e.target.value })}
                  placeholder="Tell us about yourself"
                  rows={4}
                />
              </div>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-6">
            <h2 className="text-xl font-semibold">Education Background</h2>
            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium">Education Level</label>
                <Select
                  value={formData.education.level}
                  onValueChange={(value) => updateFormData('education', { level: value })}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select your education level" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="high_school">High School</SelectItem>
                    <SelectItem value="diploma">Diploma</SelectItem>
                    <SelectItem value="bachelors">Bachelor's Degree</SelectItem>
                    <SelectItem value="masters">Master's Degree</SelectItem>
                    <SelectItem value="phd">PhD</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="text-sm font-medium">Institution</label>
                <div className="relative">
                  <GraduationCap className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <Input
                    value={formData.education.institution}
                    onChange={(e) => updateFormData('education', { institution: e.target.value })}
                    className="pl-10"
                    placeholder="Enter your institution"
                  />
                </div>
              </div>
              <div>
                <label className="text-sm font-medium">Field of Study</label>
                <Input
                  value={formData.education.field}
                  onChange={(e) => updateFormData('education', { field: e.target.value })}
                  placeholder="e.g., Computer Science"
                />
              </div>
              <div>
                <label className="text-sm font-medium">Graduation Year</label>
                <Input
                  type="number"
                  value={formData.education.graduationYear}
                  onChange={(e) => updateFormData('education', { graduationYear: e.target.value })}
                  placeholder="Enter graduation year"
                  min="1950"
                  max="2030"
                />
              </div>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="space-y-6">
            <h2 className="text-xl font-semibold">Career Interests</h2>
            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium">Preferred Career Fields</label>
                <Select
                  value={formData.interests.careerFields[0]}
                  onValueChange={(value) => updateFormData('interests', { 
                    careerFields: [value] 
                  })}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select preferred field" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="technology">Technology</SelectItem>
                    <SelectItem value="business">Business</SelectItem>
                    <SelectItem value="healthcare">Healthcare</SelectItem>
                    <SelectItem value="education">Education</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        )}

        <div className="flex justify-between mt-8">
          <Button
            variant="outline"
            onClick={() => setStep(prev => prev - 1)}
            disabled={step === 1}
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back
          </Button>
          <Button
            onClick={() => {
              if (step < 3) setStep(prev => prev + 1);
              else handleComplete();
            }}
          >
            {step === 3 ? 'Complete Setup' : 'Next'}
            {step < 3 && <ArrowRight className="h-4 w-4 ml-2" />}
          </Button>
        </div>
      </Card>
    </div>
  );
} 