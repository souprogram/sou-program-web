interface Options {
  weekday?: 'long' | 'short' | 'narrow';
  year?: 'numeric' | '2-digit';
  month?: 'long' | 'short' | 'narrow' | 'numeric' | '2-digit';
  day?: 'numeric' | '2-digit';
}

export const optionsWithWeekday = {
  weekday: 'long',
  year: 'numeric',
  month: 'numeric',
  day: 'numeric',
} satisfies Options;

export const optionsWithoutWeekday = {
  year: 'numeric',
  month: 'numeric',
  day: 'numeric',
} satisfies Options;

export const formatDate = (
  date: string | null | undefined,
  options: Options = optionsWithWeekday,
) => {
  if (!date) return '';

  const dateObject = new Date(date);
  const intlDate = new Intl.DateTimeFormat('hr-HR', options).format(dateObject);

  const capitalizedDate = intlDate.charAt(0).toUpperCase() + intlDate.slice(1);

  return capitalizedDate;
};
