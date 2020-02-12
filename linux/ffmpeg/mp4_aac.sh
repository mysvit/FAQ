ffmpeg -i video -map 0:0 -c:v libx264 -preset veryfast -crf 21 -map 0:1 -c:a aac -b:a 192k output.mp4
or
ffmpeg -i video -map 0:0 -c:v libx264 -preset veryfast -crf 21 -map 0:1 -c:a aac output.mp4
