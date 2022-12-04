import ahcStats from '../json/ahc-stats.json'
import { UserResult, ContestResult } from '../types';

const latestId = ahcStats.length - 1;

function GetContestResultIdBy(id: number, userName: string): number {
  return ahcStats[id].Results.findIndex(elm => elm.UserName == userName);
}

export function GetLatestContestResultIdBy(userName: string): number {
  return GetContestResultIdBy(latestId, userName);
}

export const latestContestName: string = ahcStats[latestId].ContestName;
export const latestContestResults: ContestResult[] = ahcStats[latestId].Results;

export function GetMyContestsHist(userName: string): UserResult[] {
  let res: UserResult[] = [];
  for (let id = 0; id <= latestId; id++) {
    const myContestResultId = GetContestResultIdBy(id, userName);
    const myContestResult = ahcStats[id].Results[myContestResultId];
    const result: UserResult = {
        contestName: ahcStats[id].ContestName,
        duration: ahcStats[id].Duration,
        perf: myContestResult?.Perf,
        rate: myContestResult?.HRate,
    };
    res.push(result);
  }
  return res;
}
