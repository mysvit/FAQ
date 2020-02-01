ffmpeg -i v0.mp4 -i v1.mkv -map 0:0 -c:v ibx264 -preset fast -crf 21 -map 0:1 -c:a aac -b:a 128k -map 1:2 -c copy mix_v1_a1_a2.mp4
