import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, BookOpen, Users, Award } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-secondary-500/10" />
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
              Shape Your Future Career Path
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Discover courses that align with your career goals, get personalized recommendations, 
              and make informed decisions about your professional journey.
            </p>
            <div className="flex gap-4">
              <Button 
                asChild
                className="bg-primary-500 hover:bg-primary-600 text-white"
                size="lg"
              >
                <Link href="/assessment">Take Career Assessment</Link>
              </Button>
              <Button 
                asChild
                variant="outline"
                size="lg"
                className="border-primary-200 hover:bg-primary-50"
              >
                <Link href="/courses">
                  Explore Courses
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Your Career Journey Starts Here
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 rounded-lg bg-primary-50 border border-primary-100">
              <BookOpen className="h-10 w-10 text-primary-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Course Matching</h3>
              <p className="text-gray-600">
                Find courses that align perfectly with your career aspirations and skills.
              </p>
            </div>
            <div className="p-6 rounded-lg bg-secondary-50 border border-secondary-100">
              <Award className="h-10 w-10 text-secondary-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Career Assessment</h3>
              <p className="text-gray-600">
                Discover your strengths and get personalized career recommendations.
              </p>
            </div>
            <div className="p-6 rounded-lg bg-primary-50 border border-primary-100">
              <Users className="h-10 w-10 text-primary-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Industry Insights</h3>
              <p className="text-gray-600">
                Stay updated with the latest trends and opportunities in your field.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
