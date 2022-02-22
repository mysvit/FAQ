// rename file for smba
find . -depth ! -path . -execdir bash -c "echo -n '{}' | sed 's/[\*>\?\"|\\\:<]/-/g' | sed -r 's/\.+$| +$//g'|  xargs -0  mv -b '{}' 2>&1 | grep -v 'same file'" \;
