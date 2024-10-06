import { Topics } from './topics';
export interface CameraStreamingEvent {
    topic: Topics.CameraStreamingB4 | Topics.CameraStreamingB3 | Topics.CameraStreamingB2 | Topics.CameraStreamingB1 | Topics.CameraStreamingG | Topics.CameraStreaming01 | Topics.CameraStreaming02 | Topics.CameraStreaming03 | Topics.CameraStreaming04;
    data: {
        camera_id: string;
        frame_bytes: string;
        resolution: '1080p' | '720p' | '480p' | '360p' | '240p';
        encoding_format: "JPEG" | "PNG";
        timestamp: string;
    };
}
