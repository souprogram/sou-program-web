import { Link } from 'react-router-dom';
import { twMerge } from 'tailwind-merge';

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  type?: 'submit' | 'reset' | 'button';
  to?: string;
  transparent?: boolean;
}

export const Button = ({
  children,
  className,
  type = 'button',
  to,
  transparent,
}: ButtonProps) => {
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
        'inline-flex items-center rounded-md bg-primary-600 px-5 py-2.5 font-medium text-black duration-300 hover:bg-primary-400 focus:outline-none',
        transparent &&
          'bg-transparent text-primary-600 hover:bg-primary-600/20',
        className,
      )}
    >
      {children}
    </button>
  );
};

export default Button;
