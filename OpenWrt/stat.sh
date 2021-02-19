#add html page to LuCI
echo test > /www/my_page.html

#install app
opkg install apppp
opkg install tcpdump-mini

#stat
cat /proc/net/nf_conntrack | grep tcp

#restart dhcp
/etc/init.d/adblock restart
/etc/init.d/odhcpd restart
#resatr addblock
/etc/init.d/adblock restart
 
