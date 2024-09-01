import Axios, { AxiosResponse } from 'axios';
import { ApiResponse } from './../types/User';

const BASE_URL = 'https://www.tiktok.com/api-live/user/room';

export const fetchUser = async (
    uniqueId: string,
    aid: number = 1988,
    sourceType: number = 54
): Promise<ApiResponse & { isLive: boolean }> => {
    try {
        const { data }: AxiosResponse<ApiResponse> = await Axios.get(BASE_URL, {
            params: { aid, sourceType, uniqueId }
        });

        const isLive = data.data?.liveRoom?.streamId != null;

        return {
            ...data,
            isLive
        };
    } catch (error) {
        console.error("Error fetching user data:", error);
        throw new Error("Failed to fetch user data.");
    }
};
