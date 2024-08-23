/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
import ReactSelect from 'react-select';
import { twMerge } from 'tailwind-merge';

interface SelectProps {
  name: string;
  label: string;
  required?: boolean;
  options: { value: string; label: string }[];
  isMulti?: boolean;
  value: string[];
  onChange: (e: string[]) => void;
  error?: string;
}

export default function Select({
  name,
  label,
  required,
  options,
  value,
  error,
  onChange,
}: SelectProps) {
  const classNames = {
    control: (state: any) =>
      twMerge(
        state.className,
        '!ps-1 !border-0 !bg-gray-600/30 !outline-none !duration-300 !sm:text-sm !text-white',
        state.isFocused && '!border-transparent !bg-primary-600/30',
        error && state.isFocused && '!bg-red-600/30',
      ),
    placeholder: (state: any) =>
      twMerge(
        state.className,
        '!text-gray-400 !text-sm !font-normal !leading-none',
      ),
    multiValue: (state: any) => twMerge(state.className, '!rounded-full'),
    input: (state: any) => twMerge(state.className, '!sm:text-sm !text-white'),
    multiValueLabel: (state: any) =>
      twMerge(
        state.className,
        '!px-2 !py-1 !text-sm !bg-primary-600 !text-black !rounded-s-full',
      ),
    menu: (state: any) =>
      twMerge(
        state.className,
        '!outline-none !duration-300 !sm:text-sm !text-white !bg-zinc-800',
      ),
    multiValueRemove: (state: any) =>
      twMerge(
        state.className,
        '!rounded-l-none bg-primary-600 !rounded-e-full text-black',
      ),
    option: (state: any) =>
      twMerge(
        '!px-4 !py-2 !text-sm',
        state.isSelected && '!bg-primary-600/30 !text-white',
        state.isFocused && '!bg-primary-600/30 !text-white',
      ),
  };

  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={name} className="block text-sm font-medium text-gray-200">
        {label}{' '}
        {required && (
          <>
            <span className="font-normal text-gray-500">
              (izaberite barem jednu)
            </span>
            <span className="text-red-600">*</span>
          </>
        )}
      </label>
      <ReactSelect
        name={name}
        id="role"
        isMulti
        aria-label="Select role"
        options={options}
        value={options.filter((c) => value.includes(c.value))}
        onChange={(e) => onChange(e.map((c) => c.value))}
        classNames={classNames}
      />
      {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
    </div>
  );
}
