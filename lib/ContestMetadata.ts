import contests from '../json/contests.json';
import { ContestMetadata } from '../types';

export const numContests = contests.length;

export function GetContestMetadata(id: number): ContestMetadata {
  return contests[id];
}
