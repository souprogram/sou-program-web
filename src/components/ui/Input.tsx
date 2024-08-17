import { FieldError } from 'react-hook-form';

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

export default function Input({
  id,
  label,
  name,
  type,
  required,
  onChange,
  onBlur,
  placeholder,
  error,
}: InputProps) {
  return (
    <div>
      {label && (
        <label htmlFor={id} className="block text-sm font-medium text-gray-700">
          {label} {required && <span className="text-red-600">*</span>}
        </label>
      )}
      <input
        id={id}
        type={type ?? 'text'}
        className="mt-1 focus:ring-primary-500 focus:border-primary-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md px-4 py-2"
        placeholder={placeholder}
        onChange={onChange}
        onBlur={onBlur}
        required={required}
      />
      {error?.message && (
        <p className="mt-2 text-sm text-red-600" id={`${name}-error`}>
          {error.message}
        </p>
      )}
    </div>
  );
}
