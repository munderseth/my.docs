---
sidebar_position: 7
---

# WSL

## Restart
Note, will automatically restart. Takes a few minutes to be up again for Visual Studio Code.

Using Powershell as Administrator:
```
powershell.exe Restart-Service LxssManager
```
Note, have to shutdown and reload VS folder.


Using Console:

```
wsl --shutdown
```

```
wsl --status
```

If running:
```
wsl --list --running
```

To restart manually:

- https://snippets.khromov.se/how-to-restart-wsl2-windows-subsystem-linux-on-windows-10/

Notes:
- https://blog.simonpeterdebbarma.com/2020-04-memory-and-wsl/ - Memory consumption

## Flush DNS Cache

Reference info - https://bard.google.com/chat/4e36149d64fc9119

The file is here `/etc/resolv.conf`:
```
# [network]
# generateResolvConf = false
nameserver 172.26.176.1
```

Then restart WSL `wsl --shutdown` using PowerShell console as Admin.

## Local Testing
Using `localhost`.

Refer to this article - [stackoverflow](https://stackoverflow.com/questions/51583321/it-is-safe-to-use-lvh-me-instead-of-localhost-for-testing)

### lvh.me
This domain can be used for **local testing** subdomains, without having to update the `c:\windows\system32\drivers\etc\hosts` file.

Reference article - https://nickjanetakis.com/blog/ngrok-lvhme-nipio-a-trilogy-for-local-development-and-testing

- Another alternative is - https://readme.localtest.me/

Some commands
- `nslookup lvh.me`
- `host lvh.me`

