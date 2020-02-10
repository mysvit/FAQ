ffmpeg -i VTS_01_1.VOB -c:v libx265 -preset ultrafast -x265-params crf=22:qcomp=0.8:aq-mode=1:aq_strength=1.0:qg-size=16:psy-rd=0.7:psy-rdoq=5.0:rdoq-level=1:merange=44 VTS_01_1.mkv
