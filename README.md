<h1 align="center">
 TikTok-is-Live

![GitHub Issues or Pull Requests](https://img.shields.io/github/issues/robke96/TikTok-is-Live)
![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/robke96/TikTok-is-Live)
![GitHub Repo stars](https://img.shields.io/github/stars/robke96/TikTok-is-Live)
</h1>

# Table of Contents
- [Description](#description)
- [Install](#install)
- [Usage](#Usage)

# Description

TikTok-is-Live is an unofficial TikTok API that allows you to check if a TikTok user is live and retrieve live stream and user details.

# Install

## NPM
```bash
npm install tiktok-is-live
```

# Usage
```typescript
import TikTok from 'tiktok-is-live';

const username = 'USERNAME'

TikTok.fetchUser(username)
    .then(response => {
        console.log('User data: ', response);
})
```

# Result
<details><summary><b>ApiResponse</b></summary><br>

```ts
{
  isLive: boolean
  data: {
    user: {
      avatarLarger: string | URL
      avatarMedium: string | URL
      avatarThumb: string | URL
      id: string
      nickname: string
      secUid: string
      secret: boolean
      uniqueId: string
      verified: boolean
      roomId: string
      signature: string
      status: number
      followStatus: number
    }
    stats: {
      followingCount: number
      followerCount: number
    }
    liveRoom: {
      coverUrl: string | URL
      title: string
      startTime: number
      status: number
      paidEvent: {
        event_id: number
        paid_type: number
      }
      liveSubOnly: number
      liveRoomMode: number
      hashTagId: number
      gameTagId: number
      liveRoomStats: {
        userCount: number
      }
      streamData: {
        pull_data: {
          options: {
            default_quality: {
              icon_type: number
              level: number
              name: string
              resolution: string
              sdk_key: string
              v_codec: string
            }
            qualities: {
              icon_type: number
              level: number
              name: string
              resolution: string
              sdk_key: string
              v_codec: string
            }[]
            show_quality_button: boolean
          }
          stream_data: string
        }
      }
      streamId: string
      multiStreamScene: number
      multiStreamSource: number
      hevcStreamData: {
        pull_data: {
          options: {
            default_quality: {
              icon_type: number
              level: number
              name: string
              resolution: string
              sdk_key: string
              v_codec: string
            }
            qualities: {
              icon_type: number
              level: number
              name: string
              resolution: string
              sdk_key: string
              v_codec: string
            }[]
            show_quality_button: boolean
          }
          stream_data: string
        }
      }
    }
  }
  message: string
  extra: {
    id: string
  }
  statusCode: number
}
```
</details>