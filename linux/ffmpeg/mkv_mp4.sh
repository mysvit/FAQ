#!/usr/bin/env bash

for f in *.mkv ; do sudo ffmpeg -i "$f" -map 0 -codec copy -codec:s mov_text "${f%.mkv}.mp4" ; done
