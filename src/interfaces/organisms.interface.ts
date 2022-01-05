export interface listButtonInterface {
  listItems: {
    text: string;
    onClick?: () => void;
    icon?: JSX.Element;
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
