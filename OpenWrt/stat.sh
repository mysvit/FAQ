#add html page to LuCI
echo test > /www/my_page.html

#install app
opkg install apppp
opkg install tcpdump-mini

#stat
cat /proc/net/nf_conntrack | grep tcp

#restart dhcp
vi /etc/config/dhcp
/etc/init.d/dnsmasq restart
/etc/init.d/odhcpd restart
#resatr addblock
/etc/init.d/adblock restart
 
#firewall
vi /etc/config/firewall
service firewall restart

#network and DNS
vi /etc/config/network


#Automount the partition
#Generate a config entry for the fstab file:
block detect | uci import fstab
#Now enable automount on that config entry:
uci set fstab.@mount[-1].enabled='1'
uci commit fstab
#Optionally enable autocheck of the file system each time the OpenWrt device powers up:
uci set fstab.@global[0].check_fs='1'
uci commit fstab
#Reboot your OpenWrt device (to verify that automount works)
#After the reboot, check your results: Run
uci show fstab

##################
# User Add
opkg install shadow-useradd
useradd USER
passwd USER

##################
# Add samba password to user
smbpasswd -a USER
