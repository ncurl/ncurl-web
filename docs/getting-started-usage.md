---
id: getting-started-usage
title: Usage
sidebar_label: Usage
---

NcURL is Fully compatible with cURL, support all `curl` options, just change the command `curl` to `ncurl`.

Just read the curl tutorial here: https://curl.haxx.se/docs/manual.html

## Example 

```bash
ncurl -i https://httpbin.org/get
```

```bash
HTTP/2 200
date: Sat, 23 May 2020 09:03:09 GMT
content-type: application/json
content-length: 256
server: gunicorn/19.9.0
access-control-allow-origin: *
access-control-allow-credentials: true
{
    "args": {},
    "headers": {
        "Accept": "*/*",
        "Host": "httpbin.org",
        "User-Agent": "curl/7.54.0",
        "X-Amzn-Trace-Id": "Root=1-5ec8e6cd-7e26d46c9d42cf2612e57d30"
    },
    "origin": "36.110.228.226",
    "url": "https://httpbin.org/get"
}

 View and share in: https://ncurl.sh/instants/?id=rZNGkidIDW
```