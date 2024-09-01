// src/types.ts

export interface User {
    avatarLarger: string | URL;
    avatarMedium: string | URL;
    avatarThumb: string | URL;
    id: string;
    nickname: string;
    secUid: string;
    secret: boolean;
    uniqueId: string;
    verified: boolean;
    roomId: string;
    signature: string;
    status: number;
    followStatus: number;
}

export interface Stats {
    followingCount: number;
    followerCount: number;
}

export interface StreamData {
    pull_data: {
        options: {
            default_quality: QualityOption;
            qualities: QualityOption[];
            show_quality_button: boolean;
        };
        stream_data: string;
    };
}

export interface QualityOption {
    icon_type: number;
    level: number;
    name: string;
    resolution: string;
    sdk_key: string;
    v_codec: string;
}

export interface HevcStreamData {
    pull_data: {
        options: {
            default_quality: QualityOption;
            qualities: QualityOption[];
            show_quality_button: boolean;
        };
        stream_data: string;
    };
}

export interface LiveRoom {
    coverUrl: string | URL;
    title: string;
    startTime: number;
    status: number;
    paidEvent: {
        event_id: number;
        paid_type: number;
    };
    liveSubOnly: number;
    liveRoomMode: number;
    hashTagId: number;
    gameTagId: number;
    liveRoomStats: LiveRoomStats;
    streamData: StreamData;
    streamId: string;
    multiStreamScene: number;
    multiStreamSource: number;
    hevcStreamData: HevcStreamData;
}

export interface LiveRoomStats {
    userCount: number;
}

export interface ApiResponse {
    isLive: boolean;
    data: {
        user: User;
        stats: Stats;
        liveRoom: LiveRoom;
    };
    message: string;
    extra: {
        id: string;
    };
    statusCode: number;
}
