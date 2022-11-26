
# NPM

Setup initial package .json file
```
npm init -y
```

Save packages under teh `devDependencies` object in package .json file. Not install when production used.
```
npm install --save-dev <package name>
```
Only production installation
```
npm install --production
```

## Use Repo

```
npm install --save git+https://<gitHost>/<userName>/<repoName>.git#master
```

## Updates

- Reference info on [stackoverflow](https://stackoverflow.com/questions/16073603/how-to-update-each-dependency-in-package-json-to-the-latest-version/16074029#16074029)

```
npm i -g npm-check-updates
ncd -u
npm install
```