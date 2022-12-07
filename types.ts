export type ContestMetadata = {
  contestName: string;
  duration: number;
  endDate: string,
  minHRateOld: number,
  maxHRateOld: number,
  minHRate: number,
  maxHRate: number,
  minARate: number,
  maxARate: number,
  minPerf: number,
  maxPerf: number,
}

export type UserResult = {
  contestName: string;
  duration: number;
  perf: number;
  hRate: number;
  aRate: number;
}

export type ContestResult = {
  userName: string;
  hRateOld: number;
  hRate: number;
  perf: number;
  aRate: number;
  attendance: number;
}
