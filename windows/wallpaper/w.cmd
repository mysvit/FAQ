for /f "tokens=2*" %%a in ('reg query "HKCU\Software\Microsoft\Internet Explorer\Desktop\General" /v WallpaperSource 2^>^&1^|find "REG_"') do @set fn=%%b

copy %fn% %fn%_
rem delete %fn%

C:\Windows\System32\wscript.exe E:\w.vbs //B

pause
