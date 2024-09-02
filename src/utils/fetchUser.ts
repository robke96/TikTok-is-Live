import Axios, { type AxiosResponse } from 'axios';
import { type TikTokApiResponse } from '../types/User';

const BASE_URL = 'https://www.tiktok.com/api-live/user/room';

export const fetchUser = async (
    uniqueId: string,
    aid: number = 1988,
    sourceType: number = 54
): Promise<TikTokApiResponse & { isLive: boolean }> => {
    try {
        const { data }: AxiosResponse<TikTokApiResponse> = await Axios.get(BASE_URL, {
            params: { aid, sourceType, uniqueId }
        });

        /* 
            STATUS
            2 = ONLINE LIVE
            4 = OFFLINE
        */
        const isLive = data.data?.liveRoom?.status === 2;

        return {
            ...data,
            isLive
        };
    } catch (error) {
        console.error("Error fetching user data:", error);
        throw new Error("Failed to fetch user data.");
    }
};
