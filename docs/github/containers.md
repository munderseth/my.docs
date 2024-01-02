---
sidebar_position: 3
---

# Containers

## Devcontainder.json

- [devcontainer.json properties](https://containers.dev/implementors/json_reference/#general-properties)
- Environment variables. Note requires rebuilding.
    ```
    "containerEnv": {
        "RAILS_ENV": "test",
        "MYSQL_PWD": "root"
    }
    ```

Example:


".devcontainer/devcontainer.json":

```
{
    "name": "Sandbox Container",
#   "image": "mcr.microsoft.com/devcontainers/ruby",
    "image": "mcr.microsoft.com/devcontainers/base:ubuntu",
    "features": {
        "ghcr.io/devcontainers-contrib/features/mysql-homebrew:1": {}
    }
}
```

## Codespaces

### Default Container
Default container do [not paid for storage](https://docs.github.com/en/enterprise-cloud@latest/codespaces/troubleshooting/troubleshooting-included-usage#storage-usage-for-your-base-dev-container).

Definition ID: `univeral`
```sh
devcontainer-info
```

The [univeral image](https://github.com/devcontainers/images/tree/main/src/universal).
  - [Content](https://github.com/devcontainers/images/blob/main/src/universal/history/dev.md#contents)


### Cost

- 2-core for 1 day is `$2.80`  ($0.18 x 2 x 8); 1 month is `$56.00` using 20 days


### Images
- https://github.com/devcontainers/images/tree/main/src
  - https://github.com/devcontainers/images/tree/main/src/base-ubuntu
  - https://github.com/devcontainers/images/tree/main/src/ruby
  - https://github.com/devcontainers/images/tree/main/src/ruby
- https://github.com/microsoft/vscode-dev-containers
  - https://github.com/microsoft/vscode-dev-containers/tree/main/containers/ruby

### Testspace

#### Azure
For `azure-pipelines.yml`:

- [ubuntu-20.04](https://learn.microsoft.com/en-us/azure/devops/pipelines/agents/hosted?view=azure-devops&tabs=yaml#software)
  - Defined [here](https://github.com/actions/runner-images/blob/main/images/linux/Ubuntu2004-Readme.md)
     - MySQL
     - Chrome
     - Chrome Driver
     - Etc

:::tip
The GitHub Actions Runner uses this [image](https://github.com/actions/runner-images/tree/main)
:::

#### CircleCI
For `config.yml`:

- https://registry.hub.docker.com/r/cimg/ruby
- https://registry.hub.docker.com/r/cimg/mariadb

### Features
- https://containers.dev/features
  - https://github.com/devcontainers-contrib/features/tree/main/src/mysql-homebrew



## References

### Doc
- https://docs.github.com/en/enterprise-cloud@latest/codespaces
- https://containers.dev/

#### Articles
- https://ianmitchell.dev/blog/creating-devcontainers-for-vs-code-and-github-codespaces
