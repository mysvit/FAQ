#!/usr/bin/env bash

#cat *.VOB > output.vob

ffmpeg \
  -i "Karol - The Pope, the Man (2006).avi" \
  -i "Karol - The Pope, the Man (2006).m4a" \
  -map 0:0 -map 1 -map 0:2 \
  -metadata:s:a:0 language=rus -metadata:s:a:0 title="Russian stereo" \
  -metadata:s:a:1 language=pol -metadata:s:a:1 title="Polish 5.1" \
  -codec:v libx264 -preset veryfast -crf 21 \
  -codec:a copy \
  "Karol - The Pope, the Man (2006).mp4"
