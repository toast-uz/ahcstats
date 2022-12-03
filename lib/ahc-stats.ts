import ahcStats from '../json/ahc-stats.json'

const latestId = ahcStats.length - 1;

function GetContestResultIdBy(id: number, userName: string): number {
    return ahcStats[id].Results.findIndex(elm => elm.UserName == userName);
}

export function GetLatestContestResultIdBy(userName: string): number {
    return GetContestResultIdBy(latestId, userName);
}

export const latestContestName = ahcStats[latestId].ContestName;
export const latestContestResults = ahcStats[latestId].Results;

type ContestResult = {
    contestName: string;
    duration: number;
    endDate: string;
    place: number;
    perf: number;
    rate: number;
}

export function GetMyContestsHist(userName: string): ContestResult[] {
    let res: ContestResult[] = [];
    for (let id = 0; id <= latestId; id++) {
        const myContestResultId = GetContestResultIdBy(id, userName);
        const myContestResult = ahcStats[id].Results[myContestResultId];
        const result: ContestResult = {
            contestName: ahcStats[id].ContestName,
            duration: ahcStats[id].Duration,
            endDate: ahcStats[id].EndDate,
            place: myContestResult?.Place,
            perf: myContestResult?.Perf,
            rate: myContestResult?.HRate,
        };
        res.push(result);
    }
    return res;
}
