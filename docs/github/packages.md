---
sidebar_position: 3
---

# NPM
Notes are focused on the GitHub [npm registry](https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-npm-registry) usage.

## Basics
Some basic info.

Setup initial package .json file
```
npm init -y
```

Save packages under teh `devDependencies` object in package .json file. Not install when production used.
```
npm install --save-dev <package name>
```

Update an existing package to the latest
```
npm update <package name>
```

Uninstall an existing package
```
npm uninstall <package name>
```

Only production installation
```
npm install --production
```

### Updates

- Reference info on [stackoverflow](https://stackoverflow.com/questions/16073603/how-to-update-each-dependency-in-package-json-to-the-latest-version/16074029#16074029)

```
npm i -g npm-check-updates
ncd -u
npm install
```

## Publish

- To `Publish` a package
  - Add *publishConfig* for `https://npm.pkg.github.com` in the **package.json** file.
    ```
    "publishConfig": {
      "registry": "https://npm.pkg.github.com/"
    },
    ```
  - Does **not** require `.npmrc` when using *publishConfig*
  - Use `GITHUB_TOKEN` for authenticating
  - Example ([test functions](https://github.com/s2technologies/testspace.test.functions))
    ```
    - uses: actions/setup-node@v3
        with:
          node-version: '14'
          registry-url: https://npm.pkg.github.com/
      - name: Deploy to GH NPM
        run: |
          npm publish --only=production
        env:
          NODE_AUTH_TOKEN: ${{ secrets.GITHUB_TOKEN }}
    ```

- Note that you can have a private repo and a public package. Refer to [access control](https://docs.github.com/en/packages/learn-github-packages/configuring-a-packages-access-control-and-visibility). A user would still require to authenticate via a personal access token though, but would not need access to the org/repo containing the package.


## Install
Requires an **access token** even if public; have to [authenticate](https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-npm-registry#authenticating-with-a-personal-access-token)

- To `Install` a package
    - Use `.npmrc` file (**Only pactical approach for local install**)
      ```
      @s2technologies:registry=https://npm.pkg.github.com
      //npm.pkg.github.com/:_authToken=${GH_PAT_FOR_TF}
      ```
    - The [Personal Access Token (PAT)](https://github.com/settings/developers)
      - `repo`
      - `read:packages`
      - `delete_repo` - if using *tf* to create projects

- Can install *without* `.npmrc` via a Workflow and no `package-lock.json` using **setup-node**
  ```
  - uses: actions/setup-node@v3
    with:
      node-version: '14'
      registry-url: https://npm.pkg.github.com/
  - name: Package Install
    env:
      NODE_AUTH_TOKEN: ${{ secrets.GH_PAT_FOR_TF}}
    run: npm install
  ```
  - Note, when switching to a sub-folder can't get install to work without a `.npmrc` file
 - Can log in via cli to authenticate a personal access token
 ```
 $ npm login --registry=https://npm.pkg.github.com
> Username: USERNAME
> Password: TOKEN
> Email: PUBLIC-EMAIL-ADDRESS
 ```


## From Repo
Reference - https://www.pluralsight.com/guides/install-npm-packages-from-gitgithub

```
npm install https://github.com/user_name/node_project_name
```
For specific branch add `#branch-name`

Example:
```
npm install https://github.com/s2technologies/testspace.test.functions#main
```


### Notes

- You can install package via repo. The `package.json` will be updated. The repo can thus install using `package.json`. But it will **not** work when using GitHub Workflow. The installation just hangs. Reference [here](https://stackoverflow.com/questions/68887428/npm-in-github-actions-env-not-installing-packages). The **workaround**:
  - remove the dependency from `package.json`
  - install in 2 steps in the workflow:
    ```
    - run: npm install https://github.com/user_name/node_project_name
    - run: npm install
    ```
- Using a `private` repo is more difficult (requires `ssh`, `key`)