import { Link } from 'react-router-dom';
import { twMerge } from 'tailwind-merge';
import LoadingSpinner from './LoadingSpinner';

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  type?: 'submit' | 'reset' | 'button';
  to?: string;
  transparent?: boolean;
  disabled?: boolean;
  loading?: boolean;
}

export default function Button({
  children,
  className,
  type = 'button',
  to,
  transparent,
  disabled = false,
  loading = false,
}: ButtonProps) {
  return to ? (
    <Link
      to={to}
      className={twMerge(
        'inline-flex items-center rounded-md bg-primary-600 px-5 py-2.5 font-medium text-black duration-300 hover:bg-primary-400 focus:outline-none',
        transparent &&
          'bg-transparent text-primary-600 hover:bg-primary-600/20',
        className,
      )}
    >
      {children}
    </Link>
  ) : (
    <button
      type={type}
      className={twMerge(
        'relative inline-flex items-center rounded-md bg-primary-600 px-5 py-2.5 font-medium text-black duration-300 hover:bg-primary-400 focus:outline-none',
        transparent &&
          'bg-transparent text-primary-600 hover:bg-primary-600/20',
        (disabled || loading) &&
          'pointer-events-none cursor-not-allowed opacity-50',
        className,
      )}
      disabled={disabled || loading}
    >
      <span className={twMerge('flex items-center gap-2', loading && 'invisible')}>{children}</span>
      {loading && (
        <div className="absolute right-1/2 top-1/2 -translate-y-1/2 translate-x-1/2">
          <LoadingSpinner />
        </div>
      )}
    </button>
  );
}
