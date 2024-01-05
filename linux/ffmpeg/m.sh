#!/usr/bin/env bash

for f in *.avi ; do \
    ffmpeg -i "$f" \
    -metadata:s:a:0 language=ukr -metadata:s:a:0 title="Ukrainian Stereo" \
    -codec:v libx264 -preset slow -crf 21 \
    "${f%.avi}.mp4";\
done
