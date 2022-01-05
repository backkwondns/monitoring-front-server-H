import {
  ButtonProps,
  FormHelperTextProps,
  InputLabelProps,
  ListItemTextProps,
  SelectProps,
  TypographyProps,
} from '@mui/material';
import * as React from 'react';
import { ListItemButtonClasses } from '@mui/material/ListItemButton/listItemButtonClasses';
import { SxProps } from '@mui/system';
import { Theme } from '@mui/material/styles';
import { TextFieldClasses } from '@mui/material/TextField/textFieldClasses';
import { OverridableStringUnion } from '@mui/types';
import { InputBaseProps } from '@mui/material/InputBase';
import { InputProps as StandardInputProps } from '@mui/material/Input/Input';
import { TextFieldPropsColorOverrides, TextFieldPropsSizeOverrides } from '@mui/material/TextField/TextField';

export interface childrenInterface {
  children?: JSX.Element[] | JSX.Element;
}

export interface listItemButtonInterface {
  alignItems?: 'flex-start' | 'center';
  autoFocus?: boolean;
  children?: React.ReactNode;
  classes?: Partial<ListItemButtonClasses>;
  dense?: boolean;
  disabled?: boolean;
  disableGutters?: boolean;
  divider?: boolean;
  selected?: boolean;
  sx?: SxProps<Theme>;
  onClick?: () => void;
}

export interface listItemTextInterface extends ListItemTextProps {
  text: string;
}

export interface buttonInterface extends ButtonProps {
  text: string;
}

export interface inputTextInterface {
  autoComplete?: string;
  autoFocus?: boolean;
  children?: React.ReactNode;
  classes?: Partial<TextFieldClasses>;
  color?: OverridableStringUnion<
    'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning',
    TextFieldPropsColorOverrides
  >;
  defaultValue?: unknown;
  disabled?: boolean;
  error?: boolean;
  FormHelperTextProps?: Partial<FormHelperTextProps>;
  fullWidth?: boolean;
  helperText?: React.ReactNode;
  id?: string;
  InputLabelProps?: Partial<InputLabelProps>;
  inputProps?: InputBaseProps['inputProps'];
  inputRef?: React.Ref<any>;
  label?: React.ReactNode;
  multiline?: boolean;
  name?: string;
  onBlur?: InputBaseProps['onBlur'];
  onFocus?: StandardInputProps['onFocus'];
  placeholder?: string;
  required?: boolean;
  rows?: string | number;
  maxRows?: string | number;
  minRows?: string | number;
  select?: boolean;
  SelectProps?: Partial<SelectProps>;
  size?: OverridableStringUnion<'small' | 'medium', TextFieldPropsSizeOverrides>;
  sx?: SxProps<Theme>;
  type?: React.InputHTMLAttributes<unknown>['type'];
  value?: unknown;
  variant?: 'filled' | 'outlined' | 'standard';
}

export interface printInterface extends TypographyProps {
  text: string;
}
