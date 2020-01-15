#!/usr/bin/env bash

for f in *.avi ; do sudo ffmpeg -i "$f" -map 0:0 -c:v libx264 -preset slow -crf 21 -map 0:1 -c:a copy -map 0:3 -c:a ac3 -b:a 192k "${f%.avi}.mp4" ; done
