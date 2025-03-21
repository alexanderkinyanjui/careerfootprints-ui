import { Logo } from '@/components/ui/logo';

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex">
      {/* Left Panel with Logo and Background */}
      <div className="hidden lg:flex lg:w-1/2 bg-primary-50 relative flex-col">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-secondary-500/10" />
        <div className="relative p-8">
          <Logo size="lg" />
        </div>
        <div className="flex-grow flex items-center justify-center p-8">
          <div className="max-w-md">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Shape Your Future Career Path
            </h1>
            <p className="text-lg text-gray-600">
              Discover courses that align with your career goals and make informed decisions 
              about your professional journey.
            </p>
          </div>
        </div>
      </div>

      {/* Right Panel with Auth Forms */}
      <div className="flex-1 flex flex-col">
        <div className="flex-grow flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
          <div className="w-full max-w-md">
            <div className="lg:hidden mb-8">
              <Logo size="lg" />
            </div>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
} 