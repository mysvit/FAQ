sudo apt-get install cifs-utils
sudo mkdir /mnt/media
sudo chown -R nobody:nogroup /mnt/media/
sudo chmod -R 0777 /mnt/media/
sudo nano /etc/fstab
#add 
//192.168.1.1/MEDIA /mnt/media cifs username=USER,password=PASSWORD,vers=1.0,uid=nobody,iocharset=utf8,noperm 0 0

sudo mount -a

#OR manual
#sudo umount -t cifs -o username=USER,vers=1.0 //192.168.1.1/MEDIA /mnt/media/

