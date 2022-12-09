import contests from '../json/contests.json';
import ahcStats from '../json/ahc-stats.json';
import { ContestResult } from '../types';

export const numContests = contests.length;

const latestId = contests.length - 1;

function GetContestResultIdBy(id: number, userName: string): number {
  return ahcStats[id].results.findIndex(elm => elm.userName == userName);
}

export function GetLatestContestResultIdBy(userName: string): number {
  return GetContestResultIdBy(latestId, userName);
}

export const latestContestName: string = ahcStats[latestId].contestName;
export const latestContestResults: ContestResult[] = ahcStats[latestId].results;
