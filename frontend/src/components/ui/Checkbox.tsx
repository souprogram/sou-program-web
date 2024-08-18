import { forwardRef } from 'react';
import { FieldError } from 'react-hook-form';

interface CheckboxProps {
  id?: string;
  label: string;
  name?: string;
  value?: boolean;
  required?: boolean;
  disabled?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  error?: FieldError;
}

const Checkbox = forwardRef(function Checkbox(
  {
    id,
    label,
    value,
    name,
    required,
    disabled,
    error,
    onChange,
    onBlur,
  }: CheckboxProps,
  ref: React.Ref<HTMLInputElement>,
) {
  return (
    <div className="flex items-start">
      <div className="flex h-5 items-center">
        <input
          ref={ref}
          id={id}
          aria-describedby={`${name}-error`}
          name={name}
          checked={value}
          type="checkbox"
          onChange={onChange}
          onBlur={onBlur}
          className="focus:ring-primary-500 h-4 w-4 rounded text-primary-600 outline-none duration-300 focus:ring-2"
          aria-disabled={disabled}
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
});

export default Checkbox;
