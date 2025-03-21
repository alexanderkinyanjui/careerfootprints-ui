import Image from 'next/image';
import Link from 'next/link';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  variant?: 'light' | 'dark';
}

export function Logo({ size = 'md', variant = 'dark' }: LogoProps) {
  const sizes = {
    sm: 'h-8',
    md: 'h-10',
    lg: 'h-12'
  };

  return (
    <Link href="/" className="flex items-center">
      <div className={`${sizes[size]} relative aspect-[3/1]`}>
        <Image
          src={variant === 'light' ? '/logo/logo.png' : '/logo/logo.png'}
          alt="CareerFootprints Logo"
          fill
          className="object-contain"
          priority
        />
      </div>
    </Link>
  );
} 