import { FieldError } from 'react-hook-form';
import PhoneInput, { type Value } from 'react-phone-number-input';
import { twMerge } from 'tailwind-merge';

interface PhoneNumberProps {
  label?: string;
  value: string;
  placeholder?: string;
  required?: boolean;
  error?: FieldError;
  disabled?: boolean;
  onChange: (value: Value) => void;
}

export default function PhoneNumber({
  label,
  placeholder,
  value,
  required,
  error,
  disabled,
  onChange,
}: PhoneNumberProps) {
  return (
    <div className="flex w-full flex-col space-y-2">
      {label && (
        <label className="block text-sm font-medium text-gray-700">
          {label} {required && <span className="text-red-600">*</span>}
        </label>
      )}
      <PhoneInput
        onChange={onChange}
        value={value}
        placeholder={placeholder}
        disabled={disabled}
        className={twMerge(
          'ms-1 flex w-full flex-row rounded-md pl-4 shadow-sm outline-none duration-300 focus:ring-2 focus:ring-primary-600 sm:text-sm',
        )}
      />
      {error?.message && (
        <p className="mt-2 text-sm text-red-600">{error.message}</p>
      )}
    </div>
  );
}
