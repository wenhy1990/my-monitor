import ReportData from '../data/ReportData';
import { IMonitorConfig, IReportData } from '../typings/types';

export const config: IMonitorConfig = {
  // Metrics
  reportData: new ReportData({ logUrl: 'hole' }),
  isResourceTiming: false,
  isElementTiming: false,
  // Logging
  maxTime: 15000,
};
