ffmpeg -ss 40.3 -i "S02E08 35. Пчелка Майя - Подземная ловушка.mp4" \
 -ss 40.3 -i "S02E08.Sleepless Max.mp4" -map 0:0 -c copy -map 1:1 -c copy -metadata:s:a:0 language=ukr -metadata:s:a:0 title="Ukrainian stereo" \
"Maya the Bee S02E08 - Sleepless Max.mp4"
