#!/usr/bin/env bash

ffmpeg \
  -i "The.Ten.Commandments.BluRay.Remux.mkv" \
  -i "Ten.ac3" \
  -map 0:0 -map 1:0 -map 0:2 \
  -metadata:s:a:0 language=ukr -metadata:s:a:0 title="Ukainian 5.1" \
  -metadata:s:a:1 language=eng -metadata:s:a:1 title="English DTS 5.1" \
  -metadata:s:s:0 language=rus -metadata:s:s:0 title="Russian" \
  -codec:v libx264 -preset slow -crf 17 \
  -codec:a copy \
  "The.Ten.Commandments.BluRay.Remux.mp4"
