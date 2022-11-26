---
sidebar_position: 3
---

# Packages
Running notes for GitHub.

Reference - [npm registry](https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-npm-registry)


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


### Install
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


### From Repo
Reference - https://www.pluralsight.com/guides/install-npm-packages-from-gitgithub

```
npm install https://github.com/s2technologies/testspace.test.functions#main
```
