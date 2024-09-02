import { type TikTokApiResponse } from './types/User';
import { fetchUser } from './utils/fetchUser';

export const getUser = async (username: string): Promise<TikTokApiResponse> => {
    const response = await fetchUser(username);
    return response;
};

const TikTok = {
    getUser
}

export default TikTok;