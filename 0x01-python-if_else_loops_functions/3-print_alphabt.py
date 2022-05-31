#!/usr/bin/python3
for i in range(97, 123):
    print(f"{chr(i) if chr(i) != 'e' and chr(i) != 'q' else ''}", end="")
