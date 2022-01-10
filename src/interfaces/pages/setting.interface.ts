export type selectedChart = {
  [key: string]: boolean;
  CPU_Avg: boolean;
  CPU_Core0: boolean;
  CPU_Core1: boolean;
  CPU_Core2: boolean;
  CPU_Core3: boolean;
  MEM_Total: boolean;
  MEM_Free: boolean;
  MEM_Used: boolean;
  MEM_Active: boolean;
  MEM_Available: boolean;
  MEM_Buffers: boolean;
  MEM_Cached: boolean;
  FAN_Speed: boolean;
  TEMP_AO: boolean;
  TEMP_CPU: boolean;
  TEMP_GPU: boolean;
  TEMP_PLL: boolean;
  TEMP_Thermal: boolean;
};

export type CPU = string[];
export type MEM = string[];
export type FAN = string[];
export type TEMP = string[];
export type allList = {
  [key: string]: string[];
};

export interface settingInterface {
  allList: allList;
  selectedChart: selectedChart;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
