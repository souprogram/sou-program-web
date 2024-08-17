import { FieldError } from 'react-hook-form';

interface CheckboxProps {
  id?: string;
  label?: string;
  name?: string;
  required?: boolean;
  error?: FieldError;
}

export default function Checkbox({
  id,
  label,
  name,
  required,
  error,
}: CheckboxProps) {
  return (
    <div className="flex items-start">
      <div className="flex items-center h-5">
        <input
          id={id}
          aria-describedby={`${name}-error`}
          name={name}
          type="checkbox"
          className="focus:ring-primary-500 h-4 w-4 text-primary-600 border-gray-300 rounded"
          required={required}
        />
      </div>
      <div className="ml-3 text-sm">
        <label htmlFor={id} className="font-medium text-gray-700">
          {label} {required && <span className="text-red-600">*</span>}
        </label>
        {error?.message && (
          <p className="mt-2 text-sm text-red-600" id={`${name}-error`}>
            {error.message}
          </p>
        )}
      </div>
    </div>
  );
}
