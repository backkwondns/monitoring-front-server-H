import { ReactElement } from 'react';
import { data } from '../pages/dashBoard.interface';

export interface listButtonInterface {
  sxList?: object;
  listItems: {
    text: string;
    onClick?: () => void;
    icon?: ReactElement<any, any>;
    sxText?: object;
    sxButton?: object;
  }[];
  divider: boolean;
}

export interface lineChartInterface {
  data: data;
  dataKey: string;
  domain: [number, number];
  lineColor?: string;
  legend?: boolean;
  tooltip?: boolean;
}

export interface formCheckBoxInterface {
  text: string;
  checked: boolean;
  indeterminate?: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  sxForm?: object;
}
