import { makeAutoObservable, toJS } from 'mobx';
import DashBoardStore from 'src/stores/dashBoard.store';
import RootStore from 'src/stores/root.store';
import { settingInterface } from 'src/interfaces';

class SettingStore {
  root: RootStore;

  dashboard: DashBoardStore;

  selectedChart: settingInterface.selectedChart = {
    CPU_Avg: true,
    CPU_Core0: true,
    CPU_Core1: true,
    CPU_Core2: true,
    CPU_Core3: true,
    MEM_Total: true,
    MEM_Free: true,
    MEM_Used: true,
    MEM_Active: true,
    MEM_Available: true,
    MEM_Buffers: true,
    MEM_Cached: true,
    FAN_Speed: true,
    TEMP_AO: true,
    TEMP_CPU: true,
    TEMP_GPU: true,
    TEMP_PLL: true,
    TEMP_Thermal: true,
  };

  CPU: settingInterface.CPU = ['CPU_Avg', 'CPU_Core0', 'CPU_Core1', 'CPU_Core2', 'CPU_Core3'];

  MEM: settingInterface.MEM = [
    'MEM_Total',
    'MEM_Free',
    'MEM_Used',
    'MEM_Active',
    'MEM_Available',
    'MEM_Buffers',
    'MEM_Cached',
  ];

  FAN: settingInterface.FAN = ['FAN_Speed'];

  TEMP: settingInterface.TEMP = ['TEMP_AO', 'TEMP_CPU', 'TEMP_GPU', 'TEMP_PLL', 'TEMP_Thermal'];

  allList: settingInterface.allList = { CPU: this.CPU, MEM: this.MEM, FAN: this.FAN, TEMP: this.TEMP };

  constructor(root: RootStore) {
    makeAutoObservable(this);
    this.root = root;
    this.dashboard = this.root.dashBoardStore;
  }

  get getSelectedChart() {
    return toJS(this.selectedChart);
  }

  get getCPU() {
    return this.CPU;
  }

  get getMEM() {
    return this.MEM;
  }

  get getFAN() {
    return this.FAN;
  }

  get getTEMP() {
    return this.TEMP;
  }

  get getAllList() {
    return this.allList;
  }

  setSelectedChart(toggleTarget: string) {
    if (toggleTarget === 'CPU' || toggleTarget === 'MEM' || toggleTarget === 'FAN' || toggleTarget === 'TEMP') {
      const returnValue = this.allList[toggleTarget].every((checkTrue) => {
        return !this.selectedChart[checkTrue];
      });
      this.allList[toggleTarget].forEach((key) => {
        this.selectedChart[key] = returnValue;
      });
    } else this.selectedChart[toggleTarget] = !this.selectedChart[toggleTarget];
  }
}

export default SettingStore;
