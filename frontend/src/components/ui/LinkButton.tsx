import { Link } from 'react-router-dom';
import { twMerge } from 'tailwind-merge';

const styles = {
  default:
    'w-fit inline-flex gap-1 items-center rounded-lg px-4 py-2 whitespace-nowrap text-base font-medium text-primary-600 hover:bg-primary-600/20 first-letter:uppercase text-center transition-all duration-150 aria-disabled:pointer-events-none aria-disabled:opacity-50',
};

interface ILinkButtonProps {
  label: string;
  to: string;
  className?: string;
  disabled?: boolean;
  icon?: React.ReactNode;
}

export const LinkButton = ({ label, to, className, disabled, icon }: ILinkButtonProps) => {
  return (
    <Link
      to={to}
      className={twMerge(
        styles.default,
        'bg-primary-600 text-black hover:bg-primary-500 active:bg-primary-400',
        className,
      )}
      aria-disabled={disabled}
    >
      {!!icon && <span>{icon}</span>}
      {label}
    </Link>
  );
};

export const TransparentLinkButton = ({
  label,
  to,
  className,
  disabled,
  icon,
}: ILinkButtonProps) => {
  return (
    <Link to={to} className={twMerge(styles.default, className)} aria-disabled={disabled}>
      {!!icon && <span>{icon}</span>}
      {label}
    </Link>
  );
};
