---
sidebar_position: 1
---

# Git Cheat Sheet

## Staging

Removes unstaged files
```
git restore .
```
```
git clean -n -d # dry run
```
Deletes files/folder that are untracked
```
git clean -fd
```

Rebase with branch
```
git checkout main
git pull
git checkout working-branch
git rebase main
```
Then force push
```
git push -u -f orign working-branch
```

### Tag

List
```
git tag
```

Create
```
git tag v1.0.0
git push origin v1.0.0
```

Delete local tag
```
git tag -d tagname
```

Delete remote tag
```
git push --delete origin tagname
```

## References

- https://www.freecodecamp.org/news/git-cheat-sheet/