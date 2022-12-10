import contestsMetadata from '../json/contests.json';
import type { ContestMetadata, UserResult, UserData } from '../types';

export const numContests = contestsMetadata.length;
export function GetContestMetadata(id: number): ContestMetadata {
  return contestsMetadata[id];
}

export function GetMyContestsHist(userData: UserData) : UserResult[] {
  let res: UserResult[] = [];
  let hRateOld = 0;
  for (let id = 0; id < numContests; id++) {
    const contestName = GetContestMetadata(id).contestName;
    const myContestResult = userData?.[contestName];
    const hRate = myContestResult?.hRate;
    const result: UserResult = {
        contestName: contestName,
        duration: GetContestMetadata(id).duration,
        place: myContestResult?.place,
        perf: myContestResult?.perf,
        hRateOld: hRateOld,
        hRate: hRate,
        aRate: myContestResult?.aRate,
    };
    if ( hRate ) {
      hRateOld = hRate;
    }
    res.push(result);
  }
  return res;
}
