export interface appHeadInterface {
  onOpenSide: () => void;
}
export interface appSideInterface {
  listItems: {
    text: string;
    onClick?: () => void;
    icon: JSX.Element;
    sxText?: object;
    sxButton?: object;
  }[];
  openSide: boolean;
  onClose: () => void;
}
