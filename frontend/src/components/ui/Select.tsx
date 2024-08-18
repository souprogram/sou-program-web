import ReactSelect, {
  ControlProps,
  GroupBase,
  MultiValueProps,
  OptionProps,
} from 'react-select';
import { twMerge } from 'tailwind-merge';

type MultiValueState = MultiValueProps<
  {
    value: string;
    label: string;
  },
  true,
  GroupBase<{
    value: string;
    label: string;
  }>
>;

type ControlState = ControlProps<
  {
    value: string;
    label: string;
  },
  true,
  GroupBase<{
    value: string;
    label: string;
  }>
>;

type OptionState = OptionProps<
  {
    value: string;
    label: string;
  },
  true,
  GroupBase<{
    value: string;
    label: string;
  }>
>;

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
    control: (state: ControlState) =>
      twMerge(
        state.className,
        '!border-0 !shadow-sm !outline-none !duration-300 !sm:text-sm',
        state.isFocused && '!ring-primary-600 !ring-2',
        error && state.isFocused && '!ring-red-600 !ring-2',
      ),
    multiValueLabel: (state: MultiValueState) =>
      twMerge(
        state.className,
        '!px-2 !py-1 !text-sm !bg-primary-600 !text-white !rounded-r-none',
      ),
    multiValueRemove: (state: MultiValueState) =>
      twMerge(state.className, '!rounded-l-none bg-primary-600 text-white'),
    option: (state: OptionState) =>
      twMerge(
        '!px-4 !py-2 !text-sm !border-e-0',
        state.isSelected && '!bg-primary-600 !text-white',
        state.isFocused && '!bg-primary-600 !text-white',
      ),
  };

  return (
    <div className="flex flex-col gap-1">
      <label className="block text-sm font-medium text-gray-700">
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
