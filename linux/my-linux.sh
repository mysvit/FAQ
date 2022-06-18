# Webstorm


# Google Chrome
wget https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb -O /tmp/google-chrome-stable_current_amd64.deb;
sudo dpkg -i /tmp/google-chrome-stable_current_amd64.deb;
sudo rm /tmp/google-chrome-stable_current_amd64.deb;

# Opera
wget https://download3.operacdn.com/pub/opera/desktop/88.0.4412.40/linux/opera-stable_88.0.4412.40_amd64.deb -O /tmp/opera-stable_88.0.4412.40_amd64.deb;
sudo dpkg -i /tmp/opera-stable_88.0.4412.40_amd64.deb;
sudo rm /tmp/opera-stable_88.0.4412.40_amd64.deb;

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
sudo apt-get update;
sudo apt-get install ca-certificates wget gnupg lsb-release;
# Add Docker’s official GPG key:
sudo mkdir -p /etc/apt/keyrings;
wget -qO- https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg;
# Set up the repository
echo \
  "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/ubuntu \
  $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null;
# Install Docker Engine
sudo apt-get update;
sudo apt-get install docker-ce docker-ce-cli containerd.io docker-compose-plugin;

#tmux
sudo apt-get install tmux xclip;
