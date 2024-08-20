import { forwardRef } from 'react';
import { FieldError } from 'react-hook-form';
import { twMerge } from 'tailwind-merge';

interface InputProps {
  id: string;
  label?: string;
  name?: string;
  type?: string;
  value?: string;
  placeholder?: string;
  required?: boolean;
  error?: FieldError;
  disabled?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
}

const Input = forwardRef(function Input(
  {
    id,
    label,
    name,
    type,
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
        <label htmlFor={id} className="block text-sm font-medium text-gray-700">
          {label} {required && <span className="text-red-600">*</span>}
        </label>
      )}
      <input
        id={id}
        ref={ref}
        type={type ?? 'text'}
        className={twMerge(
          'mt-1 block w-full rounded-md px-4 py-2 shadow-sm outline-none duration-300 focus:ring-2 focus:ring-primary-600 sm:text-sm',
          error && 'focus:ring-red-600',
          disabled && 'pointer-events-none opacity-50',
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
