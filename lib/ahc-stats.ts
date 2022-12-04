import ahcStats from '../json/ahc-stats.json'
import { UserResult, ContestResult } from '../types';

const latestId = ahcStats.length - 1;

function GetContestResultIdBy(id: number, userName: string): number {
  return ahcStats[id].results.findIndex(elm => elm.userName == userName);
}

export function GetLatestContestResultIdBy(userName: string): number {
  return GetContestResultIdBy(latestId, userName);
}

export const latestContestName: string = ahcStats[latestId].contestName;
export const latestContestResults: ContestResult[] = ahcStats[latestId].results;

export function GetMyContestsHist(userName: string): UserResult[] {
  let res: UserResult[] = [];
  for (let id = 0; id <= latestId; id++) {
    const myContestResultId = GetContestResultIdBy(id, userName);
    const myContestResult = ahcStats[id].results[myContestResultId];
    const result: UserResult = {
        contestName: ahcStats[id].contestName,
        duration: ahcStats[id].duration,
        perf: myContestResult?.perf,
        rate: myContestResult?.hRate,
    };
    res.push(result);
  }
  return res;
}
