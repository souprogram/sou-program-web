/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { forwardRef, useState } from 'react';
import { FieldError } from 'react-hook-form';
import { twMerge } from 'tailwind-merge';

interface DateInputProps {
  id: string;
  name: string;
  value: string;
  label: string;
  error?: FieldError;
  disabled?: boolean;
  className?: string;
  description?: string;
  required?: boolean;
  onChange: (...event: any[]) => void;
  onBlur: (...event: any[]) => void;
}

const DateInput = forwardRef(function DateInput(
  {
    id,
    name,
    value,
    label,
    error,
    disabled,
    className,
    description,
    required,
    onChange,
    onBlur,
  }: DateInputProps,
  ref: React.Ref<HTMLDivElement>,
) {
  const [day, setDay] = useState<string>(value ? value.split('-')[2] : '01');
  const [month, setMonth] = useState<string>(value ? value.split('-')[1] : '01');
  const [year, setYear] = useState<string>(value ? value.split('-')[0] : '2024');

  const handleChangeDay = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newDay = e.target.value;
    setDay(newDay);
    updateDate(newDay, month, year);
  };

  const handleChangeMonth = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newMonth = e.target.value;
    setMonth(newMonth);
    updateDate(day, newMonth, year);
  };

  const handleChangeYear = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newYear = e.target.value;
    setYear(newYear);
    updateDate(day, month, newYear);
  };

  const updateDate = (day: string, month: string, year: string) => {
    const paddedDay = day.padStart(2, '0');
    const paddedMonth = month.padStart(2, '0');
    const fullDate = `${year}-${paddedMonth}-${paddedDay}`;
    onChange(fullDate);
  };

  return (
    <div className="w-full">
      {label && (
        <label htmlFor={id} className="flex text-gray-200">
          {label} {required && <span className="text-red-600">*</span>}
        </label>
      )}
      <div className="flex gap-4" id={id} ref={ref}>
        <div className="w-full">
          <label className="text-sm text-gray-400">Dan</label>
          <input
            type="number"
            name={`${name}-day`}
            className={twMerge(
              'mt-1 block w-full rounded-md bg-gray-600/50 px-4 py-2 text-white shadow-sm outline-none transition duration-300 focus:bg-primary-600/50',
              error && 'focus:bg-red-600/50',
              disabled && 'pointer-events-none opacity-50',
              className,
            )}
            placeholder="DD"
            min={1}
            max={31}
            defaultValue={1}
            onChange={handleChangeDay}
            onBlur={onBlur}
            aria-disabled={disabled}
          />
        </div>

        <div className="w-full">
          <label className="text-sm text-gray-400">Mjesec</label>
          <input
            name={`${name}-month`}
            type="number"
            className={twMerge(
              'mt-1 block w-full rounded-md bg-gray-600/50 px-4 py-2 text-white shadow-sm outline-none transition duration-300 focus:bg-primary-600/50',
              error && 'focus:bg-red-600/50',
              disabled && 'pointer-events-none opacity-50',
              className,
            )}
            placeholder="MM"
            min={1}
            max={12}
            defaultValue={1}
            onChange={handleChangeMonth}
            onBlur={onBlur}
            aria-disabled={disabled}
          />
        </div>

        <div className="w-full">
          <label className="text-sm text-gray-400">Godina</label>
          <input
            type="number"
            name={`${name}-year`}
            className={twMerge(
              'mt-1 block w-full rounded-md bg-gray-600/50 px-4 py-2 text-white shadow-sm outline-none transition duration-300 focus:bg-primary-600/50',
              error && 'focus:bg-red-600/50',
              disabled && 'pointer-events-none opacity-50',
              className,
            )}
            placeholder="YYYY"
            min={1900}
            max={2100}
            defaultValue={2024}
            onChange={handleChangeYear}
            onBlur={onBlur}
            aria-disabled={disabled}
          />
        </div>
      </div>
      {description && <p className="mt-2 text-sm text-gray-400">{description}</p>}
      {error && (
        <p className="mt-2 text-sm text-red-600" id={`${name}-error`}>
          {error.message}
        </p>
      )}
    </div>
  );
});

export default DateInput;
