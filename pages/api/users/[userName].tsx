import type { NextApiRequest, NextApiResponse } from 'next'
import type { UserData } from '../../../types';
import users_hist from '../../../json/users_hist.json';

function GetUserData(userName: string) : UserData {
  return (users_hist as {[userName: string]: UserData})[userName];
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<UserData>
) {
  const userName = req.query.userName as string;
  res.status(200).json(GetUserData(userName))
}
