/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
import React from 'react';
import ReactSelect from 'react-select';
import makeAnimated from 'react-select/animated';
import { twMerge } from 'tailwind-merge';
import { StudyType } from '../../enums/Study';

const animatedComponents = makeAnimated();

interface SelectProps<Option, IsMulti extends boolean = false> {
  name: string;
  label: string | React.JSX.Element;
  required?: boolean;
  placeholder?: string;
  options: { value: Option; label: string }[];
  isMulti?: IsMulti;
  error?: string;
}

interface MultiSelectProps<Option, IsMulti extends boolean = true>
  extends SelectProps<Option, IsMulti> {
  value: readonly Option[];
  onChange: (value: Option[]) => void;
}

export function MultiSelect<Option, IsMulti extends boolean = true>({
  name,
  label,
  required,
  placeholder,
  options,
  value,
  error,
  onChange,
}: MultiSelectProps<Option, IsMulti>) {
  const classNames = {
    control: (state: any) =>
      twMerge(
        state.className,
        '!ps-1 !border-0 !bg-gray-600/50 !outline-none !duration-300 !text-white',
        state.isFocused && '!border-transparent !bg-primary-600/30 !ring-0',
        error && state.isFocused && '!bg-red-600/30',
      ),
    placeholder: (state: any) =>
      twMerge(state.className, '!text-gray-400 !font-normal !leading-none'),
    multiValue: (state: any) => twMerge(state.className, '!rounded-full'),
    input: (state: any) => twMerge(state.className, '!text-white'),
    menu: (state: any) =>
      twMerge(state.className, '!outline-none !duration-300 !text-white !bg-zinc-800'),
    multiValueLabel: (state: any) =>
      twMerge(
        state.className,
        '!px-3 !pe-2 !py-1 !bg-primary-600 !text-black !rounded-s-full !w-fit',
      ),
    multiValueRemove: (state: any) =>
      twMerge(state.className, '!rounded-l-none bg-primary-600 !rounded-e-full text-black'),
    option: (state: any) =>
      twMerge(
        '!px-4 !py-2',
        state.isSelected && '!bg-primary-600/30 !text-white',
        state.isFocused && '!bg-primary-600/30 !text-white',
      ),
  };

  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={name} className="text-gray-200">
        {label} {required && <span className="text-red-600">*</span>}
      </label>
      <ReactSelect
        name={name}
        id={name}
        isMulti={true}
        placeholder={placeholder}
        options={options}
        value={options.filter((c) => value.includes(c.value))}
        onChange={(e) => onChange(e.map((c) => c.value))}
        classNames={classNames}
        components={animatedComponents}
      />
      {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
    </div>
  );
}

interface SingleSelectProps<Option, IsMulti extends boolean = false>
  extends SelectProps<Option, IsMulti> {
  value: Option;
  onChange: (value: Option) => void;
}

export function SingleSelect<Option extends StudyType, IsMulti extends boolean = false>({
  name,
  label,
  required,
  placeholder,
  options,
  value,
  error,
  onChange,
}: SingleSelectProps<Option, IsMulti>) {
  const classNames = {
    control: (state: any) =>
      twMerge(
        state.className,
        '!ps-1 !border-0 !bg-gray-600/50 !outline-none !duration-300 !text-white',
        state.isFocused && '!border-transparent !bg-primary-600/30 !ring-0',
        error && state.isFocused && '!bg-red-600/30',
      ),
    placeholder: (state: any) =>
      twMerge(state.className, '!text-gray-400 !font-normal !leading-none'),
    input: (state: any) => twMerge(state.className, '!text-white'),
    singleValue: (state: any) =>
      twMerge(
        state.className,
        '!px-3 !py-1 !text-sm !bg-primary-600 !text-black !rounded-full !w-fit',
      ),
    menu: (state: any) =>
      twMerge(state.className, '!outline-none !duration-300 !text-white !bg-zinc-800'),
    option: (state: any) =>
      twMerge(
        '!px-4 !py-2',
        state.isSelected && '!bg-primary-600/30 !text-white',
        state.isFocused && '!bg-primary-600/30 !text-white',
      ),
  };

  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={name} className="text-gray-200">
        {label} {required && <span className="text-red-600">*</span>}
      </label>
      <ReactSelect
        name={name}
        id={name}
        isMulti={false}
        placeholder={placeholder}
        options={options}
        value={options.find((c) => c.value === value)}
        onChange={(e) => {
          onChange(e ? e.value : ('' as Option));
          console.log(e);
        }}
        classNames={classNames}
        components={animatedComponents}
      />
      {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
    </div>
  );
}
