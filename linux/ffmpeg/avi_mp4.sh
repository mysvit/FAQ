#!/usr/bin/env bash

for f in *.avi ; do sudo ffmpeg -i "$f" -c:v libx264 -preset slow -crf 21 "${f%.avi}.mp4" ; done
