import { settingInterface } from 'src/interfaces';

export type data = {
  CPU_Avg: string;
  CPU_Core0: string;
  CPU_Core1: string;
  CPU_Core2: string;
  CPU_Core3: string;
  MEM_Total: string;
  MEM_Free: string;
  MEM_Used: string;
  MEM_Active: string;
  MEM_Available: string;
  MEM_Buffers: string;
  MEM_Cached: string;
  FAN_Speed: string;
  TEMP_AO: string;
  TEMP_CPU: string;
  TEMP_GPU: string;
  TEMP_PLL: string;
  TEMP_Thermal: string;
  timeStamp: string;
}[];
export type colorMap = {
  [key: string]: string;
  CPU: string;
  MEM: string;
  FAN: string;
  TEMP: string;
};
export type domainMap = {
  [key: string]: [number, number];
  CPU: [number, number];
  MEM: [number, number];
  FAN: [number, number];
  TEMP: [number, number];
};
export interface dashBoardInterface {
  data: data;
  colorMap: colorMap;
  domainMap: domainMap;
  selectedChart: settingInterface.selectedChart;
  listChart: string[];
}
