import { forwardRef } from 'react';
import { FieldError } from 'react-hook-form';
import { twMerge } from 'tailwind-merge';

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
  { id, label, value, name, required, disabled, error, onChange, onBlur }: CheckboxProps,
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
          className={twMerge(
            'size-4 cursor-pointer appearance-none rounded border border-gray-600 outline-none duration-300 checked:bg-primary-600 focus:border-primary-600',
            disabled && 'pointer-events-none opacity-50',
            error && 'focus:borders-red-600',
          )}
          aria-disabled={disabled}
        />
      </div>
      <div className="ml-3 text-sm">
        <label
          htmlFor={id}
          className={twMerge('font-medium text-gray-200', error && 'text-red-600')}
        >
          {label} {required && <span className="text-red-600">*</span>}
        </label>
      </div>
    </div>
  );
});

export default Checkbox;
