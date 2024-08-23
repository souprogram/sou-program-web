import { forwardRef } from 'react';
import { FieldError } from 'react-hook-form';
import { twMerge } from 'tailwind-merge';
import { Tooltip } from './Tooltip';

interface InputProps {
  className?: string;
  id: string;
  label?: string;
  name?: string;
  type?: string;
  value?: string;
  placeholder?: string;
  required?: boolean;
  error?: FieldError;
  disabled?: boolean;
  tooltip?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
}

const Input = forwardRef(function Input(
  {
    className,
    id,
    label,
    name,
    type,
    tooltip,
    required,
    disabled,
    value,
    onChange,
    onBlur,
    placeholder,
    error,
  }: InputProps,
  ref: React.Ref<HTMLInputElement>,
) {
  return (
    <div className="w-full">
      {label && (
        <label htmlFor={id} className="flex text-sm font-medium text-gray-200">
          {label} {required && <span className="text-red-600">*</span>}
          {tooltip && <Tooltip text={tooltip} />}
        </label>
      )}
      <input
        id={id}
        ref={ref}
        type={type ?? 'text'}
        className={twMerge(
          'mt-1 block w-full rounded-md bg-gray-600/50 px-4 py-2 text-white shadow-sm outline-none transition duration-300 focus:bg-primary-600/50 sm:text-sm',
          error && 'focus:bg-red-600/50',
          disabled && 'pointer-events-none opacity-50',
          className,
        )}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        onBlur={onBlur}
        aria-describedby={`${name}-error`}
        aria-disabled={disabled}
      />
      {error?.message && (
        <p className="mt-2 text-sm text-red-600" id={`${name}-error`}>
          {error.message}
        </p>
      )}
    </div>
  );
});

export default Input;
