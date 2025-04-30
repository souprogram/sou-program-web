import { twMerge } from 'tailwind-merge';
import LoadingSpinner from './LoadingSpinner';
import { Link } from '@tanstack/react-router';

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  type?: 'submit' | 'reset' | 'button';
  to?: string;
  transparent?: boolean;
  disabled?: boolean;
  loading?: boolean;
  onClick?: () => void;
}

export default function Button({
  children,
  className,
  type = 'button',
  to,
  transparent,
  disabled = false,
  loading = false,
  onClick,
}: ButtonProps) {
  return to ? (
    <Link
      to={to}
      className={twMerge(
        'bg-primary-600 hover:bg-primary-400 inline-flex items-center rounded-md px-5 py-2.5 font-medium text-black duration-300 focus:outline-none',
        transparent && 'text-primary-600 hover:bg-primary-600/20 bg-transparent',
        className,
      )}
    >
      {children}
    </Link>
  ) : (
    <button
      type={type}
      className={twMerge(
        'bg-primary-600 hover:bg-primary-400 relative inline-flex items-center rounded-md px-5 py-2.5 font-medium text-black duration-300 focus:outline-none',
        transparent && 'text-primary-600 hover:bg-primary-600/20 bg-transparent',
        (disabled || loading) && 'pointer-events-none cursor-not-allowed opacity-50',
        className,
      )}
      disabled={disabled || loading}
      onClick={onClick}
    >
      <span className={twMerge('flex items-center gap-2', loading && 'invisible')}>{children}</span>
      {loading && (
        <div className="absolute top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2">
          <LoadingSpinner />
        </div>
      )}
    </button>
  );
}
