import ahcStats from './ahc-stats.json'

const latestId = ahcStats.length - 1;
export const latestContestName = ahcStats[latestId].ContestName;
export const xRateList = ahcStats[latestId].Results;

const GetXRateIdBy = (name: string): number => {
    return xRateList.findIndex(elm => elm.UserName == name);
}

const myXRateId = GetXRateIdBy('ToastUz');
export const myXRateList = [ xRateList[myXRateId] ];
