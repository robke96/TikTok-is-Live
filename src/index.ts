import { ApiResponse } from './types/User';
import { fetchUser } from './utils/FetchUser';

export = {
    fetchUser: async (username: string): Promise<ApiResponse> => {
        const response = await fetchUser(username);
        return response;
    },
}
