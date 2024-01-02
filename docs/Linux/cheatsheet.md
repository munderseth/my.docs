---
sidebar_position: 1
---

# Cheat Sheet

## Notes
Find binary
```
whereis NAME
```

List processes:
```
ps aux
```
```
ps -e
```
```
top
```
Kill process:
```
kill -9 <pid>
```
OS version (i.e. *Ubuntu 20.04.6 LTS*)
```
lsb_release -d
```
```
cat /etc/os-release
```
Using Windows for WSL
```
wsl -l -v
```

Use of `**`, called *glob*
- [Stackoverflow - double asterisk](https://stackoverflow.com/questions/28176590/what-does-the-double-asterisk-wildcard-mean)
- To enable in bash - `shopt -s globstar`

Remove directory
```
rm -rf <NAME>
```

Bash script 1st lst line:
```
#!/bin/bash
```

Make file executable:
```
chmod a+x FILE
```