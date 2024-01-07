#!/usr/bin/python3
"""this is A script that:
- sends a request to the URL and displays the value
- of the X-Request-Id variable found in the other of the header ofthe response.
"""
import sys
import urllib.request

if __name__ == "__main__":
    url = sys.argv[1]

    request = urllib.request.Request(url)
    with urllib.request.urlopen(request) as response:
        print(dict(response.headers).get("X-Request-Id"))
