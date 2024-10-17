import { Link } from '@tanstack/react-router'
import { twMerge } from 'tailwind-merge'

const styles = {
  default:
    'w-fit inline-flex gap-1 items-center rounded-lg px-4 py-2 whitespace-nowrap text-base font-medium text-primary-600 hover:bg-primary-600/20 first-letter:uppercase text-center transition-all duration-150 aria-disabled:pointer-events-none aria-disabled:opacity-50',
}

interface ILinkButtonProps {
  label: string
  to: string
  className?: string
  disabled?: boolean
  icon?: React.ReactNode
  iconPosition?: 'left' | 'right'
}

export const LinkButton = ({
  label,
  to,
  className,
  disabled,
  icon,
  iconPosition = 'left',
}: ILinkButtonProps) => {
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
      {!!icon && iconPosition === 'left' && <span>{icon}</span>}
      {label}
      {!!icon && iconPosition === 'right' && <span>{icon}</span>}
    </Link>
  )
}

export const TransparentLinkButton = ({
  label,
  to,
  className,
  disabled,
  icon,
  iconPosition = 'left',
}: ILinkButtonProps) => {
  return (
    <Link to={to} className={twMerge(styles.default, className)} aria-disabled={disabled}>
      {!!icon && iconPosition === 'left' && <span>{icon}</span>}
      {label}
      {!!icon && iconPosition === 'right' && <span>{icon}</span>}
    </Link>
  )
}
