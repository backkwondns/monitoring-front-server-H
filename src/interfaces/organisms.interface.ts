import { ReactElement } from 'react';

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
  data: object[];
  dataKey: string;
  lineColor?: string;
  legend?: boolean;
  tooltip?: boolean;
}
