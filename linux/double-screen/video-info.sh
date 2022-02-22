############################### nvidia driver info - glxinfo

#run on user permittion not root
glxinfo | egrep "OpenGL vendor|OpenGL renderer"

# info opengl
glxinfo | grep NVIDIA

# list of cards
lspci | grep VGA
