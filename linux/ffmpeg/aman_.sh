#!/usr/bin/env bash

#cat *.VOB > output.vob

ffmpeg \
  -i "Karol - A Man Who Became Pope (2005).avi" \
  -map 0:0 -map 0:1 \
  -metadata title="Karol - A Man Who Became Pope" -metadata year="2005" \
  -metadata:s:a:0 language=rus -metadata:s:a:0 title="Russian 5.1" \
  -codec:v libx264 -preset veryslow -crf 18 \
  -codec:a copy \
  "Karol - A Man Who Became Pope (2005).mp4"
