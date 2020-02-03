

#https://help.ubuntu.com/community/TransmissionHowTo

sudo add-apt-repository ppa:transmissionbt/ppa
sudo apt-get update
sudo apt-get install transmission-cli transmission-common transmission-daemon
sudo service transmission-daemon stop
sudo nano /var/lib/transmission-daemon/info/settings.json
