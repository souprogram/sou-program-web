import { forwardRef } from 'react';
import { FieldError } from 'react-hook-form';
import { twMerge } from 'tailwind-merge';

interface InputProps {
  id: string;
  label?: string;
  name?: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
  error?: FieldError;
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
    onChange,
    onBlur,
    placeholder,
    error,
  }: InputProps,
  ref: React.Ref<HTMLInputElement>,
) {
  return (
    <div>
      {label && (
        <label htmlFor={id} className="block text-sm font-medium text-gray-700">
          {label} {required && <span className="text-red-600">*</span>}
        </label>
      )}
      <input
        id={id}
        ref={ref}
        type={type ?? 'text'}
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call
        className={twMerge(
          'focus:ring-primary-500 focus:border-primary-500 mt-1 block w-full rounded-md border-gray-300 px-4 py-2 shadow-sm sm:text-sm',
          error && 'focus:border-red-600 focus:ring-red-600',
        )}
        placeholder={placeholder}
        onChange={onChange}
        onBlur={onBlur}
        aria-describedby={`${name}-error`}
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
