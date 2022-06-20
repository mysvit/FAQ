sudo apt-get update;
sudo apt-get install ca-certificates wget gnupg lsb-release;

# Google Chrome
wget -qO- https://dl.google.com/linux/linux_signing_key.pub | gpg --dearmor | sudo dd of=/usr/share/keyrings/google.gpg;
echo "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/google.gpg] http://dl.google.com/linux/chrome/deb/ stable main" \
 | sudo dd of=/etc/apt/sources.list.d/google-chrome.list;
sudo apt update;
sudo apt install -y google-chrome-stable;

# Opera
wget -qO- https://deb.opera.com/archive.key | gpg --dearmor | sudo dd of=/usr/share/keyrings/opera-browser.gpg;
echo "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/opera-browser.gpg] https://deb.opera.com/opera-stable/ stable non-free" \
 | sudo dd of=/etc/apt/sources.list.d/opera-stable.list;
sudo apt-get update;
sudo apt-get install opera-stable;

# DBeaver
wget -qO- https://dbeaver.io/debs/dbeaver.gpg.key | gpg --dearmor | sudo dd of=/usr/share/keyrings/dbeaver.gpg;
echo "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/dbeaver.gpg] https://dbeaver.io/debs/dbeaver-ce /" | sudo dd of=/etc/apt/sources.list.d/dbeaver.list;
sudo apt-get update;
sudo apt -y install default-jdk;
sudo apt -y install dbeaver-ce;

#Mozilla
sudo apt remove thunderbird/jammy
#gpg --recv-keys --keyserver keyserver.ubuntu.com A6DCF7707EBC211F
#gpg --export A6DCF7707EBC211F | sudo dd of=/usr/share/keyrings/mozilla.gpg
gpg --export --keyserver keyserver.ubuntu.com A6DCF7707EBC211F | sudo dd of=/usr/share/keyrings/mozilla.gpg
echo "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/mozilla.gpg] http://ppa.launchpad.net/ubuntu-mozilla-security/ppa/ubuntu $(lsb_release -cs) main" | sudo dd of=/etc/apt/sources.list.d/mozilla.list;
sudo apt install firefox

# Chromium browser
sudo apt install chromium-browser


# Webstorm - download and unpack to ~/soft/webstorm
# from app luncher add to Favorites and TaskManager
tee -a /home/sv/.local/share/applications/webstorm.desktop <<EOF
[Desktop Entry]
Comment[en_US]=
Comment=
Exec=/home/sv/soft/webstorm/bin/webstorm.sh
GenericName[en_US]=
GenericName=
Icon=/home/sv/soft/webstorm/bin/webstorm.png
MimeType=
Name[en_US]=WebStorm
Name=WebStorm
Path=
StartupNotify=true
Terminal=false
TerminalOptions=
Type=Application
X-DBUS-ServiceName=
X-DBUS-StartupType=
X-KDE-SubstituteUID=false
X-KDE-Username=
EOF

# Docker
wget -qO- https://download.docker.com/linux/ubuntu/gpg | gpg --dearmor | sudo dd of=/usr/share/keyrings/docker.gpg;
echo "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/docker.gpg] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable" \
  | sudo dd of=/etc/apt/sources.list.d/docker.list;
sudo apt-get update;
sudo apt-get install docker-ce docker-ce-cli containerd.io docker-compose-plugin;

#tmux
sudo apt-get install tmux xclip;
