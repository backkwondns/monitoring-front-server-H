import { ReactElement } from 'react';
import { data } from './dashBoard.interface';

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
