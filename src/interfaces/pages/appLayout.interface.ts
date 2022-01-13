import { settingInterface } from 'src/interfaces';

export interface appHeadInterface {
  onOpenSide: () => void;
  openSide: boolean;
  onFilter: (event: React.MouseEvent<HTMLButtonElement>) => void;
  openFilter: any;
  openDialog: boolean;
  onCloseLogin: () => void;
  allList: settingInterface.allList;
  selectedChart: settingInterface.selectedChart;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  formik: any;
  isLogin: boolean;
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
