import {
  ControlProps,
  GroupBase,
  MultiValueProps,
  OptionProps,
} from 'react-select';

export type MultiValueState = MultiValueProps<
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

export type ControlState = ControlProps<
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

export type OptionState = OptionProps<
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
