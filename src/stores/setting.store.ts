import { makeAutoObservable, toJS } from 'mobx';
import DashBoardStore from 'src/stores/dashBoard.store';
import RootStore from 'src/stores/root.store';
import { settingInterface } from 'src/interfaces';
import { axiosPost } from 'src/libs/axios';

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

  listChart: string[] = [];

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

  openFanConfig = false;

  fanControl = '0';

  constructor(root: RootStore) {
    makeAutoObservable(this);
    this.root = root;
    this.dashboard = this.root.dashBoardStore;
    this.listChart = Object.keys(this.selectedChart).filter((key) => this.selectedChart[key]);
    this.fanControl = this.dashboard.currentFan;
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
    return toJS(this.allList);
  }

  get getListChart() {
    return toJS(this.listChart);
  }

  setSelectedChart(toggleTarget: string) {
    if (toggleTarget === 'CPU' || toggleTarget === 'MEM' || toggleTarget === 'FAN' || toggleTarget === 'TEMP') {
      const returnValue = this.allList[toggleTarget].every((checkTrue) => {
        return !this.selectedChart[checkTrue];
      });
      this.allList[toggleTarget].forEach((key) => {
        this.selectedChart[key] = returnValue;
        if (returnValue) {
          this.listChart.push(key);
        } else {
          this.listChart.splice(this.listChart.indexOf(key), 1);
        }
      });
    } else {
      if (!this.selectedChart[toggleTarget]) {
        this.listChart.push(toggleTarget);
      } else {
        this.listChart.splice(this.listChart.indexOf(toggleTarget), 1);
      }
      this.selectedChart[toggleTarget] = !this.selectedChart[toggleTarget];
    }
  }

  setListChart(listChart: string[], startIndex: number, endIndex: number) {
    const result = Array.from(listChart);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);
    this.listChart = result;
  }

  get getOpenFanConfig() {
    return this.openFanConfig;
  }

  setOpenFanConfig(clicked: any) {
    this.openFanConfig = this.openFanConfig ? null : clicked;
  }

  get getFanControl() {
    return toJS(this.fanControl);
  }

  setFanControl(value: string) {
    console.log(`${this.root.SERVER}:${this.root.SERVER_PORT}/monitor/fan`);
    this.fanControl = value;
    axiosPost({
      url: `${this.root.SERVER}:${this.root.SERVER_PORT}/monitor/fan`,
      data: { value: (Number(value) * 2.5).toString() },
    });
  }
}

export default SettingStore;
