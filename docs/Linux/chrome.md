---
sidebar_position: 5
---

# Chrome

## ChromeDriver
https://chromedriver.chromium.org/home

```
whereis gooogle-chrome
```
Should be:
```
google-chrome: /usr/bin/google-chrome
```

And
```
whereis chromedriver
```

```
/usr/bin/google-chrome
```

### Chrome

Version 118.0.x https://googlechromelabs.github.io/chrome-for-testing/#stable
```
wget https://edgedl.me.gvt1.com/edgedl/chrome/chrome-for-testing/118.0.5993.70/linux64/chrome-linux64.zip
```
```
unzip chrome-linux64.zip
```
```
sudo mv chrome-linux64 /opt
```
```
sudo ln -s /opt/chrome-linux64/chrome /usr/bin/google-chrome
```
Version 118.0.x
```
google-chrome --version
```


### Chrome Driver
Chrome Driver:

```
wget https://edgedl.me.gvt1.com/edgedl/chrome/chrome-for-testing/118.0.5993.70/linux64/chromedriver-linux64.zip
```
```
unzip chromedriver-linux64.zip
```
```
sudo mv chromedriver-linux64/chromedriver /usr/bin/.
```
```
chromedriver --version
```

Remove binaries:

```
rm *.zip
```

```
rm -r chromedriver-linux64
```

## References

- https://chromedriver.chromium.org/home
- https://googlechromelabs.github.io/chrome-for-testing/#stable
- https://skolo.online/documents/webscrapping/#step-1-download-chrome

----


An alternative
```
wget https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb
```
```
sudo apt install ./google-chrome-stable_current_amd64.deb -y
```