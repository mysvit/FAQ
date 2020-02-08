// extract ADTS audio
ffmpeg -i input-video.avi -vn -acodec copy output-audio.aac

// transcode stereo
ffmpeg -i input-video.avi -map 0:1 -c:a aac ukr.m4a
