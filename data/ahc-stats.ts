import ahcStats from './ahc-stats.json'

const userName = 'ToastUz';
const latestId = ahcStats.length - 1;

const GetContestResultIdBy = (id: number, name: string): number => {
    return ahcStats[id].Results.findIndex(elm => elm.UserName == name);
}

const myLatestContestResultId = GetContestResultIdBy(latestId, userName);

export const latestContestName = ahcStats[latestId].ContestName;
export const latestContestResults = ahcStats[latestId].Results;
export const myLatestContestResults = [ latestContestResults[myLatestContestResultId] ];

type ContestResult = {
    contestName: string;
    duration: number;
    endDate: string;
    place: number;
    perf: number;
    rate: number;
}

const GetMyContestsHist = (name: string): ContestResult[] => {
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

export const myContestHist = GetMyContestsHist(userName);
