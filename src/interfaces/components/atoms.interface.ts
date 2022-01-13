import {
  ButtonProps,
  CheckboxProps,
  FormControlLabelProps,
  ListItemTextProps,
  ListProps,
  TextFieldProps,
  TypographyProps,
} from '@mui/material';
import * as React from 'react';
import { ListItemButtonClasses } from '@mui/material/ListItemButton/listItemButtonClasses';
import { SxProps } from '@mui/system';
import { Theme } from '@mui/material/styles';
import { ListClasses } from '@mui/material/List/listClasses';

export interface listInterface extends ListProps {
  children?: JSX.Element[] | JSX.Element;
  classes?: Partial<ListClasses>;
  dense?: boolean;
  disablePadding?: boolean;
  subheader?: React.ReactNode;
  sx?: SxProps<Theme>;
}

export interface listItemButtonInterface {
  alignItems?: 'flex-start' | 'center';
  autoFocus?: boolean;
  children?: JSX.Element[] | JSX.Element;
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
  content: string | JSX.Element;
}

export type inputTextInterface = TextFieldProps;

export interface printInterface extends TypographyProps {
  text: string;
}

export type formControlInterface = FormControlLabelProps;
export type checkBoxInterface = CheckboxProps;
