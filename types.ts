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

export type UserData = { [contestName: string]: {
  place: number,
  hRate: number,
  aRate: number,
  perf: number,
}}

export type UserResult = {
  contestName: string;
  duration: number;
  place: number;
  perf: number;
  hRateOld: number;
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
