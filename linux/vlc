Logitech C922

--to http

cvlc v4l2:///dev/video0:chroma=h264:width=1280:height=720 :input-slave="alsa://hw:1,0" 
--sout '#transcode{vcodec=h264,scale=Auto,width=1280,height=720,acodec=a52,ab=128,channels=2,samplerate=44100}
:std{access=http,mux=ts,dst=localhost:8080,name=stream,mime=video/ts}'
----run--
cvlc v4l2:///dev/video0:chroma=h264:width=1280:height=720 :input-slave="alsa://hw:1,0" --sout '#transcode{vcodec=h264,scale=Auto,width=1280,height=720,acodec=a52,ab=64,channels=2,samplerate=44100}:std{access=http,mux=ts,dst=localhost:8080,name=stream,mime=video/ts}'
cvlc v4l2:///dev/video0:chroma=h264:width=1280:height=720 :input-slave="alsa://hw:1,0" --sout '#transcode{vcodec=h264,scale=Auto,width=1280,height=720,acodec=a52,ab=64,channels=2,samplerate=44100}:std{access=http,mux=ffmpeg{mux=flv},dst=localhost:8080}'
-- short
cvlc v4l2:///dev/video0:chroma=h264:width=640:height=420 :input-slave="alsa://hw:1,0" --sout '#transcode{vcodec=h264,scale=Auto,acodec=a52,ab=64,channels=2,samplerate=44100}:std{access=http,mux=ts,dst=localhost:8080,name=stream,mime=video/ts}'
rasperry
cvlc v4l2:///dev/video0:chroma=h264:width=640:height=420 :input-slave="alsa://hw:0,0" --sout '#transcode{vcodec=h264,scale=Auto,acodec=a52,ab=64hannels=2,samplerate=44100}:std{access=http,mux=ts,dst=127.0.0.1:8080,name=stream,mime=video/ts}'

--to youtube c
cvlc v4l2:///dev/video0:chroma=h264:width=1280:height=720 :input-slave="alsa://hw:1,0" 
--sout '#transcode{vcodec=h264,scale=Auto,width=1280,height=720,acodec=mp3,ab=128,channels=2,samplerate=44100}
:std{access=rtmp,mux=ffmpeg{mux=flv},dst=rtmp://a.rtmp.youtube.com/live2/xxx-ub1g-xxx-xxxx}'

logitech c922 with audio
cvlc v4l2:///dev/video0:chroma=h264:width=1280:height=720 :input-slave="alsa://hw:1,0" --sout '#transcode{vcodec=h264,scale=Auto,width=1280,height=720,acodec=a52,ab=128,channels=2,samplerate=44100}:std{access=rtmp,mux=ffmpeg{mux=flv},dst=rtmp://a.rtmp.youtube.com/live2/youtube_key}'

logitech c922 with external audio - ubuntu
cvlc v4l2:///dev/video0:chroma=h264:width=1280:height=720 :input-slave="alsa://hw:0,0" --sout '#transcode{vcodec=h264,scale=Auto,width=1280,height=720,acodec=mp3, ab=128,channels=1,samplerate=44100}:std{access=rtmp,mux=ffmpeg{mux=flv},dst=rtmp://a.rtmp.youtube.com/live2/xxxx-xxxx-xxxx-20qu }'

logitech c922 without audio
cvlc v4l2:///dev/video0:chroma=h264:width=640:height=480 --sout '#transcode{vcodec=h264,scale=Auto,acodec=mp3, ab=128,channels=1,samplerate=44100}:std{access=rtmp,mux=ffmpeg{mux=flv},dst=rtmp://a.rtmp.youtube.com/live2/xxxx-xxxx-xxxx-20qu}'

logitech c922 with external audio - raspberry
cvlc v4l2:///dev/video0:chroma=h264:width=1280:height=720 --sout '#transcode{vcodec=h264,scale=Auto,width=1280,height=720,acodec=mp3, ab=128,channels=1,samplerate=44100}:std{access=rtmp,mux=ffmpeg{mux=flv},dst=rtmp://a.rtmp.youtube.com/live2/xxxx-xxxx-xxxx-20qu}'



https://github.com/obsproject/obs-studio/wiki/Install-Instructions

