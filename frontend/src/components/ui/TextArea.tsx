import { FieldError } from 'react-hook-form';
import { twMerge } from 'tailwind-merge';

interface TextAreaProps {
  className?: string;
  id: string;
  name?: string;
  label?: string;
  value?: string;
  placeholder?: string;
  required?: boolean;
  description?: string;
  error?: FieldError;
  disabled?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLTextAreaElement>) => void;
}

export const TextArea = ({
  id,
  name,
  value,
  label,
  className,
  error,
  required,
  disabled,
  placeholder,
  description,
  onChange,
  onBlur,
}: TextAreaProps) => {
  return (
    <div className="w-full">
      <label htmlFor={id} className="block text-sm font-medium text-gray-200">
        {label} {required && <span className="text-red-600">*</span>}
      </label>
      <textarea
        id={id}
        name={name}
        placeholder={placeholder}
        className={twMerge(
          'mt-1 block w-full rounded-md bg-gray-600/50 px-4 py-2 outline-none duration-300 focus:bg-primary-600/30 sm:text-sm',
          error && 'focus:bg-red-600/30',
          disabled && 'pointer-events-none opacity-50',
          className,
        )}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        aria-describedby={`message-error`}
        aria-disabled={disabled}
      ></textarea>
      {description && <p className="mt-2 text-sm text-gray-400">{description}</p>}
      {error && <p className="mt-2 text-sm text-red-600">{error.message}</p>}
    </div>
  );
};
